import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fall-down': 'fall-down 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        'underline': 'underline 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(5px)' },
          '75%': { transform: 'translateY(-5px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fall-down': {
          '0%': { transform: 'translateY(-120%) scaleY(0.8)', opacity: '0' },
          '60%': { transform: 'translateY(10%) scaleY(1.1)', opacity: '1' },
          '80%': { transform: 'translateY(-2%) scaleY(0.95)' },
          '100%': { transform: 'translateY(0) scaleY(1)', opacity: '1' },
        },
        'underline': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

export default config;
