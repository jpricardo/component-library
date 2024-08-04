import styled from 'styled-components';

import { HtmlAttributes } from '..';
import { Flex } from '../layout';

type VariantType = 'default' | 'primary' | 'secondary' | 'danger';

type StyledBadgeProps = {
	$variant: BadgeProps['variant'];
};

const StyledBadge = styled.div<StyledBadgeProps>`
	font-family: ${({ theme }) => theme.typography.fontFamily};
	font-size: 0.75rem;
	line-height: 0.75rem;

	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
	cursor: pointer;

	color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primary;
		if ($variant === 'secondary') return theme.colors.secondary;
		if ($variant === 'danger') return theme.colors.error;
		return theme.colors.onSurface;
	}};
	background-color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primaryContainer;
		if ($variant === 'secondary') return theme.colors.secondaryContainer;
		if ($variant === 'danger') return theme.colors.errorContainer;
		return theme.colors.surface;
	}};

	border-width: 1px;
	border-style: solid;
	border-color: ${({ $variant, theme }) => {
		if ($variant === 'primary') return theme.colors.primary;
		if ($variant === 'secondary') return theme.colors.secondary;
		if ($variant === 'danger') return theme.colors.error;
		return theme.colors.outline;
	}};
`;

const StyledCloseBtn = styled.span`
	color: inherit;
	margin-top: -1px;
	font-weight: 600;
	line-height: 10px;
	user-select: none;
`;

export type BadgeProps = HtmlAttributes<HTMLDivElement> & {
	variant?: VariantType;
	closable?: boolean;
	onClose?: () => void;
};
export function Badge({ variant = 'default', closable, children, onClose, ...props }: BadgeProps) {
	return (
		<StyledBadge $variant={variant} {...props}>
			<Flex align='center' gap='0.5rem'>
				{children}

				{closable && (
					<StyledCloseBtn onClick={onClose} role='button'>
						x
					</StyledCloseBtn>
				)}
			</Flex>
		</StyledBadge>
	);
}
