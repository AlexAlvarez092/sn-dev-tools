import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'a80a35e43db24b3db3383088dd82230a'
                    }
                    capture_record_active: {
                        table: 'sys_properties'
                        id: 'bdaa749667d149bc87d815922896858a'
                    }
                    capture_record_commit_before: {
                        table: 'sys_properties'
                        id: '4f8bb7df1c5348439d60a67473172d3b'
                    }
                    capture_record_exclude_app_file: {
                        table: 'sys_properties'
                        id: '5afd32c27d9b447aa8f82188c00e50b4'
                    }
                    capture_record_form: {
                        table: 'sys_ui_action'
                        id: 'e950e55f41654c799fa5e30b2c9d389e'
                    }
                    capture_record_list: {
                        table: 'sys_ui_action'
                        id: '8fa837a009324ebe9dd251f6d9f81bbe'
                    }
                    capture_record_success_message: {
                        table: 'sys_ui_message'
                        id: 'c68e31888b65407080a807c5bdff3161'
                    }
                    capture_record_utils: {
                        table: 'sys_script_include'
                        id: '4e57b2e39fd34ce2bcfaf79b0fd83317'
                    }
                    check_collisions: {
                        table: 'sys_ui_action'
                        id: '2026ea07b83e496caccf9f2e014ea91c'
                    }
                    collision_report_column: {
                        table: 'sp_column'
                        id: '41ea055a773b46d8b01ec442e20eadc7'
                    }
                    collision_report_container: {
                        table: 'sp_container'
                        id: '269b10187bce4c0b9bba7c291f0ace0b'
                    }
                    collision_report_instance: {
                        table: 'sp_instance'
                        id: 'dc51adb236ab4dca96197f4ef95d4f8a'
                    }
                    collision_report_row: {
                        table: 'sp_row'
                        id: 'da5d38c53ec84e5fb53a11a23abca1fd'
                    }
                    collision_report_widget: {
                        table: 'sp_widget'
                        id: '1cead7d6a45245c69508b6b178a34c2c'
                    }
                    collisions_report_utils: {
                        table: 'sys_script_include'
                        id: 'a449c79f566c4f708e37eace8d51aebc'
                    }
                    collisions_tool_release_date_event: {
                        table: 'sysevent_register'
                        id: 'd230567de44c47119754a262f82a48ba'
                    }
                    element_context_macro: {
                        table: 'sys_ui_macro'
                        id: '184e9ff8c0724949ad6bcd2356dad964'
                    }
                    go_to_local_update_set: {
                        table: 'sys_ui_action'
                        id: 'e058873b76484a5887ab4c327b308677'
                    }
                    go_to_retrieved_update_set: {
                        table: 'sys_ui_action'
                        id: '2a3e317d5a6145cfb482d9501b54b964'
                    }
                    local_update_set_api: {
                        table: 'sys_ws_definition'
                        id: 'de412d21e47d4c22aa77fb32ded0b742'
                    }
                    local_update_set_api_v1: {
                        table: 'sys_ws_version'
                        id: 'e3d5dc5ddb8e4422a3394507e281bebe'
                    }
                    local_update_set_release_date: {
                        table: 'sys_ws_operation'
                        id: '3d0fe79566264ca8b5ea89e5e024b7cb'
                    }
                    local_update_set_scratchpad: {
                        table: 'sys_script'
                        id: '3ce67a7bca1040f0bd1fa46976ecc64e'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd5724d412ab9458c9abe64c22127acdc'
                    }
                    post_release_date_to_source: {
                        table: 'sys_script'
                        id: '3c646140ac5b456f81ea37800ed5b14f'
                    }
                    release_date_to_source_action: {
                        table: 'sysevent_script_action'
                        id: '7ae202c118e04c729f462c5d24d38f9f'
                    }
                    retrieved_update_set_scratchpad: {
                        table: 'sys_script'
                        id: '452a4f654b6a4b6c9bfca72d965a86dd'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_action_role'
                        id: '08b8ce660df34d6ba1bacc55ca1dbc2f'
                        key: {
                            sys_ui_action: '2026ea07b83e496caccf9f2e014ea91c'
                            sys_user_role: {
                                id: 'd82726d6cd9a4489ae999c9fa2deffec'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '2cc3fd7b99d94145a17abdf2713c4865'
                        key: {
                            sys_ui_action: 'e058873b76484a5887ab4c327b308677'
                            sys_user_role: {
                                id: 'd82726d6cd9a4489ae999c9fa2deffec'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '4493547e8320221025f1e330ceaad388'
                        deleted: true
                        key: {
                            id: 'd3439c3e8320221025f1e330ceaad3b4'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '545289cc8394661025f1e330ceaad366'
                        deleted: true
                        key: {
                            id: 'a67105cc8394661025f1e330ceaad3e1'
                            table: 'sysevent_script_action'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '59da1261b3e441409eca4a10b0ebc2d7'
                        key: {
                            id: '1cead7d6a45245c69508b6b178a34c2c'
                            table: 'sp_widget'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5fe325718de344af8700147049062d83'
                        key: {
                            sys_ui_action: '8fa837a009324ebe9dd251f6d9f81bbe'
                            sys_user_role: {
                                id: 'd82726d6cd9a4489ae999c9fa2deffec'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '627d2631e5fe447ea4c9a5a225f8fd77'
                        key: {
                            id: '4e57b2e39fd34ce2bcfaf79b0fd83317'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '68ed38088394661025f1e330ceaad320'
                        deleted: true
                        key: {
                            id: '849c3c088394661025f1e330ceaad389'
                            table: 'sys_ws_operation'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '72fda8448354661025f1e330ceaad34f'
                        deleted: true
                        key: {
                            id: '4db8e0cc8314661025f1e330ceaad35b'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '772a878b3cb9422bb53e4dc088fffb97'
                        key: {
                            sys_ui_action: '2a3e317d5a6145cfb482d9501b54b964'
                            sys_user_role: {
                                id: 'd82726d6cd9a4489ae999c9fa2deffec'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: '824fa8448354661025f1e330ceaad3a9'
                        deleted: true
                        key: {
                            id: '208ed4808314661025f1e330ceaad332'
                            table: 'sp_widget'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'a0f8f83681f744559d805a50b78b69dd'
                        key: {
                            sys_ui_action: 'e950e55f41654c799fa5e30b2c9d389e'
                            sys_user_role: {
                                id: 'd82726d6cd9a4489ae999c9fa2deffec'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'ae0ab80d0c1d4d36be97d37f1ffeb577'
                        key: {
                            id: 'collision_report'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'b2e9f31754c44b53b96fe101fcd13260'
                        key: {
                            id: '7ae202c118e04c729f462c5d24d38f9f'
                            table: 'sysevent_script_action'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'bab0050c8394661025f1e330ceaad334'
                        deleted: true
                        key: {
                            id: 'd55f780c8394661025f1e330ceaad376'
                            table: 'sys_script'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'd122de529e184e43b8596ba07a5c2896'
                        key: {
                            id: 'a449c79f566c4f708e37eace8d51aebc'
                            table: 'sys_script_include'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'd3b9949f83400f106170b5b6feaad3bb'
                        deleted: true
                        key: {
                            id: '3b39dc9f83400f106170b5b6feaad39e'
                            table: 'sys_script'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'ecbdc7646227440cb229918871838f5c'
                        key: {
                            id: '452a4f654b6a4b6c9bfca72d965a86dd'
                            table: 'sys_script'
                        }
                    },
                    {
                        table: 'sys_es_latest_script'
                        id: 'f914991f31b04e6c9ffb83b3abf0d56c'
                        key: {
                            id: '3c646140ac5b456f81ea37800ed5b14f'
                            table: 'sys_script'
                        }
                    },
                ]
            }
        }
    }
}
