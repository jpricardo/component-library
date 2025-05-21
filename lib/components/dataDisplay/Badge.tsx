import { HtmlAttributes } from '..';
import { Flex } from '../layout';

export type BadgeProps = HtmlAttributes<HTMLDivElement> & {
	closable?: boolean;
	onClose?: () => void;
};
export function Badge({ className = '', closable, children, onClose, ...props }: BadgeProps) {
	return (
		<div
			className={`font-sans text-xs cursor-pointer py-0.5 px-2 text-neutral-950 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 rounded-sm border border-solid border-neutral-300 dark:border-neutral-700 ${className}`}
			{...props}
		>
			<Flex style={{ alignItems: 'center', gap: '.5rem' }}>
				{children}

				{closable && (
					<span className='cursor-pointer select-none font-semibold p-0' onClick={onClose} role='button'>
						x
					</span>
				)}
			</Flex>
		</div>
	);
}

// border-neutral-300 dark:border-neutral-700
