export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-2deg)' },
        },
        
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        
        'fade-in': 'fade-in 0.2s ease-out',
        'pop-in': 'pop-in 0.25s ease-out',
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'light-sweep': {
          '0%': { transform: 'translateX(-150%) skewX(-12deg)' },
          '100%': { transform: 'translateX(250%) skewX(-12deg)' },
        },
      },
      animation: {
        
        'fade-in': 'fade-in 0.2s ease-out',
        'pop-in': 'pop-in 0.25s ease-out',
        marquee: 'marquee 50s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'light-sweep': 'light-sweep 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
