import styled from 'styled-components';

const StyledDivider = styled.div<{ $vertical: DividerProps['vertical'] }>`
	height: ${({ $vertical }) => ($vertical ? '100%' : '1px')};
	width: ${({ $vertical }) => ($vertical ? '1px' : '100%')};

	border-top: ${({ $vertical, theme }) => ($vertical ? 0 : `1px solid ${theme.colors.outline}`)};
	border-left: ${({ $vertical, theme }) => ($vertical ? `1px solid ${theme.colors.outline}` : 0)};
`;

export type DividerProps = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'children'> & {
	vertical?: boolean;
};

export function Divider({ vertical, ...props }: DividerProps) {
	return <StyledDivider $vertical={vertical} {...props} />;
}
