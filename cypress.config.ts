import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    viewportHeight:1000,
    viewportWidth:1000,
    specPattern: "**/*.spec.ts",
  },
});
