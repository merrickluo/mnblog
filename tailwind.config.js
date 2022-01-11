module.exports = {
  content: ["./pages/**/*.jsx", "./components/**/*.jsx"],
  theme: {
    extend: {
      flex: {
        "l-32": "0 0 8rem",
      },
      fontFamily: {
        sans: ["overpass"],
        serif: ["Arvo"],
        mono: ["Jetbrains Mono"],
      },
      padding: {
        "1/2": "0.125rem",
      },
      colors: {
        background: "var(--color-background)",
        "background-alt": "var(--color-background-alt)",
        "background-dark": "var(--color-background-dark)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        black: "var(--color-black)",
        red: "var(--color-red)",
        green: "var(--color-green)",
        yellow: "var(--color-yellow)",
        blue: "var(--color-blue)",
        magenta: "var(--color-magenta)",
        cyan: "var(--color-cyan)",
        white: "var(--color-white)",
      },
      screens: {
        "dark-mode": { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  plugins: [],
};
