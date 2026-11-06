import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['capture_record_success_message'],
    table: 'sys_ui_message',
    data: {
        key: 'capture_record.success',
        language: 'en',
        message: 'Record(s) captured in <a href="/{1}">{0}</a> update set.',
    },
})
