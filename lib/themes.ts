type RecordOf<T extends string, K = string> = { [Q in T]: K };

type Colors = RecordOf<
	| 'outline'
	| 'surface'
	| 'onSurface'
	| 'container'
	| 'onContainer'
	| 'containerLowest'
	| 'containerLow'
	| 'containerHigh'
	| 'containerHighest'
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

type Typography = RecordOf<'fontFamily'>;
const baseTypography: Typography = { fontFamily: 'sans-serif' };

export type Theme = { colors: Colors; shadows: Shadows; typography: Typography };

const black = '#0a0f0a';
const white = '#faf0fa';

export const lightTheme: Theme = {
	colors: {
		outline: '#c3c3c3',
		surface: '#f8f7f8',
		onSurface: black, // black
		container: '#E3DDE3',
		onContainer: black,
		containerLowest: '#F8F7F8',
		containerLow: '#EDE9ED',
		containerHigh: '#DAD2DA',
		containerHighest: '#D1C7D1',

		primary: '#2F4874',
		onPrimary: white,
		primaryContainer: '#9AB0D6',
		onPrimaryContainer: black,

		error: '#C42A2A',
		onError: '#faf0fa', // white
		errorContainer: '#EDABAB',
		onErrorContainer: black,
	},

	shadows: {
		xs: 'rgba(0, 0, 0, 0.2) 0px 0px 5px 1px',
		sm: 'rgba(0, 0, 0, 0.25) 0px 0px 7px 1px',
		md: 'rgba(0, 0, 0, 0.25) 0px 0px 10px 1px',
		lg: 'rgba(0, 0, 0, 0.25) 0px 0px 20px 1px',
		xl: 'rgba(0, 0, 0, 0.25) 0px 0px 40px 1px',
	},

	typography: baseTypography,
};

export const darkTheme: Theme = {
	colors: {
		outline: '#c3c3c3',
		surface: '#3c3b3c',
		onSurface: white,
		container: '#525152',
		onContainer: white,
		containerLowest: '#3c3b3c',
		containerLow: '#484748',
		containerHigh: '#5D5B5D',
		containerHighest: '#676567',

		primary: '#41649F',
		onPrimary: white,
		primaryContainer: '#1D2D49',
		onPrimaryContainer: white,

		error: '#DC7272',
		onError: white,
		errorContainer: '#6A2424',
		onErrorContainer: white,
	},

	shadows: {
		xs: 'rgba(0, 0, 0, 0.5) 0px 0px 5px 1px',
		sm: 'rgba(0, 0, 0, 0.75) 0px 0px 7px 1px',
		md: 'rgba(0, 0, 0, 0.75) 0px 0px 10px 1px',
		lg: 'rgba(0, 0, 0, 0.75) 0px 0px 20px 1px',
		xl: 'rgba(0, 0, 0, 0.75) 0px 0px 40px 1px',
	},

	typography: baseTypography,
};
