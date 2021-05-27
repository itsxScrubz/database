///////////////////////////
///// Imports /////
///////////////////////////
import { Database } from '../main';
import { Logger } from '../utilities/handlers';
import { CountCallback, GeneralCallback } from '../utilities/_interfaces';
import { Queries } from './query';

///////////////////////////
///// Init /////
///////////////////////////
export default class UsersCollection extends Queries {
	private GetConnection: () => boolean;
	constructor() {
		super();
		this.GetConnection = () => {
			return Database.Connection;
		};
	}
	public Count(cb: CountCallback) {
		if (!this.GetConnection) {
			Logger('error', 'No database connection found!');
			cb(false);
			return;
		}
		this.CountCollection('users', cb);
	}
	public Find(params: any, cb: GeneralCallback) {
		if (!this.GetConnection) {
			Logger('error', 'No database connection found!');
			cb(false);
			return;
		}
		this.FindDocument('users', params, cb);
	}
	public Insert(params: any, cb: GeneralCallback) {
		if (!this.GetConnection) {
			Logger('error', 'No database connection found!');
			cb(false);
			return;
		}
		this.InsertDocument('users', params, cb);
	}
	public Update(params: any, cb: GeneralCallback) {
		if (!this.GetConnection) {
			Logger('error', 'No database connection found!');
			cb(false);
			return;
		}
		this.UpdateDocument('users', params, cb);
	}
	public Delete(params: any, cb: GeneralCallback) {
		if (!this.GetConnection) {
			Logger('error', 'No database connection found!');
			cb(false);
			return;
		}
		this.DeleteDocument('users', params, cb);
	}
}
