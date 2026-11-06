import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['capture_record_utils'],
    name: 'CaptureRecordUtils',
    script: Now.include('./capture_record_utils.server.js'),
    apiName: 'x_680259_devtools.CaptureRecordUtils',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    $meta: {
        useEsLatest: true,
    },
})
