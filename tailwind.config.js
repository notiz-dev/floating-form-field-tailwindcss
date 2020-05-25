module.exports = {
  purge: [],
  theme: {
    extend: {
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: { borderColor: ["responsive", "hover", "focus", "focus-within"] },
  plugins: [],
};
