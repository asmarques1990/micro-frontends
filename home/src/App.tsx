import ReactDOM from "react-dom/client";
import {useState} from "react";

import {Banner} from "banner/Banner";
import {Footer} from "footer/Footer";

import useStore from "store/store";

import "./index.css";

const usernames = ['John Doe', "Mike Doe", "Mike Jordan", "John Jordan"];

const App = () => {
    const [username, setUsername] = useState(usernames[0]);
    const { count, increment } = useStore();
    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <Banner />
            <div className="my-8">Name: {username}</div>
            <button
                className="bg-indigo-800 text-white font-bold py-2 px-4 rounded cursor-pointer"
                onClick={() => {
                    const index = usernames.findIndex(u => username === u)
                    setUsername(index === 3 ? usernames[0] : usernames[index + 1])
                }}>
                Change Username
            </button>
            <div className="my-8">Count: {count}</div>
            <button
                className="bg-indigo-800 text-white font-bold py-2 mb-8 px-4 rounded cursor-pointer"
                onClick={() => {
                    increment()
                }}>
                Increment Count
            </button>
            <Footer username={username}/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);