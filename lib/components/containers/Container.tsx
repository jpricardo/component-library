import { HtmlAttributes } from '..';

export type ContainerProps = HtmlAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
	return <div className={`bg-container text-container bordered p-4 ${className}`} {...props} />;
}
