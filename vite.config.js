const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        home: resolve(__dirname, "projects/home/index.html"),
        horizontal: resolve(__dirname, "projects/horizontal-snapping/index.html"),
        reveal: resolve(__dirname, "projects/reveal/index.html"),
        lightTouch: resolve(__dirname, "projects/light-touch/index.html"),
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    open: '/index.html'
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
});
