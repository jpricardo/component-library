import { memo } from 'react';

import { HtmlAttributes, TypographySize, TypographyVariant } from '..';

type FootnoteProps = HtmlAttributes<HTMLSpanElement> & {
	variant?: TypographyVariant;
	size?: TypographySize;
};
function Footnote({ className = '', variant = 'default', size = 'medium', ...props }: FootnoteProps) {
	const sizes: Record<TypographySize, string> = {
		small: 'text-xs',
		medium: 'text-sm',
		large: 'text-base',
	};

	const variants: Record<TypographyVariant, string> = {
		default: 'text-inherit',
		primary: 'text-sky-900 dark:text-sky-400',
		danger: 'text-red-900 dark:text-red-400',
	};

	return <span className={`font-sans opacity-85 ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}

export default memo(Footnote);
