import { useEffect } from 'react';

import { Flex } from '../containers';
import { Button } from '../inputs';

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
	useEffect(() => onClick(0), [pageAmmount]);

	const pages = Array.from({ length: pageAmmount }, (_, index) => index + 1);

	return (
		<Flex align='center' gap='0.25rem' {...props}>
			<Button onClick={onPreviousPage} disabled={currentPage === 0}>
				{'<'}
			</Button>
			<Flex gap='0.25rem' align='center' style={{ flex: 1 }}>
				{pages.length === 0 && '...'}

				{pages.map((item) => {
					const itemIndex = item - 1;

					return (
						<Button
							variant='text'
							key={item}
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
