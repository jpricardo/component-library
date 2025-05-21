import { HtmlAttributes } from '..';

export type SpinProps = HtmlAttributes<HTMLDivElement> & {
	size?: 'sm' | 'md' | 'lg';
};

export function Spin({ className = '', size = 'md', ...props }: SpinProps) {
	const borderColorLight = 'neutral-200';
	const borderColorDark = 'neutral-800';
	const borders = `rounded-[50%] border-t border-s border-${borderColorLight} dark:border-${borderColorDark}`;

	const sizes: Record<'sm' | 'md' | 'lg', string> = {
		sm: 'h-4 w-4',
		md: 'h-5 w-5',
		lg: 'h-12 w-12',
	};

	return (
		<div className={`inline-block animate-spin bg-transparent ${sizes[size]} ${borders} ${className}`} {...props} />
	);
}
