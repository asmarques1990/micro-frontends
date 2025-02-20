import {BannerButton} from "bannerButton/BannerButton";
import {BannerCount} from "bannerCount/BannerCount";

export const Banner = () => {
    return (
        <header style={{display: 'flex'}} className="bg-blue-700 text-white font-bold text-3xl p-5">
            <BannerCount />
            <div style={{ marginLeft: 'auto' }}>
                <BannerButton />
            </div>
        </header>
    )
}