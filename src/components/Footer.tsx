import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Projects</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/projects?category=engineering" className="text-base text-gray-500 hover:text-gray-900">
                                    Engineering
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects?category=coding" className="text-base text-gray-500 hover:text-gray-900">
                                    Coding
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects?category=art" className="text-base text-gray-500 hover:text-gray-900">
                                    Art
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Shop</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/shop?category=art" className="text-base text-gray-500 hover:text-gray-900">
                                    Art Prints
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=flow-toys" className="text-base text-gray-500 hover:text-gray-900">
                                    Flow Toys
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=files" className="text-base text-gray-500 hover:text-gray-900">
                                    Digital Files
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Yuki Ainge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
} 