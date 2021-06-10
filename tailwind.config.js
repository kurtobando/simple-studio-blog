module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        extend: {},
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            serif: ["Poppins", "sans-serif"],
            mono: ["Poppins", "sans-serif"],
            body: ["Poppins", "sans-serif"],
        },
        colors: {
            main: "#000000",
            highlight: "#eb971f",
            white: "#ffffff",
        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
