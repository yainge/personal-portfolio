export function ProjectHeader() {
    return (
        <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Project Title</h1>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                    Category
                </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                Project overview and description
            </p>
        </div>
    )
} 