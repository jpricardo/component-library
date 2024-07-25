import { ReactRenderer } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import styled from 'styled-components';

const StyledSurface = styled.div`
	background-color: ${({ theme }) => theme.colors.surface};
	color: ${({ theme }) => theme.colors.onSurface};

	padding: 2rem;

	display: flex;
	justify-content: center;
`;

export default function defaultDecorator(story: PartialStoryFn<ReactRenderer>) {
	return <StyledSurface>{story()}</StyledSurface>;
}
