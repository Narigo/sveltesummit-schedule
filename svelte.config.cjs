const preprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-static');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),

		paths: {
			base: '/sveltesummit-schedule'
		},

		// ssr: false,

		vite: {
			css: {
				modules: {
					localsConvention: 'dashesOnly',
					scopeBehaviour: 'local'
				}
			},
			server: {
				hmr: {
					port: 3001
				}
			}
		}
	}
};
