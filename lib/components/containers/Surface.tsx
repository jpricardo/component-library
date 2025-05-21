import { HtmlAttributes } from '..';

export type SurfaceProps = HtmlAttributes<HTMLDivElement>;

export function Surface({ className = '', ...props }: SurfaceProps) {
	return (
		<div
			className={`font-sans p-8 rounded-sm text-neutral-950 dark:text-neutral-100 bg-white dark:bg-neutral-800 ${className}`}
			{...props}
		/>
	);
}
