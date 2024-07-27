type RecordOf<T extends string, K = string> = { [Q in T]: K };

type Colors = RecordOf<'outline' | 'surface' | 'onSurface' | 'primary' | 'onPrimary' | 'error' | 'onError'>;

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
		primary: '#4545ff',
		onPrimary: '#faf0fa',
		error: 'red',
		onError: '#faf0fa', // white
	},

	shadows: baseShadows,
};

export const darkTheme: Theme = {
	colors: {
		surface: '#3c3b3c',
		onSurface: '#faf0fa',
		outline: '#c3c3c3',
		primary: '#4545ff',
		onPrimary: '#faf0fa',
		error: 'red',
		onError: '#faf0fa',
	},

	shadows: baseShadows,
};
