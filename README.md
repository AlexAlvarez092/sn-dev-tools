# SN Dev Tools

ServiceNow Fluent application (`x_680259_devtools`) bundling small developer tools.

| Folder (`src/fluent`)       | Tool                                                                                                                        |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `copy-field-name`           | "Copy field name" item in the field label context menu (modified `element_context` macro)                                   |
| `capture-record`            | Capture a record (form) or several (list) in the current update set; system properties `x_680259_devtools.capture_record.*` |
| `collision-analyzer/source` | "Check collisions" UI Action, report page/widget, script include and REST API (source instance)                             |
| `collision-analyzer/target` | Business rule, event and script action that post the release date back (target instance)                                    |
| `go-to-local-retrieved`     | Related links to jump between local and retrieved update sets                                                               |

```bash
npm install
npm run build
npm run deploy   # now-sdk install
```
