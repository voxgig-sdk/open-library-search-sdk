# OpenLibrarySearch SDK feature factory

from openlibrarysearch_sdk.feature.base_feature import OpenLibrarySearchBaseFeature
from openlibrarysearch_sdk.feature.ratelimit_feature import OpenLibrarySearchRatelimitFeature
from openlibrarysearch_sdk.feature.retry_feature import OpenLibrarySearchRetryFeature
from openlibrarysearch_sdk.feature.test_feature import OpenLibrarySearchTestFeature
from openlibrarysearch_sdk.feature.timeout_feature import OpenLibrarySearchTimeoutFeature


_FEATURES = {
    "base": lambda: OpenLibrarySearchBaseFeature(),
    "ratelimit": lambda: OpenLibrarySearchRatelimitFeature(),
    "retry": lambda: OpenLibrarySearchRetryFeature(),
    "test": lambda: OpenLibrarySearchTestFeature(),
    "timeout": lambda: OpenLibrarySearchTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
