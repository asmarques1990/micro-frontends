export const mfConfig = {
  name: "home",
  exposes: {},
  remotes: {
    footer: "footer@http://localhost:3001/remoteEntry.js",
    banner: "banner@http://localhost:3003/remoteEntry.js",
    store: "store@http://localhost:3005/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
