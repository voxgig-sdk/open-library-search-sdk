# OpenLibrarySearch SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

OpenLibrarySearchUtility.registrar = ->(u) {
  u.clean = OpenLibrarySearchUtilities::Clean
  u.done = OpenLibrarySearchUtilities::Done
  u.make_error = OpenLibrarySearchUtilities::MakeError
  u.feature_add = OpenLibrarySearchUtilities::FeatureAdd
  u.feature_hook = OpenLibrarySearchUtilities::FeatureHook
  u.feature_init = OpenLibrarySearchUtilities::FeatureInit
  u.fetcher = OpenLibrarySearchUtilities::Fetcher
  u.make_fetch_def = OpenLibrarySearchUtilities::MakeFetchDef
  u.make_context = OpenLibrarySearchUtilities::MakeContext
  u.make_options = OpenLibrarySearchUtilities::MakeOptions
  u.make_request = OpenLibrarySearchUtilities::MakeRequest
  u.make_response = OpenLibrarySearchUtilities::MakeResponse
  u.make_result = OpenLibrarySearchUtilities::MakeResult
  u.make_point = OpenLibrarySearchUtilities::MakePoint
  u.make_spec = OpenLibrarySearchUtilities::MakeSpec
  u.make_url = OpenLibrarySearchUtilities::MakeUrl
  u.param = OpenLibrarySearchUtilities::Param
  u.prepare_auth = OpenLibrarySearchUtilities::PrepareAuth
  u.prepare_body = OpenLibrarySearchUtilities::PrepareBody
  u.prepare_headers = OpenLibrarySearchUtilities::PrepareHeaders
  u.prepare_method = OpenLibrarySearchUtilities::PrepareMethod
  u.prepare_params = OpenLibrarySearchUtilities::PrepareParams
  u.prepare_path = OpenLibrarySearchUtilities::PreparePath
  u.prepare_query = OpenLibrarySearchUtilities::PrepareQuery
  u.result_basic = OpenLibrarySearchUtilities::ResultBasic
  u.result_body = OpenLibrarySearchUtilities::ResultBody
  u.result_headers = OpenLibrarySearchUtilities::ResultHeaders
  u.transform_request = OpenLibrarySearchUtilities::TransformRequest
  u.transform_response = OpenLibrarySearchUtilities::TransformResponse
}
