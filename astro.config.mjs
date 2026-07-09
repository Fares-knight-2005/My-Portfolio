import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
    integrations: [tailwind(), react()],
    site: 'https://yourusername.github.io', // استبدله برابط موقعك
    base: '/my-portfolio', // اسم المستودع (إذا كان الموقع في مستودع باسم portfolio مثلاً)
});