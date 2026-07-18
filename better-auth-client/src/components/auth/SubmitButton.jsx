export default function SubmitButton({ loading, children }) {
	return (
		<button
			type='submit'
			disabled={loading}
			className='w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50'
		>
			{loading ? 'Please wait...' : children}
		</button>
	)
}
