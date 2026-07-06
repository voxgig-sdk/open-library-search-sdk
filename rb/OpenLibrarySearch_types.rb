# frozen_string_literal: true

# Typed models for the OpenLibrarySearch SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Author entity data model.
#
# @!attribute [rw] birth_date
#   @return [String, nil]
#
# @!attribute [rw] death_date
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] top_subject
#   @return [Array, nil]
#
# @!attribute [rw] top_work
#   @return [String, nil]
#
# @!attribute [rw] work_count
#   @return [Integer, nil]
Author = Struct.new(
  :birth_date,
  :death_date,
  :key,
  :name,
  :top_subject,
  :top_work,
  :work_count,
  keyword_init: true
)

# Request payload for Author#list.
#
# @!attribute [rw] birth_date
#   @return [String, nil]
#
# @!attribute [rw] death_date
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] top_subject
#   @return [Array, nil]
#
# @!attribute [rw] top_work
#   @return [String, nil]
#
# @!attribute [rw] work_count
#   @return [Integer, nil]
AuthorListMatch = Struct.new(
  :birth_date,
  :death_date,
  :key,
  :name,
  :top_subject,
  :top_work,
  :work_count,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] author_key
#   @return [Array, nil]
#
# @!attribute [rw] author_name
#   @return [Array, nil]
#
# @!attribute [rw] cover_i
#   @return [Integer, nil]
#
# @!attribute [rw] edition
#   @return [Hash, nil]
#
# @!attribute [rw] edition_count
#   @return [Integer, nil]
#
# @!attribute [rw] first_publish_year
#   @return [Integer, nil]
#
# @!attribute [rw] has_fulltext
#   @return [Boolean, nil]
#
# @!attribute [rw] ia
#   @return [Array, nil]
#
# @!attribute [rw] isbn
#   @return [Array, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [Array, nil]
#
# @!attribute [rw] public_scan_b
#   @return [Boolean, nil]
#
# @!attribute [rw] publisher
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Search = Struct.new(
  :author_key,
  :author_name,
  :cover_i,
  :edition,
  :edition_count,
  :first_publish_year,
  :has_fulltext,
  :ia,
  :isbn,
  :key,
  :language,
  :public_scan_b,
  :publisher,
  :title,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] author_key
#   @return [Array, nil]
#
# @!attribute [rw] author_name
#   @return [Array, nil]
#
# @!attribute [rw] cover_i
#   @return [Integer, nil]
#
# @!attribute [rw] edition
#   @return [Hash, nil]
#
# @!attribute [rw] edition_count
#   @return [Integer, nil]
#
# @!attribute [rw] first_publish_year
#   @return [Integer, nil]
#
# @!attribute [rw] has_fulltext
#   @return [Boolean, nil]
#
# @!attribute [rw] ia
#   @return [Array, nil]
#
# @!attribute [rw] isbn
#   @return [Array, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [Array, nil]
#
# @!attribute [rw] public_scan_b
#   @return [Boolean, nil]
#
# @!attribute [rw] publisher
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
SearchListMatch = Struct.new(
  :author_key,
  :author_name,
  :cover_i,
  :edition,
  :edition_count,
  :first_publish_year,
  :has_fulltext,
  :ia,
  :isbn,
  :key,
  :language,
  :public_scan_b,
  :publisher,
  :title,
  keyword_init: true
)

