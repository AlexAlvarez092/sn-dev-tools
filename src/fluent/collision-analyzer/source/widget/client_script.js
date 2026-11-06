api.controller = function(spUtil) {
    let c = this;
	c.updateSetName = '';
    c.collisions = null;

    c.server.get({
        action: 'getData'
    }).then(function(response) {
		c.updateSetName = response.data.updateSetName;
        c.collisions = response.data.collisions;
    });
};