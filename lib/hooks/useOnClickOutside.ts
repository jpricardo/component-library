import { useEffect } from 'react';

export function useOnClickOutside<TElement extends HTMLElement>(
	ref: React.MutableRefObject<TElement | null>,
	isVisible: boolean,
	cb: () => void,
) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const isTheTarget = !!ref.current?.contains(event.target as Node);

			if (isVisible && !isTheTarget) return cb();
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [ref, isVisible, cb]);
}
