import styled from 'styled-components';

import { Theme } from '../../themes';

const StyledSurface = styled.div<{ $shadow: SurfaceProps['shadow'] }>`
	padding: 2rem;

	color: ${({ theme }) => theme.colors.onSurface};
	background-color: ${({ theme }) => theme.colors.surface};

	box-shadow: ${({ $shadow, theme }) => {
		if ($shadow) return theme.shadows[$shadow];
	}};
`;

export type SurfaceProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	shadow?: keyof Theme['shadows'];
};

export function Surface({ shadow, ...props }: SurfaceProps) {
	return <StyledSurface $shadow={shadow} {...props} />;
}
