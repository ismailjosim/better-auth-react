import { MongoClient } from 'mongodb'
import { envVar } from './env'
const uri = envVar.MONGODB_URI

export const client = new MongoClient(uri)

export async function connectDB() {
	if (!client.topology?.isConnected()) {
		const res = await client.connect()
		console.log({ response: res })
	}

	return client.db('BetterAuthDB')
}
