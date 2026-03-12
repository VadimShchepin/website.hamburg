import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        // Generate a 200.html fallback for SPA routing on static hosts
        rollupOptions: {
            input: 'index.html',
        },
    },
})
