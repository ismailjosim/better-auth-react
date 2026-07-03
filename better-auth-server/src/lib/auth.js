import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { client } from './mongodb'
import { envVar } from './env'

export const auth = betterAuth({
	database: mongodbAdapter(client.db()),
	baseURL: envVar.BASE_URL,
	secret: envVar.BETTER_AUTH_SECRET,

	trustedOrigins: ['http://localhost:5173'],

	emailAndPassword: {
		enabled: true,
	},
})
