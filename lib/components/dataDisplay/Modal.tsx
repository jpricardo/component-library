import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled, { useTheme } from 'styled-components';

import { useOnClickOutside } from '../../hooks';
import { Button } from '../inputs';
import { Flex } from '../layout';
import { Typography } from '../typography';

const StyledModal = styled.div`
	z-index: 100;
	position: fixed;
	top: 10%;
	left: 0;
	right: 0;
	width: 25%;
	min-width: 200px;
	max-width: 90%;

	padding: 1rem;
	margin: auto;

	background-color: ${({ theme }) => theme.colors.container};
	color: ${({ theme }) => theme.colors.onContainer};
	border-radius: 0.25rem;
	box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const StyledMask = styled.div<{ $opacity: number }>`
	position: fixed;
	z-index: 99;
	top: 0;
	left: 0;

	height: 100%;
	width: 100%;
	background: black;
	opacity: ${({ $opacity }) => $opacity};
`;

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
	maskOpacity?: number;

	id?: string;
	className?: string;
	title?: React.ReactNode;
	children?: React.ReactNode;
	footer?: React.ReactNode;
	style?: React.CSSProperties;
};

export function Modal({
	open,
	onClose,
	maskOpacity = 0.75,
	closeBtn = true,
	maskClosable = true,
	title,
	children,
	footer,
	...props
}: ModalProps) {
	const { colors } = useTheme();

	const ref = useRef<HTMLDivElement | null>(null);
	useOnClickOutside<HTMLDivElement>(ref, open, () => maskClosable && onClose());

	useEffect(() => {
		// Regular flow, controlled
		open ? mount() : unmount();

		// For safety, should not softlock the app on abrupt dismount
		return unmount;
	}, [open]);

	return (
		<>
			{open &&
				createPortal(
					<>
						<StyledMask $opacity={maskOpacity} />

						<StyledModal ref={ref} {...props}>
							<Flex gap='2rem' vertical>
								<Flex gap='1rem' vertical>
									<Flex justify='space-between' align='center'>
										<Typography.Title>{title}</Typography.Title>

										{closeBtn && (
											<Button
												variant='text'
												onClick={onClose}
												style={{
													fontFamily: 'monospace',
													fontWeight: 800,
													color: colors.outline,
												}}
											>
												X
											</Button>
										)}
									</Flex>

									<Typography.Body>{children}</Typography.Body>

									{footer}
								</Flex>
							</Flex>
						</StyledModal>
					</>,
					document.body,
				)}
		</>
	);
}
