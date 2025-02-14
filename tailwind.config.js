/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            borderColor: {
                'border-border': '##your-border-color-here', // Replace ##your-border-color-here with your desired color
            }
        },
    },
    plugins: [],
}
