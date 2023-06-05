/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
