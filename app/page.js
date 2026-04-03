import { getProducts } from '@/lib/sanity'
import ProductGrid from '@/components/ProductGrid'

export const revalidate = 60

export default async function HomePage() {
  const products = await getProducts()

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-[clamp(3rem,10vw,8rem)] tracking-tighter text-text-primary leading-none">
            NUSA
          </h1>
          <p className="font-body text-lg md:text-xl text-text-secondary mt-6 tracking-wide">
            Crafted for the deliberate.
          </p>
          <a
            href="#collection"
            className="inline-block mt-12 bg-transparent border border-accent text-accent font-heading tracking-widest uppercase text-xs py-4 px-10 hover:bg-accent hover:text-white transition-[background-color,color] duration-300"
          >
            Explore Collection
          </a>
        </div>
      </section>

      <section id="collection" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <ProductGrid products={products} />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <blockquote className="font-heading text-[clamp(2rem,4vw,3.5rem)] tracking-tighter text-text-primary leading-tight">
              "The practice of restraint yields timeless form."
            </blockquote>
          </div>
          <div className="space-y-6">
            <p className="font-body text-base text-text-secondary leading-relaxed">
              At NUSA, we believe that true luxury lives in the space between
              excess and necessity. Each piece is designed to exist beyond
              trends, crafted with intention and care.
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Our approach is simple: reduce, refine, perfect. What remains is
              essential. What remains is yours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
