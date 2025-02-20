
    export type RemoteKeys = 'bannerButton/BannerButton';
    type PackageType<T> = T extends 'bannerButton/BannerButton' ? typeof import('bannerButton/BannerButton') :any;