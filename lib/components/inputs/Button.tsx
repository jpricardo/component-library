import styled from 'styled-components';

import { Flex } from '../containers/Flex';
import { Spin } from '../feedback/Spin';

type VariantType = 'default' | 'primary' | 'danger' | 'text';

type StyledButtonProps = { $variant: VariantType; $loading?: boolean };

const StyledButton = styled.button<StyledButtonProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily};

	font-size: 14px;
	line-height: 14px;
	padding: 0.5rem 1rem;
	cursor: ${({ $loading, disabled }): React.CSSProperties['cursor'] => {
		if ($loading) return 'progress';
		if (disabled) return 'not-allowed';
		return 'pointer';
	}};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

	border-radius: 0.125rem;
	border-style: solid;
	border-width: 1px;
	border-color: ${({ $variant, theme }): React.CSSProperties['borderColor'] => {
		switch ($variant) {
			case 'default':
				return theme.colors.outline;
			case 'primary':
				return theme.colors.primary;
			case 'danger':
				return theme.colors.error;
			case 'text':
				return 'transparent';
		}
	}};

	background-color: ${({ $variant, theme }): React.CSSProperties['backgroundColor'] => {
		switch ($variant) {
			case 'default':
				return 'transparent';
			case 'primary':
				return theme.colors.primary;
			case 'danger':
				return 'transparent';
			case 'text':
				return 'transparent';
		}
	}};

	color: ${({ $variant, theme }): React.CSSProperties['color'] => {
		switch ($variant) {
			case 'default':
				return theme.colors.onSurface;
			case 'primary':
				return theme.colors.onPrimary;
			case 'danger':
				return theme.colors.error;
			case 'text':
				return 'inherit';
		}
	}};

	&:hover {
		box-shadow: ${({ $variant, theme }) => ($variant === 'text' ? 0 : theme.shadows.sm)};
		background-color: ${({ $variant, theme }) => {
			if ($variant === 'danger') return theme.colors.error;
		}};
		color: ${({ $variant, theme }) => {
			if ($variant === 'danger') return theme.colors.onError;
		}};
		border-color: ${({ $variant, theme }) => {
			if ($variant === 'default') return theme.colors.onSurface;
		}};
	}
`;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: VariantType;
	loading?: boolean;
};

export function Button({ variant = 'default', loading, disabled, children, ...props }: ButtonProps) {
	return (
		<StyledButton $variant={variant} $loading={loading} disabled={disabled || loading} {...props}>
			<Flex gap='0.5rem' justify='space-around' align='center'>
				{children}

				{loading && <Spin size='sm' style={{ borderColor: 'inherit' }} />}
			</Flex>
		</StyledButton>
	);
}
