type RecordOf<T extends string, K = string> = { [Q in T]: K };

type Colors = RecordOf<
	| 'outline'
	| 'surface'
	| 'onSurface'
	| 'primary'
	| 'onPrimary'
	| 'primaryContainer'
	| 'onPrimaryContainer'
	| 'error'
	| 'onError'
	| 'errorContainer'
	| 'onErrorContainer'
>;

type Shadows = RecordOf<'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
const baseShadows: Shadows = {
	xs: 'rgba(0, 0, 0, 0.2) 0px 0px 5px 1px',
	sm: 'rgba(0, 0, 0, 0.25) 0px 0px 7px 1px',
	md: 'rgba(0, 0, 0, 0.25) 0px 0px 10px 1px',
	lg: 'rgba(0, 0, 0, 0.25) 0px 0px 20px 1px',
	xl: 'rgba(0, 0, 0, 0.25) 0px 0px 40px 1px',
};

export type Theme = { colors: Colors; shadows: Shadows };

export const lightTheme: Theme = {
	colors: {
		surface: '#f8f7f8',
		onSurface: '#0a0f0a', // black
		outline: '#c3c3c3',

		primary: '#2F4874',
		onPrimary: '#faf0fa',
		primaryContainer: '#9AB0D6',
		onPrimaryContainer: '#0a0f0a',

		error: '#C42A2A',
		onError: '#faf0fa', // white
		errorContainer: '#DF6868',
		onErrorContainer: '#0a0f0a',
	},

	shadows: baseShadows,
};

export const darkTheme: Theme = {
	colors: {
		surface: '#3c3b3c',
		onSurface: '#faf0fa',
		outline: '#c3c3c3',

		primary: '#2F4874',
		onPrimary: '#faf0fa',
		primaryContainer: '#1D2D49',
		onPrimaryContainer: '#faf0fa',

		error: '#C42A2A',
		onError: '#faf0fa',
		errorContainer: '#761919',
		onErrorContainer: '#faf0fa',
	},

	shadows: baseShadows,
};
