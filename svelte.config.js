import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const isDevelopment = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    adapter: adapter(),

    paths: {
      base: isDevelopment ? "" : "/sveltesummit-schedule",
    },

    vite: {
      css: {
        modules: {
          localsConvention: "dashesOnly",
          scopeBehaviour: "local",
        },
      },
      server: {
        hmr: {
          port: 3001,
        },
      },
    },
  },
};

export default config;
