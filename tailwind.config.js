/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple':'#643394',
        'pink':'#FFE6E2',
        'gold':'#F6AB36',
        'gray':'#F0F2F5'
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        kalamehBlack: "kalameh-black",
        kalamehLight: "kalameh-light",
        stretch: "stretch",
        yekanBakhRegular: "yekanBakh-Regular",
        yekanBakhBold: "yekanBakh-bold",
        Astonia:"Astonia"
      },
      maxWidth:{
        'content':'1248px',
      },
    }
},
}

