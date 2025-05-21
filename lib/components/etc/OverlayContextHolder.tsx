import { createPortal } from 'react-dom';

export type OverlayContextHolderProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
	container?: Element | DocumentFragment;

	position: 'top' | 'bottom';
};

export function OverlayContextHolder({
	className = '',
	position,
	container = document.body,
	...props
}: OverlayContextHolderProps) {
	const positions = {
		top: 'top-4',
		bottom: 'bottom-8',
	};

	return createPortal(
		<div
			className={`z-100 fixed flex flex-col gap-2 mx-auto right-1/10 left-1/10  ${positions[position]} ${className}`}
			{...props}
		/>,
		container,
	);
}
