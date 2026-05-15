package core

type OpenLibrarySearchError struct {
	IsOpenLibrarySearchError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOpenLibrarySearchError(code string, msg string, ctx *Context) *OpenLibrarySearchError {
	return &OpenLibrarySearchError{
		IsOpenLibrarySearchError: true,
		Sdk:              "OpenLibrarySearch",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OpenLibrarySearchError) Error() string {
	return e.Msg
}
