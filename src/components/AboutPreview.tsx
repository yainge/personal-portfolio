import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPreview() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            About Me
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            I'm a multidisciplinary creator with a passion for engineering, coding, and art.
                            With experience in both hardware and software development, I bring a unique perspective
                            to every project.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/about"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Learn More About Me
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                            <Image
                                src="/images/placeholder-about.jpg"
                                alt="About preview"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 