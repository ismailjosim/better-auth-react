import dotenv from 'dotenv'
dotenv.config()

export const envVar = {
	MONGODB_URI: process.env.MONGODB_URI,
	PORT: process.env.PORT,
	BASE_URL: process.env.BASE_URL,
	BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
}
