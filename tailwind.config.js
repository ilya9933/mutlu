/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
      },
      red: {
        DEFAULT: '#DE1C24',
        r2: '#ED1E26',
        r1: '#C41920',
      },
      black: {
        DEFAULT: '#171717',
        d2: '#414546',
        d1: '#1C1C1C',
      },
      gray: {
        DEFAULT: '#D8D8D8',
        g4: '#efefee',
        g3: '#f2f2f1',
        g2: "#999999",
        g1: '#EFEFEE',
      },
    },
    maxWidth: {
      'xxl': '1230px',
    },
    minWidth: {
      '5': '80px',
    },
    letterSpacing: {
      normal: '0',
      wide: '0.02em',
      
    },
    extend: {},
  },
  plugins: [],
}
