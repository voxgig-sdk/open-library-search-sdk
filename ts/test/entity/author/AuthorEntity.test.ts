

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OpenLibrarySearchSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AuthorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPEN_LIBRARY_SEARCH_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPEN_LIBRARY_SEARCH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenLibrarySearchSDK.test()
    const ent = testsdk.Author()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPEN_LIBRARY_SEARCH_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'author.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"birth_date":{"a":true,"h":"Birth Date","n":"birth_date","r":false,"sh":"Author birth date","t":"`$STRING`","key$":"birth_date","index$":0},"death_date":{"a":true,"h":"Death Date","n":"death_date","r":false,"sh":"Author death date","t":"`$STRING`","key$":"death_date","index$":1},"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"Open Library author key","t":"`$STRING`","key$":"key","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Author name","t":"`$STRING`","key$":"name","index$":3},"top_subjects":{"a":true,"h":"Top Subjects","n":"top_subjects","r":false,"sh":"Top subjects associated with this author","t":"`$ARRAY`","key$":"top_subjects","index$":4},"top_work":{"a":true,"h":"Top Work","n":"top_work","r":false,"sh":"Title of top work","t":"`$STRING`","key$":"top_work","index$":5},"work_count":{"a":true,"h":"Work Count","n":"work_count","r":false,"sh":"Number of works by this author","t":"`$INTEGER`","key$":"work_count","index$":6}},"name":"author","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /search/authors.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"twain","k":"query","n":"q","or":"q","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/search/authors.json","q":{"exist":["limit","offset","q"]},"r":{},"s":[{"lit":"search"},{"lit":"authors.json"}],"t":{"req":"`reqdata`","res":"`body.docs`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"author","name__orig":"author","Name":"Author","name_":"author","name-":"author","NAME":"AUTHOR","index$":0}, {"active":true,"entity":"author","key$":"BasicAuthorFlow","kind":"basic","name":"BasicAuthorFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"author_ref01"}}],"index$":0}]}, 'Author', {"GET /search/authors.json":{"protocol":"http","operationId":"searchAuthors","responses":{"200":{"description":"Successful author search response","content":{"application/json":{"schema":{"type":"object","properties":{"numFound":{"description":"Total number of authors found","key$":"numFound","type":"integer"},"start":{"description":"Starting offset","key$":"start","type":"integer"},"numFoundExact":{"description":"Whether the count is exact","key$":"numFoundExact","type":"boolean"},"docs":{"description":"Array of author documents","items":{"properties":{"birth_date":{"description":"Author birth date","type":"string","key$":"birth_date"},"death_date":{"description":"Author death date","type":"string","key$":"death_date"},"key":{"description":"Open Library author key","type":"string","key$":"key"},"name":{"description":"Author name","type":"string","key$":"name"},"top_subjects":{"description":"Top subjects associated with this author","items":{"type":"string"},"type":"array","key$":"top_subjects"},"top_work":{"description":"Title of top work","type":"string","key$":"top_work"},"work_count":{"description":"Number of works by this author","type":"integer","key$":"work_count"}},"type":"object","x-ref":"#/components/schemas/AuthorDocument","index$":0},"key$":"docs","type":"array"}},"x-ref":"#/components/schemas/AuthorSearchResponse"}}}},"400":{"description":"Bad request - invalid query parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"status":{"type":"integer","description":"HTTP status code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"status":{"type":"integer","description":"HTTP status code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"q","in":"query","description":"The search query for author names","required":true,"schema":{"type":"string"},"example":"twain","index$":0},{"name":"offset","in":"query","description":"Number of results to skip for pagination","required":false,"schema":{"type":"integer","minimum":0,"default":0},"index$":1},{"name":"limit","in":"query","description":"Maximum number of results to return","required":false,"schema":{"type":"integer","minimum":1,"maximum":100,"default":10},"index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let author_ref01_data = Object.values(setup.data.existing.author)[0] as any

    // LIST
    const author_ref01_ent = client.Author()
    const author_ref01_match: any = {}

    const author_ref01_list = (await author_ref01_ent.list(author_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/author/AuthorTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OpenLibrarySearchSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['author01','author02','author03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPEN_LIBRARY_SEARCH_TEST_AUTHOR_ENTID': idmap,
    'OPEN_LIBRARY_SEARCH_TEST_LIVE': 'FALSE',
    'OPEN_LIBRARY_SEARCH_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OPEN_LIBRARY_SEARCH_TEST_AUTHOR_ENTID']

  const live = 'TRUE' === env.OPEN_LIBRARY_SEARCH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPEN_LIBRARY_SEARCH_TEST_AUTHOR_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OpenLibrarySearchSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.OPEN_LIBRARY_SEARCH_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
