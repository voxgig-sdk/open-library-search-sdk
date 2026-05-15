<?php
declare(strict_types=1);

// OpenLibrarySearch SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OpenLibrarySearchMakeContext
{
    public static function call(array $ctxmap, ?OpenLibrarySearchContext $basectx): OpenLibrarySearchContext
    {
        return new OpenLibrarySearchContext($ctxmap, $basectx);
    }
}
