# OpenLibrarySearch SDK utility: make_context

from core.context import OpenLibrarySearchContext


def make_context_util(ctxmap, basectx):
    return OpenLibrarySearchContext(ctxmap, basectx)
