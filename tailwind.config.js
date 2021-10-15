module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        besar: "48px",
        sedang: "24px",
        kecil: "18px",
        subtitle: "16px",
        chips: "14px",
        besarHP: "24px",
        sedangHP: "18px",
        kecilHP: "16px",
        subtitleHP: "14px",
        chipsHP: "12px"
      },
      screens:{
        'hp':{'max': '858px'},
      },
      colors: {
        primary: "#F2994A",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
