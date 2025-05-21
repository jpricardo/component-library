import { HtmlAttributes } from '..';

export type DividerProps = Omit<HtmlAttributes<HTMLDivElement>, 'children'> & {
	vertical?: boolean;
};

export function Divider({ className = '', vertical, ...props }: DividerProps) {
	const variants = {
		default: 'w-full h-px border-t',
		vertical: 'w-px h-full border-l',
	};

	return (
		<div
			className={`border-solid border-neutral-300 dark:border-neutral-700 ${variants[vertical ? 'vertical' : 'default']} ${className}`}
			{...props}
		/>
	);
}
