/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter','ui-sans-serif','system-ui','Segoe-UI','Roboto','Helvetica Neue','Arial','Noto Sans',
        'sans-serif']
      },
      colors: {
        'custom-grey': '#EDF1D6',
        'custom-green': '#609966',
        'custom-blue': '#344D67',
      },
    },
  },
  plugins: [
  ],
}
