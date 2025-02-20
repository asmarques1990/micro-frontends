import ReactDOM from "react-dom/client";

import {BannerCount} from "./components/BannerCount.tsx";

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: banner-count</div>
    <div>Framework: react-19</div>
    <BannerCount />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);