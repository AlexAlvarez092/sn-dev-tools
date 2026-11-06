(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    const sysId = request.queryParams.sys_id ? request.queryParams.sys_id.toString() : '';
    const timestamp = request.body.data.timestamp ? request.body.data.timestamp.toString() : '';

    if (!sysId) return new sn_ws_err.BadRequestError("Id is mandatory");
    if (!timestamp) return new sn_ws_err.BadRequestError("Release date is mandatory");

    const gdtReleaseDate = new GlideDateTime();
    gdtReleaseDate.setValue(timestamp);

    const grUpdateSet = new GlideRecord("sys_update_set");
    if (!grUpdateSet.get(sysId)) return new sn_ws_err.BadRequestError("Id not found");

    grUpdateSet.autoSysFields(false);
    grUpdateSet.setWorkflow(false);

    grUpdateSet.setValue("release_date", gdtReleaseDate.getValue());
    grUpdateSet.update();

})(request, response);
