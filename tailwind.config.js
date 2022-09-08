//導入預設樣式設定
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{html,ejs}"], 
  theme: {
    // 加上這段conatiner就會預設左右有padding:12px，且置中
    container: {
      center: true,
      padding: '12px',
    },
    fontFamily: {
      'azeret':'"Azeret Mono"',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark':{
          DEFAULT:'#1C1C1C',
          'secondary':'#2D2D2D',
          'third' : '#c1c1c1',
        },
        'primary':'#62DB54',
        'secondary':'#09ACF5',
      },
      backgroundImage: {
        'gradient-ps50':"linear-gradient(to right, #62DB54 50%, #09ACF5 50%)",
        'gradient-sp':"linear-gradient(to bottom, #09ACF5 , #62DB54)",
        'gradient-sp-r':"linear-gradient(to right, #09ACF5 , #62DB54)",
      },
      spacing: {
        '10.5':'42px',
        '25':'100px',
        '45':'180px',
        '54':'216px',
      },
      fontSize: {
        xs:['12px', '1.5',],
        sm: ['14px', '1.5',],
        base:['16px', '1.5',],
        lg:['18px', '1.5',],
        xl:['20x', '1.5',],
        '22px':['22px', '1.5',],
        '2xl':['24px', '1.5',],
        '3xl':['28px', '1.5',],
        '4xl':['32px', '1.5',],
        '5xl':['48px', '1.5',],
        '6xl':['60px', '1.5',],
        '7xl':['72px', '1.5',],
        '8xl':['80px', '1.5',],
        '9xl':['128px', '1.5',],
      },
      boxShadow: {
        'burger': '0 10px #fff',
      },
      zIndex: {
        '1': '1',
      },
      opacity: {
        'initial':'initial',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}