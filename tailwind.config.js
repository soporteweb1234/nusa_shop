/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'hsl(20, 68%, 42%)',
        base: '#0a0a0a',
        muted: '#1a1a1a',
        border: '#2a2a2a',
        text: {
          primary: '#eaeaea',
          secondary: '#888888',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      lineHeight: {
        relaxed: '1.6',
        loose: '1.7',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
