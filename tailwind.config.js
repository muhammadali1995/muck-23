module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'market-header': 'url("./assets/Market.png")',
        'home-automate-trade': 'url("./assets/home-1.png")',
        'home-copy-trade': "url('./assets/home-2.png')",
      },
      colors: {
        'accent': '#00AECC',
        'primary': '#045DB6',
        'secondary': 'rgba(0, 137, 211, 0.1)',
        'color-text': '#333333',
        'dark-primary': '#022F5B',
      },
      fontSize: {
        28: '28px',
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
        '7.5': '30px',
        '15': '60px',
        '17.5': '70px',
        '25': '100px',
        '37.5': '150px',
        '75': '300px',
      }
    },
  },
  plugins: [require('@themesberg/flowbite/plugin')],
}
