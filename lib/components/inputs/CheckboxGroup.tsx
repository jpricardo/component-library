import styled from 'styled-components';

import { Flex } from '../layout';
import { Typography } from '../typography';

const StyledInput = styled.input`
	accent-color: ${({ theme }) => theme.colors.primary};
	margin: 0;
`;

const StyledLabel = styled(Typography.Label)<{ $disabled?: boolean }>`
	opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

type OptionType = string | number;

export type CheckboxGroupProps<T extends OptionType> = {
	name: string;

	disabled?: boolean;
	options?: T[];
	defaultValue?: T[];
	value?: T[];
	onChange?: (value: T[]) => void;
};

export function CheckboxGroup<T extends OptionType>({
	name,
	disabled,
	options = [],
	defaultValue,
	value,
	onChange,
}: CheckboxGroupProps<T>) {
	const addOptionToValue = (option: T, value?: T[]) => {
		return [...(value || []), option];
	};

	const removeOptionFromValue = (option: T, value?: T[]) => {
		return value?.filter((item) => option !== item) || [];
	};

	return (
		<Flex gap='0.125rem' vertical>
			{options.map((option, index) => {
				const checkboxName = `${name}-checkbox-item-${index}`;

				return (
					<Flex key={checkboxName} gap='0.25rem' align='center'>
						<StyledInput
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

						<StyledLabel htmlFor={checkboxName} $disabled={disabled}>
							{option}
						</StyledLabel>
					</Flex>
				);
			})}
		</Flex>
	);
}
