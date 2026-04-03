import Image from 'next/image'
import { getProducts } from '@/lib/sanity'
import ProductGrid from '@/components/ProductGrid'

export const revalidate = 60

export default async function HomePage() {
  const products = await getProducts()

  return (
    <div>
      {/* HERO — fullscreen collage + overlay text */}
      <section className="relative min-h-screen overflow-hidden">
        {/* 2x2 image collage */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="relative overflow-hidden">
            <Image
              src="/hero-1.jpg"
              alt="NUSA"
              fill
              className="object-cover object-center scale-105"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/hero-2.jpg"
              alt="NUSA"
              fill
              className="object-cover object-center scale-105"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/hero-3.jpg"
              alt="NUSA"
              fill
              className="object-cover object-center scale-105"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/hero-4.jpg"
              alt="NUSA"
              fill
              className="object-cover object-center scale-105"
              priority
            />
          </div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Centered text */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
          <h1 className="font-heading text-[clamp(4rem,14vw,10rem)] tracking-tighter text-white leading-none">
            NUSA
          </h1>
          <p className="font-body text-base md:text-lg text-white/70 mt-4 tracking-[0.2em] uppercase">
            Donde la exclusividad se une al deseo
          </p>
          <a
            href="#collection"
            className="inline-block mt-10 border border-white/60 text-white font-heading tracking-widest uppercase text-xs py-4 px-10 hover:bg-white hover:text-base transition-[background-color,color] duration-300"
          >
            Ver Colección
          </a>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="collection" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <ProductGrid products={products} />
      </section>

      {/* EDITORIAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <blockquote className="font-heading text-[clamp(2rem,4vw,3.5rem)] tracking-tighter text-text-primary leading-tight">
              &ldquo;La delgada línea entre lo elegante y lo salvaje.&rdquo;
            </blockquote>
          </div>
          <div className="space-y-6">
            <p className="font-body text-base text-text-secondary leading-relaxed">
              En NUSA creemos que el estilo real vive en los detalles. Cada prenda es
              diseñada con intención, crafteada para durar más allá de las tendencias.
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Nuestra filosofía es simple: exclusividad accesible. Lo que queda es
              esencial. Lo que queda es tuyo.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
