import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { ProjectFilters } from '@/components/projects/ProjectFilters'
import { PageHeader } from '@/components/common/PageHeader'

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <PageHeader
                title="My Projects"
                description="Explore my engineering, programming, and artistic endeavors"
            />

            <ProjectFilters />
            <ProjectGrid />
        </main>
    )
} 