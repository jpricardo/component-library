import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpin = styled.div<{ $size: SpinProps['size'] }>`
	animation: ${rotate} 1s ease-in-out infinite;
	display: inline-block;
	box-sizing: border-box;

	height: ${({ $size }) => {
		if ($size === 'sm') return '14px';
		if ($size === 'md') return '20px';
		if ($size === 'lg') return '48px';
	}};
	width: ${({ $size }) => {
		if ($size === 'sm') return '14px';
		if ($size === 'md') return '20px';
		if ($size === 'lg') return '48px';
	}};

	border-radius: 50%;
	border-style: solid;
	border-width: ${({ $size }) => ($size === 'sm' ? '2px' : '5px')};
	border-color: ${({ theme }) => theme.colors.outline};

	border-bottom-color: transparent !important;
`;

export type SpinProps = React.HTMLAttributes<HTMLDivElement> & {
	size?: 'sm' | 'md' | 'lg';
};

export function Spin({ size = 'md', ...props }: SpinProps) {
	return <StyledSpin $size={size} {...props} />;
}
