import AuthCard from './AuthCard'
import FormInput from './FormInput'
import SubmitButton from './SubmitButton'

export default function AuthForm({
	mode,
	form,
	error,
	loading,
	onChange,
	onSubmit,
	onToggle,
}) {
	return (
		<AuthCard
			title={mode === 'login' ? 'Login' : 'Create Account'}
			subtitle={
				mode === 'login' ? 'Sign in to your account' : 'Create a new account'
			}
		>
			<form onSubmit={onSubmit} className='mt-8 space-y-5'>
				{mode === 'register' && (
					<FormInput
						label='Name'
						name='name'
						value={form.name}
						onChange={onChange}
						placeholder='John Doe'
					/>
				)}

				<FormInput
					label='Email'
					type='email'
					name='email'
					value={form.email}
					onChange={onChange}
					placeholder='example@gmail.com'
				/>

				<FormInput
					label='Password'
					type='password'
					name='password'
					value={form.password}
					onChange={onChange}
					placeholder='********'
				/>

				{error && (
					<div className='rounded-lg bg-red-100 p-3 text-red-600 text-sm'>
						{error}
					</div>
				)}

				<SubmitButton loading={loading}>
					{mode === 'login' ? 'Login' : 'Register'}
				</SubmitButton>
			</form>

			<div className='mt-6 text-center text-sm'>
				{mode === 'login' ? (
					<>
						Don't have an account?{' '}
						<button
							type='button'
							onClick={onToggle}
							className='font-semibold text-indigo-600'
						>
							Register
						</button>
					</>
				) : (
					<>
						Already have an account?{' '}
						<button
							type='button'
							onClick={onToggle}
							className='font-semibold text-indigo-600'
						>
							Login
						</button>
					</>
				)}
			</div>
		</AuthCard>
	)
}
