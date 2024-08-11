/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container:{
      center:true,
      padding: '3rem',  //10px
    },
    extend: {
      // container:{
      //   center:true,
      //   padding: '5rem',
      // },
      colors: {
        customColor: '#2c3e50',
        activeColor: '#1abc9c',
        footerColor:'#1a252f',
      },
      padding: {
        '120': '120px',
        '183':'183px' ,
        '195':'195px' ,
      },
      width: {
        '250': '250px',
        '100': '100px',
      },
      height: {
        '250': '250px',
        '5': '5px', 
      },
    },
  },
  plugins: [],
}

