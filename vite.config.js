const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        horizontal: resolve(__dirname, "projects/horizontal-snapping/index.html"),
        // loops: resolve(__dirname, "projects/loops/index.html"),
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
