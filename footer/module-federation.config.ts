export const mfConfig = {
  name: "footer",
  filename: "remoteEntry.js",
  exposes: {
    "./Footer": "./src/components/Footer.tsx",
  },
  shared: ["react", "react-dom"],
};
