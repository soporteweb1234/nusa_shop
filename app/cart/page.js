'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'

export default function CartPage() {
  const [loading, setLoading] = useState(false)
  const { items, updateQuantity, removeItem, getTotal } = useCartStore()
  const total = getTotal()

  const handleCheckout = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-heading text-4xl tracking-tighter text-text-primary mb-6">
            Your cart is empty
          </h1>
          <p className="font-body text-text-secondary mb-8">
            Discover our collection and find something you love.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-white font-heading tracking-widest uppercase text-xs py-4 px-10 hover:brightness-110 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <h1 className="font-heading text-5xl tracking-tighter text-text-primary mb-12">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              className="flex items-start space-x-6 pb-6 border-b border-border"
            >
              <Link
                href={`/product/${item.slug}`}
                className="relative w-24 h-32 bg-muted flex-shrink-0"
              >
                <Image
                  src={item.image || 'https://placehold.co/192x256/1a1a1a/888888'}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <Link href={`/product/${item.slug}`}>
                  <h3 className="font-heading text-lg tracking-wide text-text-primary uppercase hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="font-body text-base text-text-secondary mt-2">
                  €{item.price.toFixed(2)}
                </p>

                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border border-border text-text-primary hover:border-accent hover:text-accent transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="font-body text-base text-text-primary w-10 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-border text-text-primary hover:border-accent hover:text-accent transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="font-body text-sm text-text-secondary hover:text-accent transition-colors underline"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <p className="font-heading text-lg text-text-primary">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-muted p-8 sticky top-32">
            <h2 className="font-heading text-2xl tracking-wide text-text-primary mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 pb-6 border-b border-border">
              <div className="flex items-center justify-between">
                <span className="font-body text-base text-text-secondary">
                  Subtotal
                </span>
                <span className="font-body text-base text-text-primary">
                  €{total.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-base text-text-secondary">
                  Shipping
                </span>
                <span className="font-body text-base text-text-primary">
                  Free
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 mb-8">
              <span className="font-heading text-xl tracking-wide text-text-primary">
                Total
              </span>
              <span className="font-heading text-2xl text-text-primary">
                €{total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-accent text-white font-heading tracking-widest uppercase text-xs py-4 px-8 hover:brightness-110 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>

            <Link
              href="/"
              className="block text-center mt-6 font-body text-sm text-text-secondary hover:text-text-primary transition-colors underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
