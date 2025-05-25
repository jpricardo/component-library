import { Spin } from '../feedback';

type VariantType = 'default' | 'primary' | 'danger' | 'text';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: VariantType;
	loading?: boolean;
};

export function Button({ className = '', variant = 'default', loading, disabled, children, ...props }: ButtonProps) {
	const colors: Record<VariantType, string> = {
		default: 'text-container bg-surface bordered hover:brightness-95 dark:hover:brightness-150',
		text: 'bg-transparent hover:backdrop-brightness-95 dark:hover:backdrop-brightness-150',
		primary: 'text-on-primary bg-primary hover:brightness-110 bordered border-primary',
		danger:
			'text-danger dark:text-danger-dark bg-surface bordered hover:border-danger hover:dark:border-danger-dark hover:brightness-95 dark:hover:brightness-150',
	};

	return (
		<button
			className={`cursor-pointer rounded-xs px-4 py-2 font-sans text-sm active:outline disabled:opacity-50 ${loading ? 'disabled:cursor-progress' : 'disabled:cursor-not-allowed'} ${colors[variant]} ${className}`}
			disabled={disabled || loading}
			{...props}
		>
			<div className='flex items-center justify-around gap-2'>
				{children}

				{loading && <Spin size='sm' style={{ borderColor: 'inherit' }} />}
			</div>
		</button>
	);
}
