import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        bounce: 'bounce 1s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        spin: 'spin 1s linear infinite',
        walkLeft: 'walkLeft 20s linear infinite',
        walkRight: 'walkRight 20s linear infinite',
        waddle: 'waddle 0.5s infinite alternate',
        'foot-left': 'footLeft 0.5s infinite alternate',
        'foot-right': 'footRight 0.5s infinite alternate-reverse',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        walkLeft: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-20vw)' },
        },
        walkRight: {
          '0%': { transform: 'translateX(-20vw)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        waddle: {
          '0%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(5deg)' },
        },
        footLeft: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(25deg)' },
        },
        footRight: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-25deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;