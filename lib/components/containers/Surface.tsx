import styled from 'styled-components';

import { HtmlAttributes } from '..';
import { Theme } from '../../helpers';

type StyledSurfaceProps = {
	$variant: SurfaceProps['variant'];
	$shadow: SurfaceProps['shadow'];
};

const StyledSurface = styled.div<StyledSurfaceProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily};

	padding: 2rem;

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

export type SurfaceProps = HtmlAttributes<HTMLDivElement> & {
	variant?: 'default' | 'primary' | 'danger';
	shadow?: keyof Theme['shadows'];
};

export function Surface({ variant = 'default', shadow, ...props }: SurfaceProps) {
	return <StyledSurface $variant={variant} $shadow={shadow} {...props} />;
}
