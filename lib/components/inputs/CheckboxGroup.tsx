import { Flex } from '../layout';
import { Typography } from '../typography';

type OptionType = string | number;

export type CheckboxGroupProps<T extends OptionType> = {
	name: string;
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	disabled?: boolean;
	options?: T[];
	defaultValue?: T[];
	value?: T[];
	onChange?: (value: T[]) => void;
};

export function CheckboxGroup<T extends OptionType>({
	name,
	className = '',
	style,
	disabled,
	options = [],
	defaultValue,
	value,
	onChange,
	...props
}: CheckboxGroupProps<T>) {
	const addOptionToValue = (option: T, value?: T[]) => {
		return [...(value || []), option];
	};

	const removeOptionFromValue = (option: T, value?: T[]) => {
		return value?.filter((item) => option !== item) || [];
	};

	return (
		<Flex
			className={`${disabled ? 'opacity-75' : 'opacity-100'} ${className}`}
			vertical
			style={{ gap: '.125rem', ...style }}
			{...props}
		>
			{options.map((option, index) => {
				const checkboxName = `${name}-checkbox-item-${index}`;

				return (
					<Flex key={checkboxName} style={{ alignItems: 'center', gap: '.25rem' }}>
						<input
							className='accent-sky-900 dark:accent-sky-400 m-0 cursor-pointer'
							type='checkbox'
							id={checkboxName}
							name={checkboxName}
							checked={value?.includes(option)}
							defaultChecked={defaultValue?.includes(option)}
							onChange={(e) => {
								if (e.target.checked) return onChange?.(addOptionToValue(option, value));
								return onChange?.(removeOptionFromValue(option, value));
							}}
							disabled={disabled}
						/>

						<Typography.Label className='select-none cursor-pointer' htmlFor={checkboxName}>
							{option}
						</Typography.Label>
					</Flex>
				);
			})}
		</Flex>
	);
}
