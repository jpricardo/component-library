import LibInput from 'react-currency-input-field';

// Readonly inputs are not supported
export type CurrencyInputProps = Omit<React.ComponentProps<typeof LibInput>, 'readOnly'>;

export function CurrencyInput({ className = '', ...props }: CurrencyInputProps) {
	return (
		<LibInput
			className={`font-sans p-2 text-sm bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-neutral-100 rounded-sm border border-solid border-neutral-300 dark:border-neutral-700 focus:brightness-110 disabled:cursor-not-allowed disabled:opacity-75 placeholder:opacity-75 ${className}`}
			{...props}
		/>
	);
}
