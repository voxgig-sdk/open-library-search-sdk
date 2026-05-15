# ProjectName SDK exists test

import pytest
from openlibrarysearch_sdk import OpenLibrarySearchSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OpenLibrarySearchSDK.test(None, None)
        assert testsdk is not None
