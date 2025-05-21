import { HtmlAttributes } from '..';

export type ContainerProps = HtmlAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
	return (
		<div
			className={`rounded-sm border border-solid border-neutral-300 bg-neutral-100 p-4 font-sans text-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 ${className}`}
			{...props}
		/>
	);
}
