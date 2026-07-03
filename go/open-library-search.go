package voxgigopenlibrarysearchsdk

import (
	"github.com/voxgig-sdk/open-library-search-sdk/go/core"
	"github.com/voxgig-sdk/open-library-search-sdk/go/entity"
	"github.com/voxgig-sdk/open-library-search-sdk/go/feature"
	_ "github.com/voxgig-sdk/open-library-search-sdk/go/utility"
)

// Type aliases preserve external API.
type OpenLibrarySearchSDK = core.OpenLibrarySearchSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type OpenLibrarySearchEntity = core.OpenLibrarySearchEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type OpenLibrarySearchError = core.OpenLibrarySearchError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAuthorEntityFunc = func(client *core.OpenLibrarySearchSDK, entopts map[string]any) core.OpenLibrarySearchEntity {
		return entity.NewAuthorEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.OpenLibrarySearchSDK, entopts map[string]any) core.OpenLibrarySearchEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewOpenLibrarySearchSDK = core.NewOpenLibrarySearchSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewOpenLibrarySearchSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *OpenLibrarySearchSDK  { return NewOpenLibrarySearchSDK(nil) }
func Test() *OpenLibrarySearchSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
