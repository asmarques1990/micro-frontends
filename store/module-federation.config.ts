export const mfConfig = {
  name: "store",
  filename: "remoteEntry.js",
  exposes: {
    "./store": "./src/store.ts",
  },
  shared: ["react", "react-dom"],
};
