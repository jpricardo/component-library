import { HtmlAttributes } from '..';

export type SurfaceProps = HtmlAttributes<HTMLDivElement>;

export function Surface({ className = '', ...props }: SurfaceProps) {
	return (
		<div
			className={`rounded-sm bg-white p-8 font-sans text-neutral-950 dark:bg-neutral-800 dark:text-neutral-100 ${className}`}
			{...props}
		/>
	);
}
