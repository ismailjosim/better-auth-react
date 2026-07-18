export default function UserProfile({ user, onLogout }) {
	return (
		<div className='w-full max-w-md rounded-2xl bg-white p-8 shadow-xl'>
			<div className='flex flex-col items-center'>
				<div className='flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold text-white'>
					{user.name.charAt(0).toUpperCase()}
				</div>

				<h2 className='mt-4 text-2xl font-bold'>{user.name}</h2>

				<p className='text-gray-500'>{user.email}</p>
			</div>

			<div className='mt-6 space-y-2 border-t pt-6 text-sm'>
				<p>
					<strong>ID:</strong> {user.id}
				</p>

				<p>
					<strong>Email Verified:</strong>{' '}
					{user.emailVerified ? '✅ Yes' : '❌ No'}
				</p>

				<p>
					<strong>Created:</strong> {new Date(user.createdAt).toLocaleString()}
				</p>
			</div>

			<button
				onClick={onLogout}
				className='mt-8 w-full rounded-lg bg-red-500 py-3 font-semibold text-white hover:bg-red-600'
			>
				Logout
			</button>
		</div>
	)
}
