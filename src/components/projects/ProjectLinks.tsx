export function ProjectLinks() {
    return (
        <div className="flex gap-4">
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                View Live
            </a>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                Source Code
            </a>
        </div>
    )
} 