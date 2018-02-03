/**
 *
 *
 * @package
 * @licence MIT
 * @author Thomas Dupont
 */

/*
• Nom • Tags • Download Link
 */

const Liana = require('forest-express-mongoose');

Liana.collection('fonts', {
	actions: [
		{
			name: 'addFont',
			fields: [
				{
					field: 'name',
					type: 'String',
				},
			],
		},
	],
});

