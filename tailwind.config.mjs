import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwind, autoprefixer],
};
