import { useCallback, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Flex } from '../layout';
import { Typography } from '../typography';

const StyledCloseBtn = styled.span`
	cursor: pointer;
	color: inherit;
	margin-top: -1px;
	font-weight: 600;
	line-height: 10px;
	user-select: none;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledSnackbar = styled(Flex)<{ $open: boolean }>`
	transition: all 0.2s;
	animation: ${fadeIn} 0.1s linear;
	display: ${({ $open }) => ($open ? 'flex' : 'none')};
	cursor: ${({ onClick }) => (onClick ? 'pointer' : 'initial')};
	user-select: none;

	font-family: ${({ theme }) => theme.typography.fontFamily};

	padding: 0.75rem 1rem;
	border-radius: 0.125rem;

	box-shadow: ${({ theme }) => theme.shadows.xs};
	border: 1px solid ${({ theme }) => theme.colors.outline};
	background-color: ${({ theme }) => theme.colors.container};

	&:hover {
		background-color: ${({ theme }) => theme.colors.containerHigh};
	}
`;

export type SnackbarProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	content: React.ReactNode;
	duration?: number | false;
	closable?: boolean;

	onClick?: () => void;
};

export function Snackbar({ duration = 5000, closable = true, content, ...props }: SnackbarProps) {
	const [isOpen, setIsOpen] = useState(true);

	const doClose = useCallback(() => setIsOpen(false), []);

	useEffect(() => {
		if (!duration) return;

		const timeout = setTimeout(doClose, duration);

		return () => clearTimeout(timeout);
	}, [duration, doClose]);

	return (
		<StyledSnackbar $open={isOpen} justify='space-between' align='center' gap='1rem' {...props}>
			<Typography.Footnote>{content}</Typography.Footnote>

			{closable && (
				<Typography.Footnote>
					<StyledCloseBtn onClick={doClose} role='button'>
						X
					</StyledCloseBtn>
				</Typography.Footnote>
			)}
		</StyledSnackbar>
	);
}
