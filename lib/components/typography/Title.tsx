import { memo } from 'react';
import styled from 'styled-components';

type StyledTitleProps = {
	$variant: TitleProps['variant'];
	$size: TitleProps['size'];
};

const StyledTitle = styled.span<StyledTitleProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily};

	color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primary;
		if ($variant === 'danger') return theme.colors.error;

		return 'inherit';
	}};

	font-size: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '0.75rem';
			case 'medium':
				return '1rem';
			case 'large':
				return '2rem';
		}
	}};

	line-height: ${({ $size }) => {
		switch ($size) {
			case 'small':
				return '1rem';
			case 'medium':
				return '1.25rem';
			case 'large':
				return '2.25rem';
		}
	}};

	font-weight: 500;
`;

type TitleProps = React.HTMLAttributes<HTMLSpanElement> & {
	variant?: 'default' | 'primary' | 'danger';
	size?: 'small' | 'medium' | 'large';
};
function Title({ variant = 'default', size = 'medium', ...props }: TitleProps) {
	return <StyledTitle $variant={variant} $size={size} {...props} />;
}

export default memo(Title);
