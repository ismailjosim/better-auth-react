export default function FormInput({
	label,
	name,
	type = 'text',
	value,
	onChange,
	placeholder,
	required = true,
}) {
	return (
		<div>
			<label className='mb-2 block text-sm font-medium'>{label}</label>

			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				className='w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
			/>
		</div>
	)
}
