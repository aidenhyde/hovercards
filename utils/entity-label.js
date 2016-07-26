var _ = require('underscore');

module.exports = function(entity) {
	return _.chain([entity.api, entity.type])
		.compact()
		.union(entity.as && ['as', entity.as])
		.union(entity.for ? ['for', module.exports(entity.for)] : [entity.id])
		.join(' ')
		.value();
};
