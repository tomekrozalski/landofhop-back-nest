import * as mongoose from 'mongoose';

import editorialSchema from './editorialSchema';
import labelSchema from './labelSchema';
import producerSchema from './producerSchema';
import { getAllBeverages, getBeverage } from './statics';

const beverageSchema = new mongoose.Schema({
	shortId: {
		type: String,
		required: true,
	},
	badge: {
		type: String,
		required: true,
	},
	label: {
		type: labelSchema,
		required: true,
	},
	producer: producerSchema,
	editorial: editorialSchema,
	added: {
		type: Date,
		required: true,
	},
	updated: Date,
}, { strict: false });

beverageSchema.index({ badge: 1, shortId: 1 }, { unique: true });
beverageSchema.statics.getAllBeverages = getAllBeverages;
beverageSchema.statics.getBeverage = getBeverage;

export default beverageSchema;
