import { OpenLibrarySearchEntityBase } from '../OpenLibrarySearchEntityBase';
import type { OpenLibrarySearchSDK } from '../OpenLibrarySearchSDK';
import type { Control } from '../types';
import type { Author, AuthorListMatch } from '../OpenLibrarySearchTypes';
declare class AuthorEntity extends OpenLibrarySearchEntityBase<Author> {
    constructor(client: OpenLibrarySearchSDK, entopts: any);
    make(this: AuthorEntity): AuthorEntity;
    list(this: any, reqmatch?: AuthorListMatch, ctrl?: Control): Promise<AuthorEntity[]>;
}
export { AuthorEntity };
