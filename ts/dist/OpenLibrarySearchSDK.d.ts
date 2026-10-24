import { AuthorEntity } from './entity/AuthorEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './OpenLibrarySearchTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { OpenLibrarySearchEntityBase } from './OpenLibrarySearchEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class OpenLibrarySearchSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Author(entopts?: Record<string, any>): AuthorEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): OpenLibrarySearchSDK;
    tester(testopts?: any, sdkopts?: any): OpenLibrarySearchSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof OpenLibrarySearchSDK;
export { stdutil, config, BaseFeature, OpenLibrarySearchEntityBase, OpenLibrarySearchSDK, SDK, };
export type { DirectResult };
