import { HtmlAttributes } from '..';
import { Flex } from '../layout';

export type BadgeProps = HtmlAttributes<HTMLDivElement> & {
	closable?: boolean;
	onClose?: () => void;
};
export function Badge({ className = '', closable, children, onClose, ...props }: BadgeProps) {
	return (
		<div
			className={`bordered bg-container text-container cursor-pointer rounded-sm px-2 py-0.5 font-sans text-xs ${className}`}
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
