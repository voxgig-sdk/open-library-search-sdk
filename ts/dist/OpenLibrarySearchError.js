"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenLibrarySearchError = void 0;
class OpenLibrarySearchError extends Error {
    isOpenLibrarySearchError = true;
    sdk = 'OpenLibrarySearch';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.OpenLibrarySearchError = OpenLibrarySearchError;
//# sourceMappingURL=OpenLibrarySearchError.js.map