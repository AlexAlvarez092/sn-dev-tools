import { RestApi, SPPage, SPWidget, ScriptInclude, UiAction } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['collisions_report_utils'],
    name: 'CollisionsReportUtils',
    script: Now.include('./collisions_report_utils.server.js'),
    apiName: 'x_680259_devtools.CollisionsReportUtils',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    $meta: {
        useEsLatest: true,
    },
})

UiAction({
    $id: Now.ID['check_collisions'],
    table: 'sys_update_set',
    name: 'Check collisions',
    actionName: 'x_check_collisions',
    form: {
        showLink: true,
        showContextMenu: true,
    },
    client: {
        isClient: true,
        isUi11Compatible: true,
        onClick: 'goToPage();',
    },
    script: `function goToPage() {
	window.open('sp?id=collision_report&sys_id=' + g_form.getUniqueValue(), '_blank');
}`,
    roles: ['admin'],
    order: 10000,
    showUpdate: true,
    showInsert: false,
})

export const collisionReportWidget = SPWidget({
    $id: Now.ID['collision_report_widget'],
    name: 'Collision report',
    id: 'collision-report',
    clientScript: Now.include('./widget/client_script.js'),
    serverScript: Now.include('./widget/server_script.js'),
    htmlTemplate: Now.include('./widget/template.html'),
    linkScript: Now.include('./widget/link-script.js'),
    $meta: {
        useEsLatest: true,
    },
})

SPPage({
    pageId: 'collision_report',
    title: 'Collision report',
    category: 'custom',
    roles: ['admin'],
    containers: [
        {
            $id: Now.ID['collision_report_container'],
            name: 'Collision report - Container 1',
            order: 1,
            rows: [
                {
                    $id: Now.ID['collision_report_row'],
                    order: 1,
                    columns: [
                        {
                            $id: Now.ID['collision_report_column'],
                            size: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: Now.ID['collision_report_instance'],
                                    widget: collisionReportWidget,
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

// Receives the release date of an update set from the target instance
RestApi({
    $id: Now.ID['local_update_set_api'],
    name: 'Local Update Set',
    serviceId: 'local_update_set',
    active: true,
    consumes: 'application/json,application/xml,text/xml',
    produces: 'application/json,application/xml,text/xml',
    enforceAcl: ['cf9d01d3e73003009d6247e603f6a990'],
    versions: [
        {
            $id: Now.ID['local_update_set_api_v1'],
            version: 1,
            isDefault: true,
            active: true,
        },
    ],
    routes: [
        {
            $id: Now.ID['local_update_set_release_date'],
            name: 'PATCH Release date',
            method: 'PATCH',
            path: '/',
            version: 1,
            active: true,
            authentication: true,
            authorization: true,
            internalRole: true,
            script: Now.include('./release_date_resource.server.js'),
        },
    ],
})
