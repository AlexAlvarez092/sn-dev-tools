var CollisionsReportUtils = {
    getCollisions: function(updateSetsList) {
        const collisionsList = [];
        const updateSetSysIdsList = [];

        updateSetsList.forEach(function(currentUpdateSet) {
            updateSetSysIdsList.push(currentUpdateSet.sys_id);
        });

        updateSetsList.forEach(function(currentUpdateSet) {
            currentUpdateSet.customerUpdates.forEach(function(currentCustomerUpdate) {
                if (currentCustomerUpdate.versionsInCollision.length == 0) return;

                currentCustomerUpdate.versionsInCollision.forEach(function(versionInCollision) {
                    if (updateSetSysIdsList.indexOf(versionInCollision.source) != -1) return;

                    const wasReleasedByMistake = CollisionsReportUtils.wasReleasedByMistake(currentCustomerUpdate.name, versionInCollision.sys_recorded_at$DISPLAY);
                    if (wasReleasedByMistake) return;

                    collisionsList.push({
                        set_sys_id: currentUpdateSet.sys_id,
                        set_name: currentUpdateSet.name,
                        update_sys_id: currentCustomerUpdate.sys_id,
                        update_name: currentCustomerUpdate.name,
                        update_target_name: currentCustomerUpdate.target_name,
                        update_type: currentCustomerUpdate.type,
                        update_updated_on: currentCustomerUpdate.sys_updated_on$DISPLAY,
                        collision_sys_id: versionInCollision.source,
                        collision_name: versionInCollision.source$DISPLAY,
                        collision_recorded_at: versionInCollision.sys_recorded_at$DISPLAY
                    });
                });
            });
        });

        return collisionsList;
    },

    getData: function(updateSetSysId) {
        const updateSetsList = CollisionsReportUtils.getUpdateSetsList(updateSetSysId); // Batch update sets

        for (let updateSetListIndex = 0; updateSetListIndex < updateSetsList.length; updateSetListIndex++) {

            let currentUpdateSet = updateSetsList[updateSetListIndex];
            const currentUpdateSetSysId = currentUpdateSet.sys_id;
            const customerUpdatesList = CollisionsReportUtils.getCustomerUpdatesList(currentUpdateSetSysId);

            for (let customerUpdateListIndex = 0; customerUpdateListIndex < customerUpdatesList.length; customerUpdateListIndex++) {

                let currentCustomerUpdate = customerUpdatesList[customerUpdateListIndex];
                const objVersionsInCollision = CollisionsReportUtils.getObjectVersionsInCollision(currentCustomerUpdate);

                currentCustomerUpdate.versionsInCollision = objVersionsInCollision;
            }

            currentUpdateSet.customerUpdates = customerUpdatesList;
        }

        return updateSetsList;
    },

    getUpdateSetsList: function(updateSetSysId) {
        var updateSetsList = [];
        var gqUpdateSet = new GlideQuery('sys_update_set')
            .where('sys_id', updateSetSysId)
            .selectOne('name', 'base_update_set', 'base_update_set$DISPLAY', 'release_date$DISPLAY')
            .get();

        if (gqUpdateSet.base_update_set) {
            new GlideQuery('sys_update_set')
                .where('base_update_set', gqUpdateSet.base_update_set)
                .select('name', 'base_update_set', 'base_update_set$DISPLAY', 'release_date$DISPLAY')
                .forEach(function(currentUpdateSet) {
                    updateSetsList.push(currentUpdateSet);
                });
        } else {
            updateSetsList.push(gqUpdateSet);
        }

        return updateSetsList;
    },

    getCustomerUpdatesList: function(updateSetSysId) {
        var customerUpdatesList = [];
        new GlideQuery('sys_update_xml')
            .where('update_set', updateSetSysId)
            .select('name', 'type', 'target_name', 'sys_updated_on$DISPLAY', 'sys_created_on$DISPLAY', 'update_set', 'update_set$DISPLAY')
            .forEach(function(currentcustomerUpdate) {
                customerUpdatesList.push(currentcustomerUpdate);
            });

        return customerUpdatesList;
    },

    getObjectVersionsInCollision: function(objCustomerUpdate) {
        const customerUpdateName = objCustomerUpdate.name;
        const customerUpdateSource = objCustomerUpdate.update_set;
        const customerUpdateRecordedAt = objCustomerUpdate.sys_updated_on$DISPLAY;

        const versionsInCollisiontList = [];

        let sourceOfPreviousVersion;

        new GlideQuery('sys_update_version')
            .where('name', customerUpdateName)
            .where('source', '!=', customerUpdateSource)
            .where('state', '!=', 'backedout')
            .where('source_table', 'sys_update_set')
            .orderByDesc('source')
            .orderBy('sys_recorded_at')
            .select('source', 'source$DISPLAY', 'sys_recorded_at$DISPLAY')
            .forEach(function(currentVersion) {

                if (currentVersion.source == sourceOfPreviousVersion) return;

                sourceOfPreviousVersion = currentVersion.source;

                if (CollisionsReportUtils.isDefault(currentVersion.source)) return;
                if (CollisionsReportUtils.isDeleted(currentVersion.source)) return;
                if (CollisionsReportUtils.isIgnored(currentVersion.source)) return;
                if (CollisionsReportUtils.isReleased(currentVersion.source)) return;

                const gdtOriginalVersion = new GlideDateTime(customerUpdateRecordedAt);
                const gdtCurrentVersion = new GlideDateTime(currentVersion.sys_recorded_at$DISPLAY);
                const dateComparisionResult = gdtOriginalVersion.compareTo(gdtCurrentVersion);

                if (dateComparisionResult == 1) versionsInCollisiontList.push(currentVersion);
            });

        return versionsInCollisiontList;
    },

    isDefault: function(updateSetSysId) {
        return new GlideQuery('sys_update_set')
            .where('sys_id', updateSetSysId)
            .where('is_default', true)
            .selectOne()
            .isPresent();
    },

    isDeleted: function(updateSetSysId) {
        return !new GlideQuery('sys_update_set')
            .where('sys_id', updateSetSysId)
            .selectOne()
            .isPresent();
    },

    isIgnored: function(updateSetSysId) {
        return new GlideQuery('sys_update_set')
            .where('sys_id', updateSetSysId)
            .where('state', 'ignore')
            .selectOne()
            .isPresent();
    },

    isReleased: function(updateSetSysId) {
        return new GlideQuery('sys_update_set')
            .where('sys_id', updateSetSysId)
            .whereNotNull('release_date')
            .selectOne()
            .isPresent();
    },

    wasReleasedByMistake: function(customerUpdateName, versionReleaseDate) {
        var gdtVersionReleaseDate = new GlideDateTime(versionReleaseDate);
        return new GlideQuery('sys_update_xml')
            .where('name', customerUpdateName)
            .where('update_set.release_date', '>', gdtVersionReleaseDate)
            .selectOne()
            .isPresent();
    },
};