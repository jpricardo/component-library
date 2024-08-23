import styled from 'styled-components';

import { Flex } from '../layout';
import { createPortal } from 'react-dom';

const StyledContextHolder = styled(Flex)<{ $position: OverlayContextHolderProps['position'] }>(({ $position }) => {
	return {
		zIndex: 100,
		position: 'fixed',
		top: $position === 'top' ? '1rem' : undefined,
		bottom: $position === 'top' ? undefined : '2rem',
		right: '10%',
		left: '10%',
		margin: 'auto',

		flexDirection: 'column',
		gap: '0.75rem',
	};
});

export type OverlayContextHolderProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
	container?: Element | DocumentFragment;

	position: 'top' | 'bottom';
};

export function OverlayContextHolder({ position, container = document.body, ...props }: OverlayContextHolderProps) {
	return createPortal(<StyledContextHolder $position={position} {...props} />, container);
}
