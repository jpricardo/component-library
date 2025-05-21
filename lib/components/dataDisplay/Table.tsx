import { HtmlAttributes } from '..';
import { Typography } from '../typography';

type ColumnType<T> = {
	key: keyof T;
	title: string;
	render?: (value: T[keyof T]) => React.ReactNode;
};

type TableRowProps<T> = HtmlAttributes<HTMLTableRowElement> & {
	data: T;
	columns: ColumnType<T>[];
};

function TableRow<T extends Record<string, unknown>>({ data, columns, ...props }: TableRowProps<T>) {
	return (
		<tr {...props}>
			{columns.map((column) => (
				<td className='px-6 py-2' key={column.key as string}>
					<Typography.Body>
						{column.render?.(data[column.key]) ?? (data[column.key] as React.ReactNode)}
					</Typography.Body>
				</td>
			))}
		</tr>
	);
}

type TableBodyProps<T> = HtmlAttributes<HTMLTableSectionElement> & {
	items: T[];
	columns: ColumnType<T>[];
	rowKey: ((item: T) => string) | keyof T;
};

function TableBody<T extends Record<string, unknown>>({
	className = '',
	items,
	columns,
	rowKey,
	...props
}: TableBodyProps<T>) {
	return (
		<tbody className={`bg-white text-neutral-950 dark:bg-neutral-800 dark:text-neutral-100 ${className}`} {...props}>
			{items.map((item) => (
				<TableRow
					className='hover:bg-neutral-50 hover:dark:bg-neutral-700'
					key={typeof rowKey === 'function' ? rowKey(item) : (item[rowKey] as string)}
					data={item}
					columns={columns}
				/>
			))}
		</tbody>
	);
}

type TableHeaderProps<T> = HtmlAttributes<HTMLTableSectionElement> & {
	columns: ColumnType<T>[];
};

function TableHeader<T>({ className = '', columns, ...props }: TableHeaderProps<T>) {
	return (
		<thead
			className={`bg-sky-900 text-neutral-100 select-none dark:bg-sky-500 dark:text-neutral-950 ${className}`}
			{...props}
		>
			<tr>
				{columns.map((column) => (
					<th className='px-6 py-2' key={column.key as string}>
						<Typography.Body>{column.title}</Typography.Body>
					</th>
				))}
			</tr>
		</thead>
	);
}

export type TableProps<T> = HtmlAttributes<HTMLTableElement> & {
	items: T[];
	columns: ColumnType<T>[];
	/** Function that returns an unique key OR the object's property we should use as unique */
	rowKey: ((item: T) => string) | keyof T;
};

export function Table<T extends Record<string, unknown>>({
	className = '',
	items,
	columns,
	rowKey,
	...props
}: TableProps<T>) {
	return (
		<table className={`border-collapse rounded-sm font-sans ${className}`} {...props}>
			<TableHeader columns={columns} />

			<TableBody items={items} columns={columns} rowKey={rowKey} />
		</table>
	);
}
