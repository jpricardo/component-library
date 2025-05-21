import { memo } from 'react';

import { HtmlAttributes, TypographySize, TypographyVariant } from '..';

type HeadlineProps = HtmlAttributes<HTMLHeadingElement> & {
	variant?: TypographyVariant;
	size?: TypographySize;
};
function Headline({ className = '', variant = 'default', size = 'medium', ...props }: HeadlineProps) {
	const sizes: Record<TypographySize, string> = {
		small: 'text-2xl',
		medium: 'text-3xl',
		large: 'text-4xl',
	};

	const variants: Record<TypographyVariant, string> = {
		default: 'text-inherit',
		primary: 'text-sky-900 dark:text-sky-400',
		danger: 'text-red-900 dark:text-red-400',
	};

	return <h1 className={`font-sans font-medium ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}

export default memo(Headline);
