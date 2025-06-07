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
    'text-4xl',
    'text-7xl',
    'text-6xl',
    'lg:text-14xl',
    'xl:text-14xl',
    'lg:text-2xl',
    'text-2xl',
    'font-bold',
    'text-[#FEBD2F]',
    'md:text-xl',
    'xl:text-[13rem]',
    'xl:text-[12rem]',
    'text-7xl',
    'md:text-9xl',
    'lg:text-7xl',
    'xl:text-[11rem]',
    '2xl:text-[13rem]',
    'text-xl',
    'md:text-2xl',
    'lg:text-xl',
    'xl:text-3xl',
    'text-center',
    'text-nowrap'
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
