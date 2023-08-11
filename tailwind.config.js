/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
  black: '#181727',
  'grey-100': '#F2F2F2',
  'grey-300': '#BFBFBF',
  'grey-700': '#727272',
  'grey-900': '#2C2947',
  primary: '#5F51FF',
  'primary-darker': '#0B0085',
  'primary-light': '#8E85FF',
  'primary-lighter': '#BDB8FF',
  white: '#FFFFFF'
}
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
			transparent: colors.transparent,
			...constants
		},
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-fixel-bold)"],
        mono: ["var(--font-fixel-black)"],
        thin: ["var(--font-fixel-medium)"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
				xs: '0.82rem',
				sm: '0.813rem', //13px
				base: '1rem', //16px
				lg: '1.125rem', //18px
				xl: '1.25rem', //20px
        '1.5xl': '1.375rem', //22px
				'2xl': '1.5rem', // 24px
				'2.5xl': '1.75rem', // 28px
				'3xl': '2rem', //32px
				'4xl': '2.5rem', //40px
				'5xl': '4.5rem', //72px
				'6xl': '5.75rem', //92px
				'7xl': '7rem', //112px
			},
    },
  },
  plugins: [],
}
