import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:4000',
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
};

export default config;
