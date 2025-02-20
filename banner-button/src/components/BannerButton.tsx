import useStore from "store/store";

import "../index.css";

export const BannerButton = () => {
    const { clear }: { clear: () => void } = useStore();
    return (
        <button
            className="bg-indigo-800 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={clear}>
            Clear Count
        </button>
    )
}