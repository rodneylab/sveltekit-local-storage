import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
	plugins: [sveltekit(), vanillaExtractPlugin(), imagetools({ force: true })],
	server: {
		port: 5173,
		strictPort: false,
	},
	preview: {
		port: 4173,
		strictPort: false,
	},
	ssr:
		process.env.NODE_ENV === 'development'
			? {}
			: {
					noExternal: ['@vanilla-extract/css', '@vanilla-extract/css/fileScope'],
			  },
};

export default config;
