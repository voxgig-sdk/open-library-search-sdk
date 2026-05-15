package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAuthorEntityFunc func(client *OpenLibrarySearchSDK, entopts map[string]any) OpenLibrarySearchEntity

var NewSearchEntityFunc func(client *OpenLibrarySearchSDK, entopts map[string]any) OpenLibrarySearchEntity

