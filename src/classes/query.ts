///////////////////////////
///// Imports /////
///////////////////////////
import { CountCallback, GeneralCallback } from '../utilities/_interfaces';
import { GetCollection, Logger } from '../utilities/handlers';

export class Queries {
	protected CountCollection(collectionName: string, cb: CountCallback) {
		const collection = GetCollection(collectionName);
		collection
			.find({})
			.then(results => {
				cb(true, results.length);
			})
			.catch(err => {
				Logger('error', `Collection ${collectionName} count failed.`);
				cb(false);
			});
	}
	protected FindDocument(collectionName: string, params: any, cb: GeneralCallback) {
		const collection = GetCollection(collectionName);
		collection
			.findOne(params.query)
			.then(results => {
				cb(true, results);
			})
			.catch(err => {
				Logger('error', `Find query failed. Collection => ${params.collection}`, params.query, err);
				cb(false);
			});
	}
	protected InsertDocument(collectionName: string, params: any, cb: GeneralCallback) {
		const collection = GetCollection(collectionName);
		const newItem = new collection(params.query);
		newItem
			.save()
			.then(results => {
				cb(true, results);
			})
			.catch(err => {
				Logger('error', `Insert query failed. Collection => ${params.collection}`, params.query, err);
				cb(false);
			});
	}
	protected UpdateDocument(collectionName: string, params: any, cb: GeneralCallback) {
		const collection = GetCollection(collectionName);
		collection
			.findOneAndUpdate(params.query, params.update)
			.then(results => {
				cb(true, results);
			})
			.catch(err => {
				Logger('error', `Update query failed. Collection => ${params.collection}`, params.query, err, params.update);
				cb(false);
			});
	}
	protected DeleteDocument(collectionName: string, params: any, cb: GeneralCallback) {
		const collection = GetCollection(collectionName);
		collection
			.findOneAndDelete(params.query)
			.then(results => {
				cb(true, results);
			})
			.catch(err => {
				Logger('error', `Delete query failed. Collection => ${params.collection}`, params.query, err);
				cb(false);
			});
	}
}
