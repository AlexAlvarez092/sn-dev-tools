(function() {


    if (input && input.action == 'getData') {
        
		const updateSetSysId = String($sp.getParameter('sys_id'));
        const grUpdateSet = _getUpdateSetRecord(updateSetSysId);

        if (!grUpdateSet) return;

        const updateSetData = CollisionsReportUtils.getData(updateSetSysId);
        const collisions = CollisionsReportUtils.getCollisions(updateSetData);

        data.updateSetName = grUpdateSet.getDisplayValue();
        data.collisions = collisions;
    }

    function _getUpdateSetRecord(_updateSetSysId) {
        const _grUpdateSet = new GlideRecord("sys_update_set");
        return _grUpdateSet.get(_updateSetSysId) ? _grUpdateSet : null;
    }

})();