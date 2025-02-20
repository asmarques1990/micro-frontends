import useStore from "store/store";

export const BannerCount = () => {
    const { count } = useStore();
    return (
        <>
            Count: { count }
        </>
    )
}