'use client'

import { useState, useRef } from 'react'
import AudioVisualizer from '@/components/visualizer/AudioVisualizer'

export default function VisualizerPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  return (
    <>
      <style jsx global>{`
        /* Hide any quotes, footers, headers, issues on visualizer page */
        .daily-quote,
        footer,
        header,
        [class*="quote"],
        [class*="inspiration"],
        [class*="footer"],
        [class*="header"],
        [class*="issue"],
        [class*="github"],
        [href*="github.com/issues"],
        [href*="/issues"] {
          display: none !important;
        }
      `}</style>

      <div className="fixed inset-0 bg-black overflow-hidden z-50">
        {/* Fullscreen Visualizer */}
        <div className="w-full h-full">
          <AudioVisualizer
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        </div>

        {/* Floating Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-gray-600 rounded-lg p-4 z-10">
          <div className="flex items-center gap-6">
            <div className="text-white text-sm font-mono">
              GriZ - Falling Flying
            </div>
            <button
              onClick={togglePlayback}
              className="group relative w-12 h-12 bg-white rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
            >
              {isPlaying ? (
                // Pause icon (two rectangles)
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-black rounded-sm"></div>
                  <div className="w-1 h-4 bg-black rounded-sm"></div>
                </div>
              ) : (
                // Play triangle
                <div className="w-0 h-0 border-l-[6px] border-l-black border-y-[4px] border-y-transparent ml-0.5"></div>
              )}
            </button>
          </div>
        </div>

        <audio
          ref={audioRef}
          src="/audio/Falling Flying.mp3"
          onEnded={handleAudioEnded}
          preload="auto"
        />
      </div>
    </>
  )
}