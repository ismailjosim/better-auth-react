import { useState } from 'react'
import AuthForm from './components/auth/AuthForm'
import UserProfile from './components/auth/UserProfile'
import useAuth from './hooks/useAuth'

export default function App() {
	const { user, login, register, logout, loading, initialLoading, error } =
		useAuth()

	const [mode, setMode] = useState('login')

	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (mode === 'login') {
			await login({
				email: form.email,
				password: form.password,
			})
		} else {
			await register({
				name: form.name,
				email: form.email,
				password: form.password,
			})
		}
	}

	const handleToggle = () => {
		setMode((prev) => (prev === 'login' ? 'register' : 'login'))

		setForm({
			name: '',
			email: '',
			password: '',
		})
	}

	if (initialLoading) {
		return (
			<div className='flex min-h-screen items-center justify-center'>
				<p className='text-lg font-medium'>Loading...</p>
			</div>
		)
	}

	return (
		<div className='flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-100 via-white to-sky-100 p-6'>
			{user ? (
				<UserProfile user={user} onLogout={logout} />
			) : (
				<AuthForm
					mode={mode}
					form={form}
					error={error}
					loading={loading}
					onChange={handleChange}
					onSubmit={handleSubmit}
					onToggle={handleToggle}
				/>
			)}
		</div>
	)
}
