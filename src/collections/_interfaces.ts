///////////////////////////
///// Imports /////
///////////////////////////
import { Document } from 'mongoose';

///////////////////////////
///// Users /////
///////////////////////////
export interface User extends Document {
	id: number;
	license: string;
	rank: string;
	whitelist: number;
	priority: number;
	banned: number;
	data: any;
}
