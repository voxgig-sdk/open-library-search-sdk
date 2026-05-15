# OpenLibrarySearch SDK feature factory

from feature.base_feature import OpenLibrarySearchBaseFeature
from feature.test_feature import OpenLibrarySearchTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpenLibrarySearchBaseFeature(),
        "test": lambda: OpenLibrarySearchTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
