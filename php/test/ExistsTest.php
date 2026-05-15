<?php
declare(strict_types=1);

// OpenLibrarySearch SDK exists test

require_once __DIR__ . '/../openlibrarysearch_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = OpenLibrarySearchSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
