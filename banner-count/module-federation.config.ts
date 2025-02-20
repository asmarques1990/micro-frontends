export const mfConfig = {
  name: "banner_count",
  filename: "remoteEntry.js",
  exposes: {
    "./BannerCount": "./src/components/BannerCount.tsx",
  },
  remotes: {
    store: "store@http://localhost:3005/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
