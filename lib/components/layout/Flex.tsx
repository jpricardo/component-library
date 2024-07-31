import styled from 'styled-components';

type StyledFlexProps = {
	$gap: FlexProps['gap'];
	$justify: FlexProps['justify'];
	$align: FlexProps['align'];
	$vertical: FlexProps['vertical'];
};

const StyledFlex = styled.div<StyledFlexProps>`
	display: flex;
	flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
	gap: ${({ $gap }) => $gap};

	justify-content: ${({ $justify }) => $justify};
	align-items: ${({ $align }) => $align};
`;

export type FlexProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	gap?: string;
	justify?: React.CSSProperties['justifyContent'];
	align?: React.CSSProperties['alignItems'];
	vertical?: boolean;
};

export function Flex({ gap, justify, align, vertical, ...props }: FlexProps) {
	return <StyledFlex $gap={gap} $justify={justify} $align={align} $vertical={vertical} {...props} />;
}
