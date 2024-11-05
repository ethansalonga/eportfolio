/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        242424: '#242424',
        F5F5F5: '#F5F5F5',
        fishbones: '#4895BF',
        powpow: '#97477C'
      }
    },
  },
  plugins: [],
  corePlugins: { preflight: false }
}

