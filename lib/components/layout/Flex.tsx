import { HtmlAttributes } from '..';

export type FlexProps = HtmlAttributes<HTMLDivElement> & {
	vertical?: boolean;
};

export function Flex({ className = '', vertical, ...props }: FlexProps) {
	const orientation = vertical ? 'flex-col' : 'flex-row';

	return <div className={`flex ${orientation} ${className}`} {...props} />;
}
