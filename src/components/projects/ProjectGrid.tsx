import { ProjectCard } from './ProjectCard'

export function ProjectGrid() {
    // This would fetch from your CMS in a real implementation
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description here',
            image: '/placeholder.jpg',
            tags: ['Coding', 'Electronics'],
            slug: 'project-1'
        },
        // More projects...
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    )
} 