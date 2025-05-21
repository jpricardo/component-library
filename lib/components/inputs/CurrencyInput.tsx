import LibInput from 'react-currency-input-field';

// Readonly inputs are not supported
export type CurrencyInputProps = Omit<React.ComponentProps<typeof LibInput>, 'readOnly'>;

export function CurrencyInput({ className = '', ...props }: CurrencyInputProps) {
	return (
		<LibInput
			className={`rounded-sm border border-solid border-neutral-300 bg-neutral-100 p-2 font-sans text-sm text-neutral-950 placeholder:opacity-75 focus:brightness-110 disabled:cursor-not-allowed disabled:opacity-75 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 ${className}`}
			{...props}
		/>
	);
}
