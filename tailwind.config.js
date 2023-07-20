/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  module: "jit",
  theme: {
    extend: {
      colors: {
        'primary': '#7F00FF',
        'title': '#262626',
        'task': '#292929',
        'date': '#4A4A4A'

      },
      backgroundImage: {
        'task-done': "linear-gradient(136.04deg, #7F00FF -15.75%, #E100FF 122.51%)"
      },
      backgroundColor: {
        'task-to-do': "#FAFAFA"
      },
      boxShadow: {
        'purple': "4px 12px 20px 4px #E100FF36"
      }
    },
  },
  plugins: [],
}
