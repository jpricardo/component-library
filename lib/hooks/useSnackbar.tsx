import { useState } from 'react';

import { OverlayContextHolder, OverlayContextHolderProps, Snackbar, SnackbarProps } from '../components';

/**
 * Hook used to position Snackbars easily on the screen.
 *
 * Snackbars created with this hook will be rendered inside an `OverlayContextHolder`.
 */
export function useSnackbar(position: OverlayContextHolderProps['position'] = 'top') {
	const [items, setItems] = useState<SnackbarProps[]>([]);

	const addItem = (newItemProps: SnackbarProps) => {
		setItems((prev) => [...prev, newItemProps]);
	};

	const add = (props: SnackbarProps) => addItem(props);
	const flush = () => setItems([]);

	const contextHolder = (
		<OverlayContextHolder position={position}>
			{items.map((item, index) => (
				<Snackbar key={index} {...item} />
			))}
		</OverlayContextHolder>
	);

	return [{ add, flush }, contextHolder] as const;
}
