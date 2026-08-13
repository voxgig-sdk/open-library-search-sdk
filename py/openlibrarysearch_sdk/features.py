# OpenLibrarySearch SDK feature factory

from openlibrarysearch_sdk.feature.base_feature import OpenLibrarySearchBaseFeature
from openlibrarysearch_sdk.feature.test_feature import OpenLibrarySearchTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpenLibrarySearchBaseFeature(),
        "test": lambda: OpenLibrarySearchTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
