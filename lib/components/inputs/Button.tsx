import { Spin } from '../feedback';
import { Flex } from '../layout';

type VariantType = 'default' | 'primary' | 'danger' | 'text';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: VariantType;
	loading?: boolean;
};

export function Button({ className = '', variant = 'default', loading, disabled, children, ...props }: ButtonProps) {
	const colors: Record<VariantType, string> = {
		default:
			'text-neutral-900 dark:text-neutral-100 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 hover:dark:bg-neutral-800 border border-solid border-neutral-300 dark:border-neutral-700',
		text: 'text-neutral-900 dark:text-neutral-100 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 hover:dark:bg-neutral-800',
		primary:
			'text-neutral-100 dark:text-neutral-950 bg-sky-950 hover:bg-sky-900 dark:bg-sky-400 hover:dark:bg-sky-300 border border-solid border-neutral-300 hover:border-sky-900 dark:border-neutral-700 hover:dark:border-sky-300',
		danger:
			'text-red-900 dark:text-red-400 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 hover:dark:bg-neutral-800 border border-solid border-neutral-300 dark:border-neutral-700 hover:border-red-900 hover:dark:border-red-400',
	};

	return (
		<button
			className={`
				font-sans py-2 px-4 rounded-xs text-sm active:outline disabled:opacity-50 ${loading ? 'disabled:cursor-progress' : 'disabled:cursor-not-allowed'} ${colors[variant]} ${className}`}
			disabled={disabled || loading}
			{...props}
		>
			<Flex gap={2} justify='around' align='center'>
				{children}

				{loading && <Spin size='sm' style={{ borderColor: 'inherit' }} />}
			</Flex>
		</button>
	);
}
