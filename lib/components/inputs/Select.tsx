type ValueType = string | number;
type OptionObjectType = { label: React.ReactNode; value: ValueType };
type OptionType = ValueType | OptionObjectType;

type OmitProps = 'children' | 'value' | 'onChange';
export type SelectProps<T extends OptionType> = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, OmitProps> & {
	options?: T[];

	value?: T extends OptionObjectType ? ValueType : T;
	onChange?: (value: T) => void;
};

export function Select<T extends OptionType>({
	className = '',
	options = [],
	value,
	onChange,
	...props
}: SelectProps<T>) {
	return (
		<select
			className={`rounded-sm border border-solid border-neutral-300 bg-neutral-100 p-2 font-sans text-sm text-neutral-950 placeholder:opacity-75 focus:brightness-110 disabled:cursor-not-allowed disabled:opacity-75 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 ${className}`}
			value={value}
			onChange={(e) => onChange?.(e.target.value as T)}
			{...props}
		>
			{options.map((item, index) => {
				const optionLabel = (typeof item === 'object' ? item.label : item) as React.ReactNode;
				const optionValue = (typeof item === 'object' ? item.value : item) as ValueType;

				return <option key={index} value={optionValue} children={optionLabel} />;
			})}
		</select>
	);
}
