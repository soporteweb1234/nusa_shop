'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'

export default function CartDrawer() {
  const router = useRouter()
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotal } =
    useCartStore()

  const total = getTotal()

  const handleCheckout = () => {
    closeCart()
    router.push('/cart')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-base z-50 shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading text-2xl tracking-wider text-text-primary">
                Cart
              </h2>
              <button
                onClick={closeCart}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close cart"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="font-body text-text-secondary text-center">
                  Your cart is empty
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start space-x-4 pb-6 border-b border-border"
                    >
                      <div className="relative w-20 h-28 bg-muted flex-shrink-0">
                        <Image
                          src={item.image || 'https://placehold.co/160x224/1a1a1a/888888'}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-sm tracking-wide text-text-primary uppercase truncate">
                          {item.name}
                        </h3>
                        <p className="font-body text-sm text-text-secondary mt-1">
                          €{item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center space-x-3 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 flex items-center justify-center border border-border text-text-primary hover:border-accent hover:text-accent transition-colors"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="font-body text-sm text-text-primary w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 flex items-center justify-center border border-border text-text-primary hover:border-accent hover:text-accent transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-text-secondary hover:text-accent transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg tracking-wide text-text-primary">
                      Total
                    </span>
                    <span className="font-heading text-xl text-text-primary">
                      €{total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-accent text-white font-heading tracking-widest uppercase text-xs py-4 px-8 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
