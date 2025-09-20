'use client'

import { useEffect, useRef, useCallback } from 'react'

interface AudioVisualizerProps {
  audioRef: React.RefObject<HTMLAudioElement | null>
  isPlaying: boolean
}

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  life: number
  maxLife: number
  size: number
  color: [number, number, number]
  frequency: number
}

interface Sphere {
  x: number
  y: number
  z: number
  radius: number
  rotationX: number
  rotationY: number
  rotationZ: number
  rotationSpeedX: number
  rotationSpeedY: number
  rotationSpeedZ: number
  particles: Particle[]
  breathePhase: number
}

interface NoiseField {
  x: number
  y: number
  z: number
  intensity: number
  frequency: number
}

export default function AudioVisualizer({ audioRef, isPlaying }: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const animationRef = useRef<number | null>(null)
  const timeRef = useRef<number>(0)
  const spheresRef = useRef<Sphere[]>([])
  const noiseFieldsRef = useRef<NoiseField[]>([])
  const shockwavesRef = useRef<Array<{ x: number, y: number, z: number, radius: number, intensity: number, maxRadius: number }>>([])

  const initAudioContext = useCallback(() => {
    if (!audioRef.current || audioContextRef.current) return

    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    const analyser = audioContext.createAnalyser()
    const source = audioContext.createMediaElementSource(audioRef.current)

    analyser.fftSize = 1024
    analyser.smoothingTimeConstant = 0.7
    source.connect(analyser)
    analyser.connect(audioContext.destination)

    audioContextRef.current = audioContext
    analyserRef.current = analyser
    sourceRef.current = source
  }, [audioRef])

  // 3D projection function
  const project3D = (x: number, y: number, z: number, canvas: HTMLCanvasElement) => {
    const fov = 800
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    const scale = fov / (fov + z)
    return {
      x: centerX + (x - centerX) * scale,
      y: centerY + (y - centerY) * scale,
      scale: scale
    }
  }

  // Perlin-like noise function
  const noise3D = (x: number, y: number, z: number): number => {
    const hash = (n: number) => {
      n = ((n << 13) ^ n)
      return (n * (n * n * 15731 + 789221) + 1376312589) & 0x7fffffff
    }

    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)

    const xi = Math.floor(x) & 255
    const yi = Math.floor(y) & 255
    const zi = Math.floor(z) & 255

    const xf = x - Math.floor(x)
    const yf = y - Math.floor(y)
    const zf = z - Math.floor(z)

    const u = fade(xf)
    const v = fade(yf)
    const w = fade(zf)

    const a = hash(xi + hash(yi + hash(zi)))
    const b = hash(xi + 1 + hash(yi + hash(zi)))
    const c = hash(xi + hash(yi + 1 + hash(zi)))
    const d = hash(xi + 1 + hash(yi + 1 + hash(zi)))

    return ((a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v) * (1 - w) / 2147483647
  }

  const initializeSpheres = (canvas: HTMLCanvasElement) => {
    spheresRef.current = []
    const numSpheres = 4

    for (let i = 0; i < numSpheres; i++) {
      const sphere: Sphere = {
        x: canvas.width / 2 + (i - numSpheres / 2) * 200,
        y: canvas.height / 2 + Math.sin(i * 2) * 100,
        z: -100 + Math.cos(i * 1.5) * 200,
        radius: 80 + Math.random() * 40,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        rotationSpeedX: 0.01 + Math.random() * 0.02,
        rotationSpeedY: 0.008 + Math.random() * 0.015,
        rotationSpeedZ: 0.005 + Math.random() * 0.01,
        particles: [],
        breathePhase: Math.random() * Math.PI * 2
      }

      // Create particles for each sphere
      const particleCount = 800
      for (let j = 0; j < particleCount; j++) {
        const phi = Math.acos(1 - 2 * Math.random())
        const theta = Math.random() * 2 * Math.PI

        const x = sphere.radius * Math.sin(phi) * Math.cos(theta)
        const y = sphere.radius * Math.sin(phi) * Math.sin(theta)
        const z = sphere.radius * Math.cos(phi)

        sphere.particles.push({
          x: sphere.x + x,
          y: sphere.y + y,
          z: sphere.z + z,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.5,
          life: Math.random(),
          maxLife: 1,
          size: 1 + Math.random() * 3,
          color: [
            100 + Math.random() * 155,
            50 + Math.random() * 205,
            150 + Math.random() * 105
          ],
          frequency: Math.random()
        })
      }

      spheresRef.current.push(sphere)
    }
  }

  const initializeNoiseFields = () => {
    noiseFieldsRef.current = []
    const numFields = 12

    for (let i = 0; i < numFields; i++) {
      noiseFieldsRef.current.push({
        x: Math.random() * 1000 - 500,
        y: Math.random() * 1000 - 500,
        z: Math.random() * 1000 - 500,
        intensity: 0.5 + Math.random() * 1.5,
        frequency: 0.01 + Math.random() * 0.02
      })
    }
  }

  const detectBeat = (dataArray: Uint8Array): number => {
    let bass = 0
    const bassEnd = Math.floor(dataArray.length * 0.1)

    for (let i = 0; i < bassEnd; i++) {
      bass += dataArray[i]
    }

    return (bass / bassEnd) / 255
  }

  const getAmplitude = (dataArray: Uint8Array): number => {
    let sum = 0
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i]
    }
    return sum / dataArray.length / 255
  }

  const getStardustColor = (particle: Particle, intensity: number): string => {
    const [r, g, b] = particle.color
    const alpha = particle.life * intensity * 0.8

    // Stardust shimmer effect
    const shimmer = 0.8 + 0.2 * Math.sin(timeRef.current * 0.01 + particle.frequency * 10)

    return `rgba(${Math.floor(r * shimmer)}, ${Math.floor(g * shimmer)}, ${Math.floor(b * shimmer)}, ${alpha})`
  }

  const drawShockwaves = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    shockwavesRef.current.forEach((shockwave, index) => {
      const projected = project3D(shockwave.x, shockwave.y, shockwave.z, canvas)

      ctx.beginPath()
      ctx.arc(projected.x, projected.y, shockwave.radius * projected.scale, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(255, 255, 255, ${shockwave.intensity})`
      ctx.lineWidth = 2
      ctx.stroke()

      // Expand shockwave
      shockwave.radius += 4
      shockwave.intensity *= 0.98

      // Remove expired shockwaves
      if (shockwave.radius > shockwave.maxRadius || shockwave.intensity < 0.01) {
        shockwavesRef.current.splice(index, 1)
      }
    })
  }

  const animate = useCallback(() => {
    if (!analyserRef.current || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const bufferLength = analyserRef.current.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    analyserRef.current.getByteFrequencyData(dataArray)

    timeRef.current += 16

    // Clear with deep space background
    const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2)
    gradient.addColorStop(0, 'rgba(5, 5, 15, 0.1)')
    gradient.addColorStop(1, 'rgba(0, 0, 5, 0.15)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const beatIntensity = detectBeat(dataArray)
    const amplitude = getAmplitude(dataArray)

    // Trigger shockwaves on beats
    if (beatIntensity > 0.8 && Math.random() > 0.7) {
      const sphere = spheresRef.current[Math.floor(Math.random() * spheresRef.current.length)]
      shockwavesRef.current.push({
        x: sphere.x,
        y: sphere.y,
        z: sphere.z,
        radius: 10,
        intensity: beatIntensity,
        maxRadius: 300
      })
    }

    // Update spheres
    spheresRef.current.forEach((sphere, sphereIndex) => {
      // Breathing effect
      sphere.breathePhase += 0.02
      const breatheScale = 1 + Math.sin(sphere.breathePhase) * 0.1 * amplitude

      // Amplitude-based rotation speed
      const rotationMultiplier = 0.3 + amplitude * 2
      sphere.rotationX += sphere.rotationSpeedX * rotationMultiplier
      sphere.rotationY += sphere.rotationSpeedY * rotationMultiplier
      sphere.rotationZ += sphere.rotationSpeedZ * rotationMultiplier

      // Update particles with noise fields and liquid flow
      sphere.particles.forEach((particle, particleIndex) => {
        // Apply noise field forces
        let forceX = 0, forceY = 0, forceZ = 0

        noiseFieldsRef.current.forEach(field => {
          const dx = particle.x - field.x
          const dy = particle.y - field.y
          const dz = particle.z - field.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 300) {
            const noiseValue = noise3D(
              particle.x * field.frequency + timeRef.current * 0.001,
              particle.y * field.frequency + timeRef.current * 0.001,
              particle.z * field.frequency + timeRef.current * 0.001
            )

            const force = field.intensity * noiseValue * (1 - distance / 300)
            forceX += force * dx / distance
            forceY += force * dy / distance
            forceZ += force * dz / distance
          }
        })

        // Liquid stardust flow
        particle.vx += forceX * 0.1 + (Math.random() - 0.5) * 0.02
        particle.vy += forceY * 0.1 + (Math.random() - 0.5) * 0.02
        particle.vz += forceZ * 0.1 + (Math.random() - 0.5) * 0.02

        // Apply velocity damping for liquid effect
        particle.vx *= 0.98
        particle.vy *= 0.98
        particle.vz *= 0.98

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz

        // Frequency-based particle behavior
        const freqIndex = Math.floor(particle.frequency * dataArray.length)
        const frequency = dataArray[freqIndex] / 255

        // Update life based on frequency
        particle.life = Math.max(0, Math.min(1, particle.life + (frequency - 0.5) * 0.02))

        // Draw particle
        const projected = project3D(particle.x, particle.y, particle.z, canvas)

        if (projected.scale > 0.1 && particle.life > 0.1) {
          const size = particle.size * projected.scale * breatheScale * (0.5 + frequency * 0.5)

          ctx.beginPath()
          ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2)
          ctx.fillStyle = getStardustColor(particle, frequency + amplitude)
          ctx.fill()

          // Add glow effect for bright particles
          if (frequency > 0.6) {
            ctx.beginPath()
            ctx.arc(projected.x, projected.y, size * 2, 0, Math.PI * 2)
            ctx.fillStyle = getStardustColor(particle, (frequency + amplitude) * 0.3)
            ctx.fill()
          }
        }

        // Regenerate dead particles
        if (particle.life <= 0) {
          const phi = Math.acos(1 - 2 * Math.random())
          const theta = Math.random() * 2 * Math.PI

          const x = sphere.radius * Math.sin(phi) * Math.cos(theta)
          const y = sphere.radius * Math.sin(phi) * Math.sin(theta)
          const z = sphere.radius * Math.cos(phi)

          particle.x = sphere.x + x
          particle.y = sphere.y + y
          particle.z = sphere.z + z
          particle.life = 1
          particle.vx = (Math.random() - 0.5) * 0.5
          particle.vy = (Math.random() - 0.5) * 0.5
          particle.vz = (Math.random() - 0.5) * 0.5
        }
      })
    })

    // Draw shockwaves
    drawShockwaves(ctx, canvas)

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      if (!audioContextRef.current) {
        initAudioContext()
      }

      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume()
      }

      animate()
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, animate, initAudioContext])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
        initializeSpheres(canvas)
        initializeNoiseFields()
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: 'radial-gradient(circle, #0a0a0f 0%, #000000 100%)' }}
    />
  )
}