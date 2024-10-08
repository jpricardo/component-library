import styled from 'styled-components';

import { ContainerVariant, HtmlAttributes } from '..';
import { Theme } from '../../helpers';

type StyledContainerProps = {
	$variant: ContainerProps['variant'];
	$shadow: ContainerProps['shadow'];
};

const StyledContainer = styled.div<StyledContainerProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily};

	padding: 1rem;
	border-radius: 0.25rem;

	color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.onPrimaryContainer;
		if ($variant === 'secondary') return theme.colors.onSecondaryContainer;
		if ($variant === 'danger') return theme.colors.onErrorContainer;

		return theme.colors.onContainer;
	}};
	background-color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primaryContainer;
		if ($variant === 'secondary') return theme.colors.secondaryContainer;
		if ($variant === 'danger') return theme.colors.errorContainer;
		if ($variant === 'lowest') return theme.colors.containerLowest;
		if ($variant === 'low') return theme.colors.containerLow;
		if ($variant === 'high') return theme.colors.containerHigh;
		if ($variant === 'highest') return theme.colors.containerHighest;

		return theme.colors.container;
	}};

	box-shadow: ${({ $shadow, theme }) => {
		if ($shadow) return theme.shadows[$shadow];
	}};
`;

export type ContainerProps = HtmlAttributes<HTMLDivElement> & {
	variant?: ContainerVariant | 'lowest' | 'low' | 'high' | 'highest';
	shadow?: keyof Theme['shadows'];
};

export function Container({ variant = 'default', shadow, ...props }: ContainerProps) {
	return <StyledContainer $variant={variant} $shadow={shadow} {...props} />;
}
