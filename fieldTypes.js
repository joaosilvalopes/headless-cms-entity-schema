const data = require('./entitySchema.json');

module.exports = data.properties.fields.items.oneOf.reduce(
	(
		acc,
		{
			properties: {
				type: {
					enum: [type]
				}
			}
		}
	) => ({ ...acc, [type]: type }),
	{}
);
