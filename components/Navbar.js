'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { getItemCount, toggleCart } = useCartStore()
  const itemCount = getItemCount()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ backgroundColor: 'rgba(10, 10, 10, 0)' }}
        animate={{
          backgroundColor: scrolled
            ? 'rgba(10, 10, 10, 0.9)'
            : 'rgba(10, 10, 10, 0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="font-heading text-2xl tracking-widest font-bold text-text-primary hover:text-accent transition-colors"
            >
              NUSA
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              <Link
                href="/"
                className="font-body text-sm tracking-wide text-text-secondary hover:text-text-primary transition-colors"
              >
                Collection
              </Link>
              <Link
                href="/about"
                className="font-body text-sm tracking-wide text-text-secondary hover:text-text-primary transition-colors"
              >
                About
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={toggleCart}
                className="relative group"
                aria-label="Open cart"
              >
                <svg
                  className="w-6 h-6 text-text-primary group-hover:text-accent transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-heading font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-text-primary"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-base md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-12">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-4xl tracking-wide text-text-primary hover:text-accent transition-colors"
              >
                Collection
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-4xl tracking-wide text-text-primary hover:text-accent transition-colors"
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
