///////////////////////////
///// Imports /////
///////////////////////////
import mongoose from 'mongoose';
import { Connection } from './utilities/configs';
import { Logger } from './utilities/handlers';
import UsersCollection from './classes/users';

///////////////////////////
///// Init /////
///////////////////////////
class Manager {
	private DB: any;
	private Connected: boolean;
	constructor() {
		this.DB = mongoose
			.connect(`${Connection.Url}/${Connection.Name}`, Connection.Options)
			.then(result => {
				Logger('inform', 'Database Started!');
				this.Connected = true;
			})
			.catch(err => console.log(err));
	}
	public get Connection() {
		return this.Connected;
	}
}

export const Database = new Manager();

///////////////////////////
///// Component /////
///////////////////////////
const Component = {
	Users: new UsersCollection(),
};

///////////////////////////
///// Export /////
///////////////////////////
global.exports('FetchDatabase', () => {
	return Component;
});

/*
Database.Users.Update(
	{
		query: {
			name: 'Scrubz',
		},
		update: {
			name: 'Scrubzuwu',
		},
	},
	(success, results) => {
		if (!success) return;
		// Do stoof.
	},
);
*/
