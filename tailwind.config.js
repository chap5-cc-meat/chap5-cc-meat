/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], //추가
  theme: {
    extend: {
      backgroundImage: {
        'data-itemclose': "url('../assets/data_itemclose.svg')",
      },
    },
  },
  plugins: [],
};
