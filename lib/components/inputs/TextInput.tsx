import styled from 'styled-components';

const StyledInput = styled.input`
	font-size: 14px;
	line-height: 14px;
	padding: 8px;

	border-radius: 0.125rem;
	border: 1px solid #c3c3c3;

	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};
`;

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({ ...props }: TextInputProps) {
	return <StyledInput {...props} />;
}
