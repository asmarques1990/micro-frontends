export const mfConfig = {
  name: "banner_button",
  filename: "remoteEntry.js",
  exposes: {
    "./BannerButton": "./src/components/BannerButton.tsx",
  },
  remotes: {
    store: "store@http://localhost:3005/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
