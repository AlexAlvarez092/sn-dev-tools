import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['go_to_retrieved_update_set'],
    table: 'sys_update_set',
    name: 'Go to retrieved update set',
    actionName: 'Go to retrieved update set',
    form: {
        showLink: true,
    },
    client: {
        isClient: true,
        isUi11Compatible: true,
        isUi16Compatible: true,
        onClick: 'goToRetrievedUpdateSet();',
    },
    condition: '!gs.nil(current.remote_sys_id);',
    script: `function goToRetrievedUpdateSet() {
    // We use the scratchpad as the field "remote_sys_id" is not 
    // available in the form, and this is a Client UI Action 
    location.href = "sys_remote_update_set.do?sys_id=" + g_scratchpad.remoteUpdateSet;
}`,
    roles: ['admin'],
    showUpdate: true,
    showInsert: false,
    isolateScript: true,
})

UiAction({
    $id: Now.ID['go_to_local_update_set'],
    table: 'sys_remote_update_set',
    name: 'Go to local update set',
    actionName: 'Go to local update set',
    form: {
        showLink: true,
    },
    client: {
        isClient: true,
        isUi11Compatible: true,
        isUi16Compatible: true,
        onClick: 'goToLocalUpdateSet();',
    },
    condition: '!gs.nil(current.update_set);',
    script: `function goToLocalUpdateSet() {
    // We use the scratchpad as the field "update_set" is not 
    // available in the form, and this is a Client UI Action 
    location.href = "sys_update_set.do?sys_id=" + g_scratchpad.updateSet;
}`,
    roles: ['admin'],
    showUpdate: true,
    showInsert: false,
    isolateScript: true,
})
