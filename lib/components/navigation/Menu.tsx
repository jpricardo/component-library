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
			className={`${hidden ? 'hidden' : 'flex'} cursor-pointer flex-row items-center justify-start gap-4 rounded-sm border border-solid border-transparent bg-transparent py-1 pr-8 pl-4 text-neutral-900 transition-colors select-none hover:bg-neutral-100 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-selected:border-sky-900 aria-selected:bg-sky-900 aria-selected:text-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-700 ${className}`}
			aria-disabled={disabled}
			aria-selected={active}
			role='button'
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
			className={`flex ${vertical ? 'flex-col gap-1' : 'flex-row gap-2'} bg-white p-2 dark:bg-neutral-800 ${className}`}
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
