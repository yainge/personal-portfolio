import { ProjectHeader } from '@/components/projects/ProjectHeader'
import { ProjectContent } from '@/components/projects/ProjectContent'
import { ProjectGallery } from '@/components/projects/ProjectGallery'
import { ProjectLinks } from '@/components/projects/ProjectLinks'

interface ProjectPageProps {
    params: {
        slug: string
    }
}

export default function ProjectPage({ params }: ProjectPageProps) {
    // In a real implementation, you would fetch project data here using the slug

    return (
        <main className="container mx-auto px-4 py-8">
            <ProjectHeader />
            <ProjectGallery />
            <ProjectContent />
            <ProjectLinks />
        </main>
    )
} 