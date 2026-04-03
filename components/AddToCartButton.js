'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function AddToCartButton({ product }) {
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleClick = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug.current,
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <button
      onClick={handleClick}
      className="w-full bg-accent text-white font-heading tracking-widest uppercase text-xs py-4 px-8 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
      disabled={added}
    >
      {added ? 'Added to Cart' : 'Add to Cart'}
    </button>
  )
}
