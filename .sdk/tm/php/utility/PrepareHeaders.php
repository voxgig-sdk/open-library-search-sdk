<?php
declare(strict_types=1);

// OpenLibrarySearch SDK utility: prepare_headers

class OpenLibrarySearchPrepareHeaders
{
    public static function call(OpenLibrarySearchContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
