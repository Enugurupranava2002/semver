export default {
  input: "index.js",
  output: [
    {
      file: "./lib/bundle.amd.js",
      format: "amd",
      name: "mymath",
    },
    {
      file: "./lib/bundle.cjs.js",
      format: "cjs",
      name: "mymath",
    },
    {
      file: "./lib/bundle.iife.js",
      format: "iife",
      name: "mymath",
    },
    {
      file: "./lib/bundle.umd.js",
      format: "umd",
      name: "mymath",
    },
  ],
};
