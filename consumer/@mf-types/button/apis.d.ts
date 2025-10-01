
    export type RemoteKeys = 'button' | 'button/Button';
    type PackageType<T> = T extends 'button/Button' ? typeof import('button/Button') :T extends 'button' ? typeof import('button') :any;