<?php
declare(strict_types=1);

// OpenLibrarySearch SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

OpenLibrarySearchUtility::setRegistrar(function (OpenLibrarySearchUtility $u): void {
    $u->clean = [OpenLibrarySearchClean::class, 'call'];
    $u->done = [OpenLibrarySearchDone::class, 'call'];
    $u->make_error = [OpenLibrarySearchMakeError::class, 'call'];
    $u->feature_add = [OpenLibrarySearchFeatureAdd::class, 'call'];
    $u->feature_hook = [OpenLibrarySearchFeatureHook::class, 'call'];
    $u->feature_init = [OpenLibrarySearchFeatureInit::class, 'call'];
    $u->fetcher = [OpenLibrarySearchFetcher::class, 'call'];
    $u->make_fetch_def = [OpenLibrarySearchMakeFetchDef::class, 'call'];
    $u->make_context = [OpenLibrarySearchMakeContext::class, 'call'];
    $u->make_options = [OpenLibrarySearchMakeOptions::class, 'call'];
    $u->make_request = [OpenLibrarySearchMakeRequest::class, 'call'];
    $u->make_response = [OpenLibrarySearchMakeResponse::class, 'call'];
    $u->make_result = [OpenLibrarySearchMakeResult::class, 'call'];
    $u->make_point = [OpenLibrarySearchMakePoint::class, 'call'];
    $u->make_spec = [OpenLibrarySearchMakeSpec::class, 'call'];
    $u->make_url = [OpenLibrarySearchMakeUrl::class, 'call'];
    $u->param = [OpenLibrarySearchParam::class, 'call'];
    $u->prepare_auth = [OpenLibrarySearchPrepareAuth::class, 'call'];
    $u->prepare_body = [OpenLibrarySearchPrepareBody::class, 'call'];
    $u->prepare_headers = [OpenLibrarySearchPrepareHeaders::class, 'call'];
    $u->prepare_method = [OpenLibrarySearchPrepareMethod::class, 'call'];
    $u->prepare_params = [OpenLibrarySearchPrepareParams::class, 'call'];
    $u->prepare_path = [OpenLibrarySearchPreparePath::class, 'call'];
    $u->prepare_query = [OpenLibrarySearchPrepareQuery::class, 'call'];
    $u->result_basic = [OpenLibrarySearchResultBasic::class, 'call'];
    $u->result_body = [OpenLibrarySearchResultBody::class, 'call'];
    $u->result_headers = [OpenLibrarySearchResultHeaders::class, 'call'];
    $u->transform_request = [OpenLibrarySearchTransformRequest::class, 'call'];
    $u->transform_response = [OpenLibrarySearchTransformResponse::class, 'call'];
});
