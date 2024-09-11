export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                sage: '#B2D6CD',
                purple: '#C8BAD3',
                blue: '#7A87B8',
                pink: '#E5ADA8'
            },
        },
    },
    variants: {},
    plugins: [require('tailwindcss')],
}
