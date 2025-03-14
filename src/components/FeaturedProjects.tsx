import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types'

export default function FeaturedProjects() {
    // This will be replaced with actual data from Sanity
    const projects: Project[] = [
        {
            _id: '1',
            title: 'Project 1',
            slug: 'project-1',
            description: 'Description of project 1',
            tags: ['React', 'TypeScript'],
            image: {
                url: '/images/placeholder.jpg',
                alt: 'Project 1'
            },
            category: 'coding'
        },
        // Add more placeholder projects as needed
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        A selection of my recent work across engineering, coding, and art.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link
                            key={project._id}
                            href={`/projects/${project.slug}`}
                            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.image.url}
                                    alt={project.image.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
} 