
    export type RemoteKeys = 'banner/Banner';
    type PackageType<T> = T extends 'banner/Banner' ? typeof import('banner/Banner') :any;