import styled from 'styled-components';

const StyledInput = styled.input`
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

	font-family: ${({ theme }) => theme.typography.fontFamily};

	color: ${({ theme }) => theme.colors.onContainer};
	background-color: ${({ theme }) => theme.colors.containerLow};

	font-size: 14px;
	line-height: 14px;
	padding: 8px;

	border-radius: 0.125rem;
	border: 1px solid ${({ theme }) => theme.colors.outline};

	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

	&:focus {
		filter: brightness(1.1);
	}

	&::placeholder {
		color: inherit;
		opacity: 0.25;
	}
`;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
	return <StyledInput {...props} />;
}
