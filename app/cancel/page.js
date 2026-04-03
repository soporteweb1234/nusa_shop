import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-text-secondary/10 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-text-secondary"
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
        </div>

        <h1 className="font-heading text-5xl tracking-tighter text-text-primary mb-6">
          Order Cancelled
        </h1>

        <p className="font-body text-lg text-text-secondary leading-relaxed mb-12">
          Your order has been cancelled. No charges have been made to your
          account.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/cart"
            className="inline-block bg-accent text-white font-heading tracking-widest uppercase text-xs py-4 px-10 hover:brightness-110 transition-all"
          >
            Return to Cart
          </Link>
          <Link
            href="/"
            className="inline-block bg-transparent border border-accent text-accent font-heading tracking-widest uppercase text-xs py-4 px-10 hover:bg-accent hover:text-white transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
