import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'lib/main.ts'),
			name: 'component-library',
		},
		copyPublicDir: false,
		rollupOptions: { external: ['react', 'react/jsx-runtime'] },
	},

	plugins: [
		react(),
		dts({
			tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
		}),
	],
});
