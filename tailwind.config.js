/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  safelist: [
    'bg-zinc-100',
    'text-red-600',
    'text-[#FF0201]',
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    },
    extend: {
      colors: {
        gray: {
          '900': '#191919',
        },
        stromRed: {
          DEFAULT: '#ff0000',
        },
      },
      fontSize: {
        '14xl': ['9rem', '9rem'],
        'mega': ['15rem', '20rem']
      }
    },
  },
  plugins: [],
}
