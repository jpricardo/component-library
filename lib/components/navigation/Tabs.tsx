import { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../typography';

const StyledItem = styled.div<{ $active?: boolean; $disabled?: boolean; $hidden?: boolean; $vertical?: boolean }>`
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

	user-select: none;
	display: ${({ $hidden }) => ($hidden ? 'none' : 'flex')};
	flex-direction: row;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

	border-radius: ${({ $vertical }) => ($vertical ? '0.125rem 0 0 0.125rem' : '0.125rem 0.125rem 0 0')};
	padding: 0.5rem 2rem;

	background-color: ${({ theme, $active }) => ($active ? theme.colors.primaryContainer : 'transparent')};
	color: ${({ theme, $active }) => ($active ? theme.colors.onPrimaryContainer : 'inherit')};
	cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

	border-bottom-width: ${({ $vertical }) => ($vertical ? '0px' : '1px')};
	border-bottom-style: solid;
	border-bottom-color: ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};

	border-right-width: ${({ $vertical }) => ($vertical ? '1px' : '0px')};
	border-right-style: solid;
	border-right-color: ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryContainer};
		color: ${({ theme }) => theme.colors.onPrimaryContainer};
	}
`;

type ItemProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;
	onClick?: VoidFunction;

	label: string;
	active?: boolean;
	disabled?: boolean;
	hidden?: boolean;
	vertical?: boolean;
};

function Item({ label, active, disabled, hidden, vertical, ...props }: ItemProps) {
	return (
		<StyledItem $active={active} $disabled={disabled} $hidden={hidden} $vertical={vertical} {...props}>
			<Typography.Body>{label}</Typography.Body>
		</StyledItem>
	);
}

const StyledTabContent = styled.div`
	padding: 0.5rem;
`;

const StyledTabList = styled.div<{ $vertical?: boolean }>`
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

	display: flex;
	flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'line')};
	gap: 4px;

	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${({ theme, $vertical }) => ($vertical ? 'transparent' : theme.colors.outline)};
	border-right-width: 1px;
	border-right-style: solid;
	border-right-color: ${({ theme, $vertical }) => ($vertical ? theme.colors.outline : 'transparent')};
`;

const StyledTabs = styled.div<{ $vertical?: boolean }>`
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

	display: flex;
	flex-direction: ${({ $vertical }) => ($vertical ? 'line' : 'column')};
	gap: 0;
	padding: 0.5rem;

	background-color: ${({ theme }) => theme.colors.surface};
`;

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

export function Tabs({ defaultActiveKey, activeKey, onChange, items, vertical, ...props }: TabsProps) {
	const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey);
	const activeTab = items.find((item) => (activeKey ?? internalActiveKey) === item.key);

	return (
		<StyledTabs $vertical={vertical} {...props}>
			<StyledTabList $vertical={vertical}>
				{items.map(({ key, ...item }) => (
					<Item
						key={key}
						active={(activeKey ?? internalActiveKey) === key}
						onClick={() => {
							if (item.disabled) return;
							if (onChange) return onChange(key);
							setInternalActiveKey(key);
						}}
						vertical={vertical}
						{...item}
					/>
				))}
			</StyledTabList>

			<StyledTabContent>{activeTab?.children}</StyledTabContent>
		</StyledTabs>
	);
}
