import ReactDOM from "react-dom/client";

import { Footer } from "./components/Footer.tsx";

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: footer</div>
    <div>Framework: react-19</div>
    <Footer username={'Admin'} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);