'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const imageUrl = product.image || 'https://placehold.co/600x800/1a1a1a/888888'

  return (
    <Link href={`/product/${product.slug.current}`} className="group block">
      <div className="relative overflow-hidden aspect-[3/4] bg-muted">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4 border-b border-border pb-3">
        <h3 className="font-heading text-[0.95rem] tracking-wider text-text-primary uppercase">
          {product.name}
        </h3>
        <p className="font-body text-sm text-text-secondary mt-1">
          €{product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  )
}
