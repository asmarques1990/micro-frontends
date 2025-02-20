import ReactDOM from "react-dom/client";

import useStore from "./store";

import "./index.css";

const App = () => {
    const { count, increment } = useStore();
    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: store</div>
            <div>Count: {count}</div>
            <div>
                <button
                    onClick={increment}
                    className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);