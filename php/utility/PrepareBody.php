<?php
declare(strict_types=1);

// OpenLibrarySearch SDK utility: prepare_body

class OpenLibrarySearchPrepareBody
{
    public static function call(OpenLibrarySearchContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
