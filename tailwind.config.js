module.exports = {
  content: ["./app/**/*.{html,ejs,js}"],
  theme: {
    container: {
      center: true, 
      padding: "12px"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1296px',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '40px',
      '6xl': '48px',
      '7xl': '80px',
      '8xl': '120px'
    },
    extend: {
      colors: {
        'primary': '#F18724',
        'surface': '#F2EFE7',
        black : {
          100: '#020202',
          80: '#525252',
          60: '#919191',
          40: '#D1D1D1',
          20: '#F2F2F2',
          0: '#FFFFFF'
        }
      }
    },
  },
  plugins: [
  ],
}