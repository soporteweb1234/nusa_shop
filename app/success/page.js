import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="font-heading text-5xl tracking-tighter text-text-primary mb-6">
          Order Confirmed
        </h1>

        <p className="font-body text-lg text-text-secondary leading-relaxed mb-4">
          Thank you for your purchase. Your order has been confirmed and will be
          shipped shortly.
        </p>

        <p className="font-body text-base text-text-secondary mb-12">
          You will receive an email confirmation with tracking details once your
          order ships.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-accent text-white font-heading tracking-widest uppercase text-xs py-4 px-10 hover:brightness-110 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
