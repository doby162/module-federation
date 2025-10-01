
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER' | 'REMOTE_ALIAS_IDENTIFIER/Button';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Button' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Button') :T extends 'REMOTE_ALIAS_IDENTIFIER' ? typeof import('REMOTE_ALIAS_IDENTIFIER') :any;