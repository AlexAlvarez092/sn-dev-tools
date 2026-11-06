import { Record } from '@servicenow/sdk/core'

// Modified copy of the out-of-the-box `element_context` macro with an extra "Copy field name" menu item
Record({
    $id: Now.ID['element_context_macro'],
    table: 'sys_ui_macro',
    data: {
        active: true,
        category: 'general',
        description: 'Context menu for a field (element) on a form',
        name: 'element_context',
        xml: Now.include('./element_context.xml'),
    },
})
