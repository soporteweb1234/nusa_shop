import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export async function getProducts() {
  return client.fetch(`*[_type == "product"] | order(_createdAt desc) {
    _id, name, price, slug, description,
    "image": image.asset->url
  }`)
}

export async function getProduct(slug) {
  return client.fetch(`*[_type == "product" && slug.current == $slug][0] {
    _id, name, price, slug, description,
    "image": image.asset->url
  }`, { slug })
}
