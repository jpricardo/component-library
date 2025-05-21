import { HtmlAttributes } from '..';

export type FlexProps = HtmlAttributes<HTMLDivElement> & {
	gap?: number;
	justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | 'baseline' | 'normal';
	align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
	vertical?: boolean;
};

export function Flex({
	className = '',
	gap = 2,
	justify = 'start',
	align = 'baseline',
	vertical,
	...props
}: FlexProps) {
	return (
		<div
			className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-${gap} justify-${justify} items-${align} ${className}`}
			{...props}
		/>
	);
}
