export interface Author {
    birth_date?: string;
    death_date?: string;
    key?: string;
    name?: string;
    top_subjects?: any[];
    top_work?: string;
    work_count?: number;
}
export interface AuthorListMatch {
    limit?: number;
    offset?: number;
    q: string;
}
export interface Search {
    author_key?: any[];
    author_name?: any[];
    cover_i?: number;
    edition_count?: number;
    editions?: Record<string, any>;
    first_publish_year?: number;
    has_fulltext?: boolean;
    ia?: any[];
    isbn?: any[];
    key?: string;
    language?: any[];
    public_scan_b?: boolean;
    publisher?: any[];
    title?: string;
}
export interface SearchListMatch {
    author?: string;
    ebook_access?: string;
    field?: string;
    has_fulltext?: boolean;
    lang?: string;
    language?: string;
    limit?: number;
    offset?: number;
    page?: number;
    publisher?: string;
    q?: string;
    sort?: string;
    title?: string;
}
