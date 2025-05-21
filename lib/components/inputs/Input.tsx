export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = '', ...props }: InputProps) {
	return (
		<input
			className={`font-sans p-2 text-sm bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-neutral-100 rounded-sm border border-solid border-neutral-300 dark:border-neutral-700 focus:brightness-110 disabled:cursor-not-allowed disabled:opacity-75 placeholder:opacity-75 ${className}`}
			{...props}
		/>
	);
}
