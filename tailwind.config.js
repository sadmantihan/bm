/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
      },
      backgroundImage: (theme) => ({
        'blue-image': "url('/D:/FDMS/src/images/blue-bg.jpg')",
      }),
    },
  },
  plugins: [],
};
