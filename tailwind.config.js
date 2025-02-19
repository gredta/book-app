/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}' // Include all relevant file types that will contain Tailwind classes
  ],
    corePlugins: {
    apply: true,
  },
  safeList: [
    'bg-glass',
    'text-primary',
    'text-navy',
    'font-kaoly',
    'font-lora',
    'font-playfair',
    'place-content-center',
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        kaoly: ['Kaoly', 'sans-serif'], // Register "Kaoly"
      },
    },
  },
  plugins: [],
}
