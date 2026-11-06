import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['capture_record_form'],
    table: 'global',
    name: 'Capture in current Update Set',
    actionName: 'capture_record_form',
    form: {
        showLink: true,
    },
    client: {
        isUi11Compatible: true,
    },
    condition: 'CaptureRecordUtils.refQualifier(current);',
    script: 'new CaptureRecordUtils().captureSingleRecord(current);',
    hint: 'Capture the current record in the current update set',
    roles: ['admin'],
    order: 10000,
    showUpdate: true,
    showInsert: true,
})

UiAction({
    $id: Now.ID['capture_record_list'],
    table: 'global',
    name: 'Capture in current Update Set',
    actionName: 'capture_record_list',
    list: {
        showListChoice: true,
    },
    client: {
        isClient: true,
        isUi11Compatible: true,
    },
    condition: 'captureRecords()',
    script: `function captureRecords() {
    var gaCapture = new GlideAjax('x_680259_devtools.CaptureRecordUtils');
    gaCapture.addParam('sysparm_name', 'clientBridge');
    gaCapture.addParam('sysparm_sys_ids', g_list.getChecked());
    gaCapture.addParam('sysparm_table_name', g_list.getTableName());
    gaCapture.getXML();
}`,
    hint: 'Capture the selected records in the current update set',
    roles: ['admin'],
    order: 10000,
    showUpdate: true,
    showInsert: true,
    isolateScript: true,
})
