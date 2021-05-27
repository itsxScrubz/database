///////////////////////////
///// Imports /////
///////////////////////////
import Users from '../collections/users';
import { LogTypes } from './_interfaces';

///////////////////////////
///// Stoof /////
///////////////////////////
/**
 * Get collection for query.
 * @param value Collection Name.
 * @returns Collection.
 */
export const GetCollection = (value: string) => {
	if (value === 'users') {
		return Users;
	}
};

/**
 * Database logger.
 * @param type Type of error.
 * @param message Error message.
 * @param query Query attempted.
 * @param update Update attempted
 * @param err Mongo error log.
 */
export const Logger = (type: string, message: string, query?: any, err?: any, update?: any) => {
	switch (type) {
		case 'inform':
			console.log(`[^6Database^7] ${LogTypes[type]} | ${message}`);
			break;
		case 'error':
			console.log(`[^6Database^7] ${LogTypes[type]} | ${message}`);
			if (query) {
				console.log(`[^6Database^7] Query Params: ${JSON.stringify(query)}`);
			}
			if (update) {
				console.log(`[^6Database^7] Update Params: ${JSON.stringify(update)}`);
			}
			if (err) {
				console.log(`[^6Database^7] Error Log: | ${JSON.stringify(err)}`);
			}
			break;
	}
};
