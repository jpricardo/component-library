import { memo } from 'react';
import styled from 'styled-components';

import { HtmlAttributes, TypographySize, TypographyVariant } from '..';

type StyledFootnoteProps = {
	$variant: FootnoteProps['variant'];
	$size: FootnoteProps['size'];
};

const StyledFootnote = styled.span<StyledFootnoteProps>`
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
				return '0.75rem';
			case 'large':
				return '1rem';
		}
	}};

	line-height: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.75rem';
			case 'medium':
				return '1rem';
			case 'large':
				return '1.25rem';
		}
	}};

	font-weight: 400;
	opacity: 0.85;
`;

type FootnoteProps = HtmlAttributes<HTMLSpanElement> & {
	variant?: TypographyVariant;
	size?: TypographySize;
};
function Footnote({ variant = 'default', size = 'medium', ...props }: FootnoteProps) {
	return <StyledFootnote $variant={variant} $size={size} {...props} />;
}

export default memo(Footnote);
