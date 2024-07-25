import { Typography } from '../typography';

type OptionType = string | number;

export type CheckboxGroupProps<T extends OptionType> = {
	name: string;

	options: T[];
	value?: T[];
	onChange?: (value: T[]) => void;
};

export function CheckboxGroup<T extends OptionType>({ name, options, value, onChange }: CheckboxGroupProps<T>) {
	const addOptionToValue = (option: T, value?: T[]) => {
		return [...(value || []), option];
	};

	const removeOptionFromValue = (option: T, value?: T[]) => {
		return value?.filter((item) => option !== item) || [];
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{options.map((option, index) => {
				const checkboxName = `${name}-checkbox-item-${index}`;
				return (
					<div
						key={checkboxName}
						style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem', alignItems: 'center' }}
					>
						<input
							type='checkbox'
							id={checkboxName}
							name={checkboxName}
							checked={value?.includes(option)}
							onChange={(e) => {
								if (e.target.checked) return onChange?.(addOptionToValue(option, value));
								return onChange?.(removeOptionFromValue(option, value));
							}}
						/>

						<Typography.Label htmlFor={checkboxName}>{option}</Typography.Label>
					</div>
				);
			})}
		</div>
	);
}
