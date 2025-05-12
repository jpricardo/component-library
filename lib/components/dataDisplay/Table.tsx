import styled from 'styled-components';

import { HtmlAttributes } from '..';
import { Typography } from '../typography';

type ColumnType<T> = {
	key: keyof T;
	title: string;
	render?: (value: T[keyof T]) => React.ReactNode;
};

const StyledTableRow = styled.tr`
	> * {
		padding: 0.5rem 1.5rem;
	}
`;

type TableRowProps<T> = HtmlAttributes<HTMLTableRowElement> & {
	data: T;
	columns: ColumnType<T>[];
};

function TableRow<T extends Record<string, unknown>>({ data, columns, ...props }: TableRowProps<T>) {
	return (
		<StyledTableRow {...props}>
			{columns.map((column) => (
				<td key={column.key as string}>
					<Typography.Body>
						{column.render?.(data[column.key]) ?? (data[column.key] as React.ReactNode)}
					</Typography.Body>
				</td>
			))}
		</StyledTableRow>
	);
}

const StyledTableBody = styled.tbody`
	> tr {
		transition: all 0.2s cubic-bezier(0.1, 0.045, 0.355, 1);
		background-color: ${({ theme }) => theme.colors.containerLowest};
		color: ${({ theme }) => theme.colors.onContainer};

		&:hover {
			background-color: ${({ theme }) => theme.colors.containerLow};
		}
	}
`;

type TableBodyProps<T> = HtmlAttributes<HTMLTableSectionElement> & {
	items: T[];
	columns: ColumnType<T>[];
	rowKey: ((item: T) => string) | keyof T;
};

function TableBody<T extends Record<string, unknown>>({ items, columns, rowKey, ...props }: TableBodyProps<T>) {
	return (
		<StyledTableBody {...props}>
			{items.map((item) => (
				<TableRow
					key={typeof rowKey === 'function' ? rowKey(item) : (item[rowKey] as string)}
					data={item}
					columns={columns}
				/>
			))}
		</StyledTableBody>
	);
}

const StyledTableHeader = styled.thead`
	user-select: none;

	> tr {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.onPrimary};
	}
`;

type TableHeaderProps<T> = HtmlAttributes<HTMLTableSectionElement> & {
	columns: ColumnType<T>[];
};

function TableHeader<T>({ columns, ...props }: TableHeaderProps<T>) {
	return (
		<StyledTableHeader {...props}>
			<StyledTableRow>
				{columns.map((column) => (
					<th key={column.key as string}>
						<Typography.Body>{column.title}</Typography.Body>
					</th>
				))}
			</StyledTableRow>
		</StyledTableHeader>
	);
}

const StyledTable = styled.table`
	border-spacing: 0;
	border-radius: 0.25rem;
	overflow: hidden;
`;

export type TableProps<T> = HtmlAttributes<HTMLTableElement> & {
	items: T[];
	columns: ColumnType<T>[];
	/** Function that returns an unique key OR the object's property we should use as unique */
	rowKey: ((item: T) => string) | keyof T;
};

export function Table<T extends Record<string, unknown>>({ items, columns, rowKey, ...props }: TableProps<T>) {
	return (
		<StyledTable {...props}>
			<TableHeader columns={columns} />

			<TableBody items={items} columns={columns} rowKey={rowKey} />
		</StyledTable>
	);
}
