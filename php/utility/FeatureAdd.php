<?php
declare(strict_types=1);

// OpenLibrarySearch SDK utility: feature_add

class OpenLibrarySearchFeatureAdd
{
    public static function call(OpenLibrarySearchContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
