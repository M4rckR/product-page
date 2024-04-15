/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors : {
      //Primary
      "m-mo-cyan": "hsl(176, 50%, 47%)",
      "m-da-cyan" : "hsl(176, 72%, 28%)",

      //Neutral
      "m-black" : "hsl(0, 0%, 0%)",
      "m-da-gray" : "hsl(0, 0%, 48%)"
      },

      fontFamily : {
        "m-comi" : "['Commissioner', sans-serif]"
      }
    },
  },
  plugins: [],
}

