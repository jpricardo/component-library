import { memo } from 'react';

import { HtmlAttributes, TypographySize, TypographyVariant } from '..';

type TitleProps = HtmlAttributes<HTMLHeadingElement> & {
	variant?: TypographyVariant;
	size?: TypographySize;
};
function Title({ className = '', variant = 'default', size = 'medium', ...props }: TitleProps) {
	const sizes: Record<TypographySize, string> = {
		small: 'text-lg',
		medium: 'text-xl',
		large: 'text-2xl',
	};

	const variants: Record<TypographyVariant, string> = {
		default: 'text-inherit',
		primary: 'text-sky-900 dark:text-sky-400',
		danger: 'text-red-900 dark:text-red-400',
	};

	return <h2 className={`font-sans font-medium ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}

export default memo(Title);
