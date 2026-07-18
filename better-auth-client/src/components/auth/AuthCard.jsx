export default function AuthCard({ title, subtitle, children }) {
	return (
		<div className='w-full max-w-md rounded-2xl bg-white p-8 shadow-xl'>
			<h1 className='text-center text-3xl font-bold'>{title}</h1>

			<p className='mt-2 text-center text-gray-500'>{subtitle}</p>

			{children}
		</div>
	)
}
