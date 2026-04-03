import { getProduct, getProducts } from '@/lib/sanity'
import Image from 'next/image'
import AddToCartButton from '@/components/AddToCartButton'
import ProductGrid from '@/components/ProductGrid'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.slug.current,
  }))
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  const allProducts = await getProducts()
  const relatedProducts = allProducts
    .filter((p) => p._id !== product._id)
    .slice(0, 3)

  const imageUrl = product.image || 'https://placehold.co/1200x1600/1a1a1a/888888'

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="relative aspect-[3/4] bg-muted">
              <Image
                src={imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <h1 className="font-heading text-4xl md:text-5xl tracking-tighter text-text-primary">
              {product.name}
            </h1>
            <p className="font-heading text-2xl text-text-primary mt-4">
              €{product.price.toFixed(2)}
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-body text-base text-text-secondary leading-relaxed">
                {product.description ||
                  'Crafted with intention. Designed to last. Made for those who value quality over quantity.'}
              </p>
            </div>

            <div className="mt-10">
              <AddToCartButton product={product} />
            </div>

            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <details className="group">
                <summary className="font-heading text-sm tracking-wider uppercase text-text-primary cursor-pointer list-none flex items-center justify-between">
                  Details
                  <svg
                    className="w-5 h-5 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 font-body text-sm text-text-secondary leading-relaxed">
                  Premium materials sourced ethically. Manufactured with care.
                  Timeless design that transcends seasons.
                </div>
              </details>

              <details className="group border-t border-border pt-4">
                <summary className="font-heading text-sm tracking-wider uppercase text-text-primary cursor-pointer list-none flex items-center justify-between">
                  Shipping
                  <svg
                    className="w-5 h-5 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 font-body text-sm text-text-secondary leading-relaxed">
                  Free shipping on all orders. Delivered in 5-7 business days.
                  Tracking information provided.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-heading text-3xl tracking-tighter text-text-primary mb-12">
            You May Also Like
          </h2>
          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  )
}
