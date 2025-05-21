import { useCallback, useEffect, useState } from 'react';

import { Container } from '../containers';
import { Flex } from '../layout';
import { Typography } from '../typography';

export type SnackbarProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	content: React.ReactNode;
	duration?: number | false;
	closable?: boolean;

	onClick?: () => void;
};

export function Snackbar({ className = '', duration = 5000, closable = true, content, ...props }: SnackbarProps) {
	const [isOpen, setIsOpen] = useState(true);

	const doClose = useCallback(() => setIsOpen(false), []);

	useEffect(() => {
		if (!duration) return;

		const timeout = setTimeout(doClose, duration);

		return () => clearTimeout(timeout);
	}, [duration, doClose]);

	const display = isOpen ? 'flex' : 'hidden';
	const cursor = props.onClick ? 'cursor-pointer' : 'cursor-initial';

	return (
		<Container className={`${display} ${cursor} animate-fadein px-3 py-2 ${className}`}>
			<Flex className='w-full items-center justify-between gap-4' {...props}>
				<Typography.Footnote>{content}</Typography.Footnote>

				{closable && (
					<Typography.Footnote>
						<span className='cursor-pointer p-1 font-semibold select-none' onClick={doClose} role='button'>
							X
						</span>
					</Typography.Footnote>
				)}
			</Flex>
		</Container>
	);
}
