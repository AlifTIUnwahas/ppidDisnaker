import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/css/slideshow.css',
                'resources/js/slideshow.js',
            ],
            refresh: true,
        }),
    ],
});
