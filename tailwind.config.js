module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'home-automate-trade': 'url("./assets/home-1.png")',
        'home-copy-trade': "url('./assets/home-2.png')"
      },
      colors: {
        'accent': '#00AECC',
        'primary': '#045DB6',
        'secondary': 'rgba(0, 137, 211, 0.1)',
        'color-text': '#333333',
        'dark-primary': '#022F5B',
      },
      fontSize: {
        'header-title': '82px',
      },
      lineHeight: {
        'header-title': '88px',
        'header-btn-try': '30px',
      },
      screens: {
        '3xl': '1920px',
      },
      spacing: {
        '5.5': '22px',
        '17.5': '70px',
        75: '300px',
      }
    },
  },
  plugins: [require('@themesberg/flowbite/plugin')],
}
