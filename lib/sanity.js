import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  : null

const builder = client ? imageUrlBuilder(client) : null
export const urlFor = (source) => builder?.image(source)

export async function getProducts() {
  if (!client) return []
  return client.fetch(`*[_type == "product"] | order(_createdAt desc) {
    _id, name, price, slug, description,
    "image": image.asset->url
  }`)
}

export async function getProduct(slug) {
  if (!client) return null
  return client.fetch(`*[_type == "product" && slug.current == $slug][0] {
    _id, name, price, slug, description,
    "image": image.asset->url
  }`, { slug })
}
