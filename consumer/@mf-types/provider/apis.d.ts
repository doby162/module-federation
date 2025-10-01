
    export type RemoteKeys = 'provider' | 'provider/Button';
    type PackageType<T> = T extends 'provider/Button' ? typeof import('provider/Button') :T extends 'provider' ? typeof import('provider') :any;