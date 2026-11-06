var CaptureRecordUtils = Class.create();
CaptureRecordUtils.prototype = Object.extendsObject(
  global.AbstractAjaxProcessor,
  {
    /**
     * Captures a GlideRecord in the current update set. Displays a success notification.
     * @param {GlideRecord} grRecord
     */
    captureSingleRecord: function (grRecord) {
      this._captureRecord(grRecord);
      this._displaySuccess();
    },

    /**
     * Capture multiple GlideRecords in the current update set. Displays a success notification.
     * @param {String} ids
     * @param {String} tableName
     */
    captureMultipleRecords: function (ids, tableName) {
      var arrIDs = ids.split(",");
      for (var i = 0; i < arrIDs.length; i++) {
        var grRecord = new GlideRecord(tableName);
        grRecord.get(arrIDs[i]) ? this._captureRecord(grRecord) : null;
      }
      this._displaySuccess();
    },

    /**
     * Calls server-side function captureMultipleRecords() with the provided sys_ids and table name.
     */
    clientBridge: function () {
      var ids = this.getParameter("sysparm_sys_ids");
      var tableName = this.getParameter("sysparm_table_name");
      this.captureMultipleRecords(ids, tableName);
    },

    /**
     * Capture the passed in record in the current update set for the logged-in user.
     * If the system property 'x_680259_devtools.capture_record.commit_before' value is true, updates the GlideRecord before committing.
     * @param {GlideRecord} grRecord
     */
    _captureRecord: function (grRecord) {
      // Commit changes before capture
      gs.getProperty(
        "x_680259_devtools.capture_record.commit_before",
        "false",
      ) === "true"
        ? grRecord.update()
        : null;

      // Push the record into the update set
      new GlideUpdateManager2().saveRecord(grRecord);
    },

    /**
     * Display a success notification containing the current update set name and link. Uses the UI message 'capture_record.success'.
     */
    _displaySuccess: function () {
      // Get current update set
      var currentUpdateSetId = gs.getPreference("sys_update_set");
      var grUpdateSet = new GlideRecord("sys_update_set");
      grUpdateSet.get(currentUpdateSetId);

      // Display info message
      var msg = gs.getMessage("capture_record.success", [
        grUpdateSet.getDisplayValue(),
        grUpdateSet.getLink(),
      ]);
      gs.addInfoMessage(msg);
    },

    type: "CaptureRecordUtils",
  },
);

/**
 * Ref qualifier for CaptureRecordUtils
 */
CaptureRecordUtils.refQualifier = function (grRecord) {
  // Feature enabled/disabled
  if (
    gs.getProperty("x_680259_devtools.capture_record.active", "false") !==
    "true"
  ) {
    return false;
  }

  // Extends sys_metadata
  grDatabase = new GlideRecord("sys_db_object");
  grDatabase.get("name", grRecord.getTableName());

  if (
    gs.getProperty(
      "x_680259_devtools.capture_record.exclude_app_file",
      "true",
    ) === "true" &&
    grDatabase.super_class.name.toString() === "sys_metadata"
  ) {
    return false;
  }

  return true;
};
