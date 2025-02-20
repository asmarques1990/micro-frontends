
    export type RemoteKeys = 'bannerCount/BannerCount';
    type PackageType<T> = T extends 'bannerCount/BannerCount' ? typeof import('bannerCount/BannerCount') :any;