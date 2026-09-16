

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"birth_date","req":false,"short":"Author birth date","type":"`$STRING`","index$":0},{"active":true,"name":"death_date","req":false,"short":"Author death date","type":"`$STRING`","index$":1},{"active":true,"name":"key","req":false,"short":"Open Library author key","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"Author name","type":"`$STRING`","index$":3},{"active":true,"name":"top_subjects","req":false,"short":"Top subjects associated with this author","type":"`$ARRAY`","index$":4},{"active":true,"name":"top_work","req":false,"short":"Title of top work","type":"`$STRING`","index$":5},{"active":true,"name":"work_count","req":false,"short":"Number of works by this author","type":"`$INTEGER`","index$":6}],"name":"author","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":"twain","kind":"query","name":"q","orig":"q","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /search/authors.json","json":"{\"operationId\":\"searchAuthors\",\"parameters\":[{\"description\":\"The search query for author names\",\"example\":\"twain\",\"in\":\"query\",\"name\":\"q\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"docs\":{\"description\":\"Array of author documents\",\"items\":{\"properties\":{\"birth_date\":{\"description\":\"Author birth date\",\"type\":\"string\"},\"death_date\":{\"description\":\"Author death date\",\"type\":\"string\"},\"key\":{\"description\":\"Open Library author key\",\"type\":\"string\"},\"name\":{\"description\":\"Author name\",\"type\":\"string\"},\"top_subjects\":{\"description\":\"Top subjects associated with this author\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"top_work\":{\"description\":\"Title of top work\",\"type\":\"string\"},\"work_count\":{\"description\":\"Number of works by this author\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"numFound\":{\"description\":\"Total number of authors found\",\"type\":\"integer\"},\"numFoundExact\":{\"description\":\"Whether the count is exact\",\"type\":\"boolean\"},\"start\":{\"description\":\"Starting offset\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful author search response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid query parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/search/authors.json","segments":[{"lit":"search"},{"lit":"authors.json"}],"select":{"exist":["limit","offset","q"]},"transform":{"req":"`reqdata`","res":"`body.docs`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"author","name__orig":"author","Name":"Author","name_":"author","name-":"author","NAME":"AUTHOR","index$":0}, {"active":true,"entity":"author","key$":"BasicAuthorFlow","kind":"basic","name":"BasicAuthorFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"author_ref01"}}],"index$":0}]}, 'Author')
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
  
