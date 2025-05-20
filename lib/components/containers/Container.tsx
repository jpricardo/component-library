import { HtmlAttributes } from '..';

export type ContainerProps = HtmlAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
	return (
		<div
			className={`font-sans p-4 rounded-sm text-neutral-950 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 border border-solid border-neutral-300 dark:border-neutral-700 ${className}`}
			{...props}
		/>
	);
}
