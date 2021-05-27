///////////////////////////
///// Imports /////
///////////////////////////
import mongoose, { Schema } from 'mongoose';
import { User } from './_interfaces';

///////////////////////////
///// Schema /////
///////////////////////////
const UserSchema: Schema = new Schema(
	{
		id: {
			type: Number,
			required: true,
			unique: true,
		},
		license: {
			type: String,
			required: true,
		},
		rank: {
			type: String,
			required: true,
		},
		whitelist: {
			type: Number,
			required: true,
		},
		priority: {
			type: Number,
			required: true,
		},
		banned: {
			type: Number,
			required: true,
		},
		data: {
			type: Object,
			required: true,
		},
	},
	{ timestamps: true },
);

///////////////////////////
///// Export /////
///////////////////////////
export default mongoose.model<User>('Users', UserSchema);
