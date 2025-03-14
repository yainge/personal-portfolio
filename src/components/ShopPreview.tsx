import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'

export default function ShopPreview() {
    // This will be replaced with actual data from Sanity/Shopify
    const products: Product[] = [
        {
            _id: '1',
            title: 'Product 1',
            slug: 'product-1',
            description: 'Description of product 1',
            price: 29.99,
            images: [{
                url: '/images/placeholder-product.jpg',
                alt: 'Product 1'
            }],
            category: 'art',
            shopifyProductId: 'gid://shopify/Product/1'
        },
        // Add more placeholder products as needed
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Featured Products
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Discover my collection of art prints, flow toys, and digital files.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <Link
                            key={product._id}
                            href={`/shop/${product.slug}`}
                            className="group"
                        >
                            <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                                <Image
                                    src={product.images[0].url}
                                    alt={product.images[0].alt}
                                    fill
                                    className="object-cover group-hover:opacity-75"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/shop"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    )
} 