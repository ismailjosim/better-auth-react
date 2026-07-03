import { useEffect, useState } from 'react'
import { authClient } from './lib/auth-client'

const register = async () => {
	const { data, error } = await authClient.signUp.email({
		name: 'Jasim',
		email: 'jasim@gmail.com',
		password: '12345678',
	})

	return { data, error }
}

const login = async () => {
	const { data, error } = await authClient.signIn.email({
		email: 'jasim@gmail.com',
		password: '12345678',
	})

	if (error) {
		console.log(error.message)
		return
	}

	return { data, error }
}
const getUser = async () => {
	const { data, error } = await authClient.getSession()

	if (error) {
		console.log(error)
		return null
	}

	return data
}

const App = () => {
	const [user, setUser] = useState(null)
	console.log(user)
	const handleRegister = async () => {
		const res = await register()
		console.log(res)
	}
	const handleLogin = async () => {
		const res = await login()
		console.log(res)
		setUser(res.data.user)
	}
	const handleLogout = async () => {
		await authClient.signOut()
		setUser(null)
	}

	useEffect(() => {
		const loadUser = async () => {
			const session = await getUser()

			if (session) {
				setUser(session.user)
			}
		}

		loadUser()
	}, [])

	return (
		<div
			style={{
				fontFamily: 'Arial, sans-serif',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '20px',
				padding: '40px',
				minHeight: '100vh',
				background: '#f5f5f5',
			}}
		>
			<div style={{ display: 'flex', gap: '10px' }}>
				<button onClick={handleRegister}>Register</button>
				<button onClick={handleLogin}>Login</button>
				<button onClick={handleLogout}>Logout</button>
			</div>

			{user ? (
				<div
					style={{
						width: '350px',
						background: '#fff',
						borderRadius: '12px',
						padding: '24px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						textAlign: 'center',
					}}
				>
					<div
						style={{
							width: '80px',
							height: '80px',
							borderRadius: '50%',
							background: '#4f46e5',
							color: '#fff',
							fontSize: '32px',
							fontWeight: 'bold',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							margin: '0 auto 20px',
						}}
					>
						{user.name.charAt(0).toUpperCase()}
					</div>

					<h2 style={{ margin: '0 0 10px' }}>{user.name}</h2>

					<p style={{ color: '#666', marginBottom: '20px' }}>{user.email}</p>

					<div
						style={{
							textAlign: 'left',
							borderTop: '1px solid #eee',
							paddingTop: '15px',
						}}
					>
						<p>
							<strong>ID:</strong> {user.id}
						</p>

						<p>
							<strong>Email Verified:</strong>{' '}
							{user.emailVerified ? '✅ Yes' : '❌ No'}
						</p>

						<p>
							<strong>Created:</strong>{' '}
							{new Date(user.createdAt).toLocaleString()}
						</p>

						<p>
							<strong>Updated:</strong>{' '}
							{new Date(user.updatedAt).toLocaleString()}
						</p>
					</div>
				</div>
			) : (
				<div
					style={{
						padding: '40px',
						background: '#fff',
						borderRadius: '12px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						textAlign: 'center',
						width: '350px',
					}}
				>
					<h2>Welcome 👋</h2>
					<p>Please login to view your profile.</p>
				</div>
			)}
		</div>
	)
}

export default App
