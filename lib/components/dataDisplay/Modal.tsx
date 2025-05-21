import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useOnClickOutside } from '../../hooks';
import { Button } from '../inputs';
import { Flex } from '../layout';
import { Typography } from '../typography';

// Should prevent body scrolling when the modal is open
const mount = () => {
	document.body.style.overflow = 'hidden';
};

const unmount = () => {
	document.body.style.overflow = 'unset';
};

export type ModalProps = {
	open: boolean;
	onClose: () => void;

	closeBtn?: boolean;
	maskClosable?: boolean;

	id?: string;
	className?: string;
	title?: React.ReactNode;
	children?: React.ReactNode;
	footer?: React.ReactNode;
	style?: React.CSSProperties;
};

export function Modal({
	className = '',
	open,
	onClose,
	closeBtn = true,
	maskClosable = true,
	title,
	children,
	footer,
	...props
}: ModalProps) {
	// const { colors } = useTheme();

	const ref = useRef<HTMLDivElement | null>(null);
	useOnClickOutside<HTMLDivElement>(ref, open, () => maskClosable && onClose());

	useEffect(() => {
		// Regular flow, controlled
		if (open) mount();
		else unmount();

		// For safety, should not softlock the app on abrupt dismount
		return unmount;
	}, [open]);

	return (
		<>
			{open &&
				createPortal(
					<>
						<div className={`fixed inset-0 z-99 h-full w-full bg-black/75 backdrop-blur-xs`} />

						<div
							ref={ref}
							className={`fixed inset-x-0 top-10/100 z-100 mx-auto w-25/100 min-w-sm rounded-sm bg-neutral-100 p-4 font-sans text-neutral-950 dark:bg-neutral-900 dark:text-neutral-100 ${className}`}
							{...props}
						>
							<Flex style={{ gap: '.5rem' }} vertical>
								<Flex style={{ gap: '1rem' }} vertical>
									<Flex style={{ justifyContent: 'space-between', alignItems: 'center' }}>
										<Typography.Title>{title}</Typography.Title>

										{closeBtn && (
											<Button
												variant='text'
												onClick={onClose}
												className='font-mono font-extrabold text-neutral-300 dark:text-neutral-700'
											>
												X
											</Button>
										)}
									</Flex>

									<Typography.Body>{children}</Typography.Body>

									{footer}
								</Flex>
							</Flex>
						</div>
					</>,
					document.body,
				)}
		</>
	);
}
