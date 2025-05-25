import { HtmlAttributes } from '..';

export type SurfaceProps = HtmlAttributes<HTMLDivElement>;

export function Surface({ className = '', ...props }: SurfaceProps) {
	return <div className={`bg-surface text-surface p-4 ${className}`} {...props} />;
}
