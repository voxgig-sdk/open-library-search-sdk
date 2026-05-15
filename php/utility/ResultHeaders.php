<?php
declare(strict_types=1);

// OpenLibrarySearch SDK utility: result_headers

class OpenLibrarySearchResultHeaders
{
    public static function call(OpenLibrarySearchContext $ctx): ?OpenLibrarySearchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
