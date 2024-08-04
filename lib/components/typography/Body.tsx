import { memo } from 'react';
import styled from 'styled-components';

import { HtmlAttributes, TypographySize, TypographyVariant } from '..';

type StyledBodyProps = {
	$variant: BodyProps['variant'];
	$size: BodyProps['size'];
};

const StyledBody = styled.span<StyledBodyProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily};

	color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primary;
		if ($variant === 'secondary') return theme.colors.secondary;
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

type BodyProps = HtmlAttributes<HTMLSpanElement> & {
	variant?: TypographyVariant;
	size?: TypographySize;
};
function Body({ variant = 'default', size = 'medium', ...props }: BodyProps) {
	return <StyledBody $variant={variant} $size={size} {...props} />;
}

export default memo(Body);
