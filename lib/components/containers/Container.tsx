import styled from 'styled-components';

import { Theme } from '../../themes';

type StyledContainerProps = {
	$variant: ContainerProps['variant'];
	$shadow: ContainerProps['shadow'];
};

const StyledContainer = styled.div<StyledContainerProps>`
	padding: 1rem;
	border-radius: 0.25rem;

	color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.onPrimaryContainer;
		if ($variant === 'danger') return theme.colors.onErrorContainer;

		return theme.colors.onSurface;
	}};
	background-color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primaryContainer;
		if ($variant === 'danger') return theme.colors.errorContainer;

		return theme.colors.surface;
	}};

	box-shadow: ${({ $shadow, theme }) => {
		if ($shadow) return theme.shadows[$shadow];
	}};
`;

export type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	variant?: 'default' | 'primary' | 'danger';
	shadow?: keyof Theme['shadows'];
};

export function Container({ variant = 'default', shadow, ...props }: ContainerProps) {
	return <StyledContainer $variant={variant} $shadow={shadow} {...props} />;
}
