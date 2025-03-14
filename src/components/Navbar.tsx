import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex items-center">
                            <span className="text-xl font-bold">Yuki Ainge</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex sm:space-x-8">
                        <Link href="/projects" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Projects
                        </Link>
                        <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                            About
                        </Link>
                        <Link href="/shop" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Shop
                        </Link>
                        <Link href="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Blog
                        </Link>
                        <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link href="/projects" className="block pl-3 pr-4 py-2 text-base font-medium">
                            Projects
                        </Link>
                        <Link href="/about" className="block pl-3 pr-4 py-2 text-base font-medium">
                            About
                        </Link>
                        <Link href="/shop" className="block pl-3 pr-4 py-2 text-base font-medium">
                            Shop
                        </Link>
                        <Link href="/blog" className="block pl-3 pr-4 py-2 text-base font-medium">
                            Blog
                        </Link>
                        <Link href="/contact" className="block pl-3 pr-4 py-2 text-base font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
} 