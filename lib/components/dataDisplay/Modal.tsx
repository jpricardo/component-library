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
						<div className={`fixed inset-0 x-99 h-full w-full bg-black/75 backdrop-blur-xs`} />

						<div
							ref={ref}
							className={`font-sans fixed z-100 inset-x-0 mx-auto top-10/100 w-25/100 min-w-sm p-4 rounded-sm text-neutral-950 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 ${className}`}
							{...props}
						>
							<Flex style={{ gap: '.5rem', flexDirection: 'column' }}>
								<Flex style={{ gap: '1rem', flexDirection: 'column' }}>
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
