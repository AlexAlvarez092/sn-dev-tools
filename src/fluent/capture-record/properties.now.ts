import { Property } from '@servicenow/sdk/core'

export const captureRecordActive = Property({
    $id: Now.ID['capture_record_active'],
    name: 'x_680259_devtools.capture_record.active',
    type: 'boolean',
    value: true,
    description: 'Enable / disable the feature',
    ignoreCache: true,
    isPrivate: false,
})

export const captureRecordExcludeAppFile = Property({
    $id: Now.ID['capture_record_exclude_app_file'],
    name: 'x_680259_devtools.capture_record.exclude_app_file',
    type: 'boolean',
    value: true,
    description: 'Include / Exclude tables extending Application File',
    ignoreCache: true,
    isPrivate: false,
})

export const captureRecordCommitBefore = Property({
    $id: Now.ID['capture_record_commit_before'],
    name: 'x_680259_devtools.capture_record.commit_before',
    type: 'boolean',
    value: false,
    description: 'Commit changes before capture record',
    ignoreCache: true,
    isPrivate: false,
})
