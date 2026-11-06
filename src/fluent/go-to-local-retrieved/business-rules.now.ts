import { BusinessRule } from '@servicenow/sdk/core'

// Adds the sys_id of the retrieved update set to the scratchpad of the local update set form
BusinessRule({
    $id: Now.ID['local_update_set_scratchpad'],
    name: 'Scratchpad',
    table: 'sys_update_set',
    when: 'display',
    action: [],
    script: Now.include('./update_set_scratchpad.server.js'),
})

// Adds the sys_id of the local update set to the scratchpad of the retrieved update set form
BusinessRule({
    $id: Now.ID['retrieved_update_set_scratchpad'],
    name: 'Scratchpad',
    table: 'sys_remote_update_set',
    when: 'display',
    action: [],
    script: Now.include('./remote_update_set_scratchpad.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
