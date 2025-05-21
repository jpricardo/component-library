import { useState } from 'react';

import { Typography } from '../typography';

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
			className={`${hidden ? 'hidden' : 'flex'} flex-row items-center justify-start gap-4 select-none cursor-pointer aria-disabled:cursor-not-allowed aria-disabled:opacity-50 rounded-xs px-8 py-2 text-inherit aria-selected:text-neutral-50 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700 aria-selected:bg-sky-900 ${className}`}
			aria-disabled={disabled}
			aria-selected={active}
			{...props}
		>
			<Typography.Body>{label}</Typography.Body>
		</div>
	);
}

type ItemKey = string | number;
export type TabsProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	defaultActiveKey?: ItemKey;
	activeKey?: ItemKey;
	onChange?: (key: ItemKey) => void;
	items: (Pick<ItemProps, 'label' | 'hidden' | 'disabled'> & { key: ItemKey; children: React.ReactNode })[];
	vertical?: boolean;
};

export function Tabs({ className = '', defaultActiveKey, activeKey, onChange, items, vertical, ...props }: TabsProps) {
	const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey);
	const activeTab = items.find((item) => (activeKey ?? internalActiveKey) === item.key);

	return (
		<div
			className={`transition-all flex ${vertical ? 'flex-row' : 'flex-col'} gap-0 p-2 bg-transparent ${className}`}
			{...props}
		>
			<div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-1 border-solid`}>
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

			<div className='p-2'>{activeTab?.children}</div>
		</div>
	);
}
