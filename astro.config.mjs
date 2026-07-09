import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
    integrations: [tailwind(), react()],
    site: 'https://Fares-knight-2005.github.io', // استبدله برابط موقعك
    base: '/My-Portfolio', // اسم المستودع (إذا كان الموقع في مستودع باسم portfolio مثلاً)
});