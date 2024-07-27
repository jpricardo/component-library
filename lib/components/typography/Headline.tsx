import { memo } from 'react';
import styled from 'styled-components';

type StyledHeadlineProps = {
	$variant: HeadlineProps['variant'];
	$size: HeadlineProps['size'];
};

const StyledHeadline = styled.span<StyledHeadlineProps>`
	font-family: sans-serif;

	color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primary;
		if ($variant === 'danger') return theme.colors.error;

		return 'inherit';
	}};

	font-size: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '1rem';
			case 'medium':
				return '2rem';
			case 'large':
				return '4rem';
		}
	}};

	line-height: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.75rem';
			case 'medium':
				return '2.25rem';
			case 'large':
				return '4.25rem';
		}
	}};

	font-weight: 400;
`;

type HeadlineProps = React.HTMLAttributes<HTMLSpanElement> & {
	variant?: 'default' | 'primary' | 'danger';
	size?: 'small' | 'medium' | 'large';
};
function Headline({ variant = 'default', size = 'medium', ...props }: HeadlineProps) {
	return <StyledHeadline $variant={variant} $size={size} {...props} />;
}

export default memo(Headline);
