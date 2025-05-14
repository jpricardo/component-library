import { useState } from 'react';
import styled from 'styled-components';

import { Typography } from '../typography';

const StyledItem = styled.div<{ $active?: boolean; $disabled?: boolean; $hidden?: boolean }>`
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

	user-select: none;
	display: ${({ $hidden }) => ($hidden ? 'none' : 'flex')};
	flex-direction: line;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

	border-radius: 0.25rem;
	padding: 0.5rem 2rem 0.5rem 1rem;

	background-color: ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};
	color: ${({ theme, $active }) => ($active ? theme.colors.onPrimary : 'inherit')};
	cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryContainer};
		color: ${({ theme }) => theme.colors.onPrimaryContainer};
	}
`;

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

function Item({ label, active, disabled, hidden, ...props }: ItemProps) {
	return (
		<StyledItem $active={active} $disabled={disabled} $hidden={hidden} {...props}>
			<Typography.Body>{label}</Typography.Body>
		</StyledItem>
	);
}

const StyledMenu = styled.div<{ $vertical?: boolean }>`
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

	display: flex;
	flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
	gap: ${({ $vertical }) => ($vertical ? '2px' : '4px')};
	padding: 0.5rem;

	background-color: ${({ theme }) => theme.colors.surface};
`;

export type MenuProps = {
	id?: string;
	className?: string;

	defaultActiveKey?: ItemKey;
	activeKey?: ItemKey;
	onChange?: (key: ItemKey) => void;
	items: (Pick<ItemProps, 'label' | 'hidden' | 'disabled'> & { key: ItemKey })[];
	vertical?: boolean;
};

export function Menu({ defaultActiveKey, activeKey, onChange, items, vertical = true, ...props }: MenuProps) {
	const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey);

	return (
		<StyledMenu $vertical={vertical} {...props}>
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
		</StyledMenu>
	);
}
