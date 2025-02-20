export const mfConfig = {
  name: "banner",
  filename: "remoteEntry.js",
  exposes: {
    "./Banner": "./src/components/Banner.tsx",
  },
  remotes: {
    bannerButton: "banner_button@http://localhost:3004/remoteEntry.js",
    bannerCount: "banner_count@http://localhost:3002/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
