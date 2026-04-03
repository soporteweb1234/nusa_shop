import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

export const metadata = {
  title: 'NUSA — Crafted for the deliberate',
  description: 'Dark luxury fashion for the modern minimalist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}
