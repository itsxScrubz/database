///////////////////////////
///// Config /////
///////////////////////////
export interface Connection {
	readonly Url: string;
	readonly Name: string;
	readonly Options: {
		readonly useNewUrlParser: boolean;
		readonly useUnifiedTopology: boolean;
		readonly autoIndex: boolean;
		readonly poolSize: number;
	};
}

///////////////////////////
///// Logger /////
///////////////////////////
export enum LogTypes {
	'error' = '^9Error^7',
	'inform' = '^5Inform^7',
}

///////////////////////////
///// Query Callbacks /////
///////////////////////////
export type CountCallback = {
	(success: boolean, count?: number): void;
};

export type GeneralCallback = {
	(success: boolean, results?: any): void;
};
