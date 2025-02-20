import useStore from "store/store";

export const BannerCount = () => {
    const { count }: { count: number } = useStore();
    return (
        <>
            Count: { count }
        </>
    )
}