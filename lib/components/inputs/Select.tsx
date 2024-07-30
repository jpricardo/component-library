import styled from 'styled-components';

const StyledSelect = styled.select`
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

	font-family: ${({ theme }) => theme.typography.fontFamily};

	color: ${({ theme }) => theme.colors.onContainer};
	background-color: ${({ theme }) => theme.colors.containerLowest};

	font-size: 14px;
	line-height: 14px;
	padding: 8px;

	border-radius: 0.125rem;
	border: 1px solid ${({ theme }) => theme.colors.outline};

	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};

	&::placeholder {
		color: inherit;
		opacity: 0.25;
	}
`;

type ValueType = string | number;
type OptionObjectType = { label: React.ReactNode; value: ValueType };
type OptionType = ValueType | OptionObjectType;

type OmitProps = 'children' | 'value' | 'onChange';
export type SelectProps<T extends OptionType> = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, OmitProps> & {
	options?: T[];

	value?: T extends OptionObjectType ? ValueType : T;
	onChange?: (value: T) => void;
};

export function Select<T extends OptionType>({ options = [], value, onChange, ...props }: SelectProps<T>) {
	return (
		<StyledSelect value={value} onChange={(e) => onChange?.(e.target.value as T)} {...props}>
			{options.map((item, index) => {
				return (
					<option key={index} value={typeof item === 'object' ? item.value : item}>
						{typeof item === 'object' ? item.label : item}
					</option>
				);
			})}
		</StyledSelect>
	);
}
