import { HtmlAttributes } from '..';
import { Flex } from '../layout';

export type BadgeProps = HtmlAttributes<HTMLDivElement> & {
	closable?: boolean;
	onClose?: () => void;
};
export function Badge({ className = '', closable, children, onClose, ...props }: BadgeProps) {
	return (
		<div
			className={`cursor-pointer rounded-sm border border-solid border-neutral-300 bg-neutral-100 px-2 py-0.5 font-sans text-xs text-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 ${className}`}
			{...props}
		>
			<Flex style={{ alignItems: 'center', gap: '.5rem' }}>
				{children}

				{closable && (
					<span className='cursor-pointer p-0 font-semibold select-none' onClick={onClose} role='button'>
						x
					</span>
				)}
			</Flex>
		</div>
	);
}

// border-neutral-300 dark:border-neutral-700
