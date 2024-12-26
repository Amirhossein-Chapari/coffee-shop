import headerBg from './src/images/headerBgDesktop.png'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],

  darkMode: "class",

  theme: {
    extend: {
      screens: {
        'medium': '870px',
        'small': '740px'
      },
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem"
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      spacing: {
        "25": "6.25rem",
        "30": "7.5rem",
        "50": "12.5rem"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "4rem",
        }
      }
    },
    screens: {
      'xxs': '375px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('Child', '&>*');
      addVariant('Child-hover', '&>*:hover')
    }
  ],
}

