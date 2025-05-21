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
			className={`font-sans p-2 text-sm bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-neutral-100 rounded-sm border border-solid border-neutral-300 dark:border-neutral-700 focus:brightness-110 disabled:cursor-not-allowed disabled:opacity-75 placeholder:opacity-75 ${className}`}
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
