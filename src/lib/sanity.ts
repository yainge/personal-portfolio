import { createClient } from 'next-sanity'
import { config } from '../../sanity/lib/config'
import { Project, Product, BlogPost } from '@/types'

export const client = createClient(config)

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        `*[_type == "project"] {
      _id,
      title,
      slug,
      description,
      tags,
      "image": mainImage{
        "url": asset->url,
        "alt": alt
      },
      category,
      githubUrl,
      liveUrl
    }`
    )
}

export async function getProducts(): Promise<Product[]> {
    return client.fetch(
        `*[_type == "product"] {
      _id,
      title,
      slug,
      description,
      price,
      "images": images[]{
        "url": asset->url,
        "alt": alt
      },
      category,
      shopifyProductId
    }`
    )
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    return client.fetch(
        `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      tags
    }`
    )
} 