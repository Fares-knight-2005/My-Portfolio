/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                accent: '#64FFDA', // الأخضر النعناعي
                dark: '#0A0A0A',
                light: '#F5F5F5',
            },
            fontFamily: {
                sans: ['Inter', 'Cairo', 'sans-serif'],
            },
        },
    },
    plugins: [],
};