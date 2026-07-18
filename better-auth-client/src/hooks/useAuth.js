import { useEffect, useState } from 'react'
import { authClient } from '../lib/auth-client'

export default function useAuth() {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(false)
	const [initialLoading, setInitialLoading] = useState(true)
	const [error, setError] = useState('')

	// Load current session
	const getSession = async () => {
		try {
			const { data, error } = await authClient.getSession()

			if (error) {
				setError(error.message)
				return null
			}

			setUser(data?.user ?? null)
			return data?.user
		} catch (err) {
			setError(err.message)
			return null
		} finally {
			setInitialLoading(false)
		}
	}

	// Register
	const register = async ({ name, email, password }) => {
		setLoading(true)
		setError('')

		try {
			const { data, error } = await authClient.signUp.email({
				name,
				email,
				password,
			})

			if (error) {
				setError(error.message)
				return { success: false, error }
			}

			setUser(data?.user ?? null)

			return {
				success: true,
				data,
			}
		} finally {
			setLoading(false)
		}
	}

	// Login
	const login = async ({ email, password }) => {
		setLoading(true)
		setError('')

		try {
			const { data, error } = await authClient.signIn.email({
				email,
				password,
			})

			if (error) {
				setError(error.message)
				return { success: false, error }
			}

			setUser(data?.user ?? null)

			return {
				success: true,
				data,
			}
		} finally {
			setLoading(false)
		}
	}

	// Logout
	const logout = async () => {
		setLoading(true)

		try {
			await authClient.signOut()
			setUser(null)
		} finally {
			setLoading(false)
		}
	}

	// Load session on app startup
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		getSession()
	}, [])

	return {
		user,
		error,
		loading,
		initialLoading,
		login,
		register,
		logout,
		getSession,
	}
}
