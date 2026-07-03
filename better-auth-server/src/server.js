import express from 'express'
import cors from 'cors'
import { auth } from './lib/auth'
import { toNodeHandler } from 'better-auth/node'
import { client } from './lib/mongodb'
import { envVar } from './lib/env'

const app = express()
await client.connect()

app.use(express.json())

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	}),
)

app.all('/api/auth/*path', toNodeHandler(auth))

app.get('/', (req, res) => {
	res.send({
		message: 'server running successfully',
	})
})

app.listen(envVar.PORT, () => {
	console.log(`Server running On PORT ${envVar.PORT}`)
})
