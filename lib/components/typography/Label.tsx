import { memo } from 'react';
import styled from 'styled-components';

type StyledLabelProps = {
	$variant: LabelProps['variant'];
	$size: LabelProps['size'];
};

const StyledLabel = styled.label<StyledLabelProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily};

	color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primary;
		if ($variant === 'danger') return theme.colors.error;

		return 'inherit';
	}};

	font-size: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.5rem';
			case 'medium':
				return '0.85rem';
			case 'large':
				return '1rem';
		}
	}};

	line-height: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.85rem';
			case 'medium':
				return '1rem';
			case 'large':
				return '1.25rem';
		}
	}};

	font-weight: 400;
`;

type LabelProps = React.HTMLAttributes<HTMLLabelElement> & {
	htmlFor?: string;
	variant?: 'default' | 'primary' | 'danger';
	size?: 'small' | 'medium' | 'large';
};
function Label({ variant = 'default', size = 'medium', ...props }: LabelProps) {
	return <StyledLabel $variant={variant} $size={size} {...props} />;
}

export default memo(Label);
