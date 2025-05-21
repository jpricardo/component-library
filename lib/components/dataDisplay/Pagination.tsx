import { useEffect } from 'react';

import { Button } from '../inputs';
import { Flex } from '../layout';

export type PaginationProps = {
	id?: string;
	className?: string;

	pageAmmount: number;
	currentPage: number;

	onClick: (page: number) => void;
	onPreviousPage: () => void;
	onNextPage: () => void;
};

// TODO - Solve the overflowing pagination issue
export function Pagination({
	pageAmmount,
	currentPage,
	onClick,
	onPreviousPage,
	onNextPage,
	...props
}: PaginationProps) {
	useEffect(() => onClick(0), [pageAmmount, onClick]);

	const pages = Array.from({ length: pageAmmount }, (_, index) => index + 1);

	return (
		<Flex style={{ alignItems: 'center', gap: '.25rem' }} {...props}>
			<Button onClick={onPreviousPage} disabled={currentPage === 0}>
				{'<'}
			</Button>
			<Flex style={{ flex: 1, alignItems: 'center', gap: '.25rem' }}>
				{pages.length === 0 && '...'}

				{pages.map((item) => {
					const itemIndex = item - 1;

					return (
						<Button
							key={item}
							variant='text'
							style={{ fontWeight: currentPage === itemIndex ? '600' : '400', padding: '0.5rem' }}
							onClick={() => onClick(itemIndex)}
						>
							{item}
						</Button>
					);
				})}
			</Flex>

			<Button onClick={onNextPage} disabled={currentPage === pageAmmount - 1}>
				{'>'}
			</Button>
		</Flex>
	);
}
