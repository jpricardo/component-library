import { useState } from 'react';

import { Typography } from '../typography';

type ItemKey = string | number;

type ItemProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;
	onClick?: VoidFunction;

	label: string;
	active?: boolean;
	disabled?: boolean;
	hidden?: boolean;
};

function Item({ className = '', label, active, disabled, hidden, ...props }: ItemProps) {
	return (
		<div
			className={`${hidden ? 'hidden' : 'flex'} transition-colors select-none cursor-pointer aria-disabled:cursor-not-allowed flex-row justify-start items-center gap-4 py-1 pr-8 pl-4 rounded-sm border border-solid border-transparent aria-selected:border-sky-900 text-neutral-900 dark:text-neutral-50 aria-selected:text-neutral-50 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700 aria-selected:bg-sky-900 aria-disabled:opacity-50  ${className}`}
			aria-disabled={disabled}
			aria-selected={active}
			{...props}
		>
			<Typography.Body>{label}</Typography.Body>
		</div>
	);
}

export type MenuProps = {
	id?: string;
	className?: string;

	defaultActiveKey?: ItemKey;
	activeKey?: ItemKey;
	onChange?: (key: ItemKey) => void;
	items: (Pick<ItemProps, 'label' | 'hidden' | 'disabled'> & { key: ItemKey })[];
	vertical?: boolean;
};

export function Menu({
	className = '',
	defaultActiveKey,
	activeKey,
	onChange,
	items,
	vertical = true,
	...props
}: MenuProps) {
	const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey);

	return (
		<div
			className={`flex ${vertical ? 'flex-col gap-1' : 'flex-row gap-2'} p-2 bg-white dark:bg-neutral-800 ${className}`}
			{...props}
		>
			{items.map(({ key, ...item }) => (
				<Item
					key={key}
					active={(activeKey ?? internalActiveKey) === key}
					onClick={() => {
						if (item.disabled) return;
						if (onChange) return onChange(key);
						setInternalActiveKey(key);
					}}
					{...item}
				/>
			))}
		</div>
	);
}
