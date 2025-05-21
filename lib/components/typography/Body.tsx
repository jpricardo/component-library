import { memo } from 'react';

import { HtmlAttributes, TypographySize, TypographyVariant } from '..';

type BodyProps = HtmlAttributes<HTMLSpanElement> & {
	variant?: TypographyVariant;
	size?: TypographySize;
};
function Body({ className = '', variant = 'default', size = 'medium', ...props }: BodyProps) {
	const sizes: Record<TypographySize, string> = {
		small: 'text-sm',
		medium: 'text-base',
		large: 'text-lg',
	};

	const variants: Record<TypographyVariant, string> = {
		default: 'text-inherit',
		primary: 'text-sky-900 dark:text-sky-400',
		danger: 'text-red-900 dark:text-red-400',
	};

	return <span className={`font-sans ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}

export default memo(Body);
