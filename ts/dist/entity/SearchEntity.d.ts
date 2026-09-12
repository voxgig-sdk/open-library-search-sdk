import { OpenLibrarySearchEntityBase } from '../OpenLibrarySearchEntityBase';
import type { OpenLibrarySearchSDK } from '../OpenLibrarySearchSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../OpenLibrarySearchTypes';
declare class SearchEntity extends OpenLibrarySearchEntityBase<Search> {
    constructor(client: OpenLibrarySearchSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
