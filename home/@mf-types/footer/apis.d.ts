
    export type RemoteKeys = 'footer/Footer';
    type PackageType<T> = T extends 'footer/Footer' ? typeof import('footer/Footer') :any;