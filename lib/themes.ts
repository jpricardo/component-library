type RecordOf<T extends string> = { [K in T]: string };

type Colors = RecordOf<'surface' | 'onSurface' | 'outline'>;

export type Theme = { colors: Colors };

export const lightTheme: Theme = {
	colors: {
		surface: '#f8f7f8',
		onSurface: 'black',
		outline: '#c3c3c3',
	},
};

export const darkTheme: Theme = {
	colors: {
		surface: '#3c3b3c',
		onSurface: 'white',
		outline: '#c3c3c3',
	},
};
