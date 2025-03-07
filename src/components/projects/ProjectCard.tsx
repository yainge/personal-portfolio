import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
    project: {
        title: string
        description: string
        image: string
        tags: string[]
        slug: string
    }
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                <div className="relative h-48">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
} 