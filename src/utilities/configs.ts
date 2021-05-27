///////////////////////////
///// Imports /////
///////////////////////////
import { Connection as iConnection } from './_interfaces';

///////////////////////////
///// Database /////
///////////////////////////
export const Connection: iConnection = {
	Url: 'mongodb://localhost:27017',
	Name: 'nextgen',
	Options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: false,
		poolSize: 50,
	},
};
