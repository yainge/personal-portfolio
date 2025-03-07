import Image from 'next/image'

export function ProjectGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative h-[400px]">
                <Image
                    src="/placeholder.jpg"
                    alt="Project image"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative h-[190px]">
                        <Image
                            src="/placeholder.jpg"
                            alt={`Project image ${i}`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
} 