/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14141E',
      },
      width: {
        '78.5': '19.625rem',
      },
      minWidth: {
        '57.5': '14.375rem',
      },
      maxWidth: {
        '59.5': '14.875rem',
        '64.5': '16.125rem',
        '76': '19rem',
        '86.5': '21.625rem',
        '323': '80.75rem',
      },
      lineHeight: {
        '3.5': '0.875rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '12': '3rem',
        '17': '4.25rem',
        '23.5': '5.875rem',
      },
      padding: {
        '15': '3.75rem',
      },
      margin: {
        '4.5': '1.125rem',
      },
      height: {
        '100': '25rem',
      },
      screens: {
        'laptop-1080px': '1080px',
      },
    },
  },
  plugins: [],
};
