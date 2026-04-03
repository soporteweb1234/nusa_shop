import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-muted mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="font-body text-sm text-text-secondary">
            NUSA © 2025
          </p>
          <div className="flex items-center space-x-8">
            <Link
              href="/privacy"
              className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
