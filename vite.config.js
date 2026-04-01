import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: { port: 5173 },
	base: './',
	build: {
        lib: {
            entry: "src/MyApp.ts",
            name: "NF-Modules-Preview"
        },
		outDir: '../dist'
	},
});