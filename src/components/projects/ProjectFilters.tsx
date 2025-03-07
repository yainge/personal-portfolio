export function ProjectFilters() {
    const categories = ['All', 'Coding', 'Electronics', 'Art']

    return (
        <div className="flex flex-wrap gap-4 my-6">
            {categories.map((category) => (
                <button
                    key={category}
                    className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    {category}
                </button>
            ))}
        </div>
    )
} 