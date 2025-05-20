import Color, { ColorInstance } from 'color';

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
	| 'secondary'
	| 'onSecondary'
	| 'secondaryContainer'
	| 'onSecondaryContainer'
	| 'error'
	| 'onError'
	| 'errorContainer'
	| 'onErrorContainer'
>;

type Shadows = RecordOf<'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

type Typography = RecordOf<'fontFamily'>;

export type Theme = { colors: Colors; shadows: Shadows; typography: Typography };

type ThemeDefaults = { primary: string; secondary: string; error: string; container: string };

type ThemeTokens = Partial<ThemeDefaults>;

type ColorPalette = RecordOf<'color' | 'onColor' | 'container' | 'onContainer'>;

type ContainerPalette = RecordOf<
	'outline' | 'surface' | 'onSurface' | 'lowest' | 'low' | 'default' | 'high' | 'highest' | 'onContainer'
>;

export class ThemeBuilder {
	private static readonly white = Color('#FAFAFA');
	private static readonly black = Color('#0a0f0a');

	private static getColorValue(color: ColorInstance) {
		return color.rgb().toString();
	}

	private static getOnColor(color: ColorInstance) {
		return color.isLight() ? this.black : this.white;
	}

	private static getTypography(): Typography {
		return { fontFamily: '"Noto Sans", sans-serif' };
	}

	// Light theme
	private static readonly lightDefaults: ThemeDefaults = {
		primary: '#2F4874',
		secondary: '#44555F',
		error: '#940F0F',
		container: '#EDE9ED',
	};

	private static getLightShadows(): Shadows {
		const shadowColor = this.getColorValue(this.black.fade(0.8));

		return {
			xs: `${shadowColor} 0px 2px 5px 1px`,
			sm: `${shadowColor} 0px 2px 7px 1px`,
			md: `${shadowColor} 0px 2px 10px 1px`,
			lg: `${shadowColor} 0px 2px 20px 1px`,
			xl: `${shadowColor} 0px 2px 40px 1px`,
		};
	}

	private static getLightContainerPalette(token: string): ContainerPalette {
		const defaultColor = Color(token);
		const lowest = defaultColor.lighten(0.05);
		const low = defaultColor.lighten(0.02);
		const high = defaultColor.darken(0.02);
		const highest = defaultColor.darken(0.05);

		return {
			outline: this.getColorValue(this.getOnColor(defaultColor).fade(0.75)),
			surface: this.getColorValue(lowest),
			onSurface: this.getColorValue(this.getOnColor(lowest)),
			lowest: this.getColorValue(lowest),
			low: this.getColorValue(low),
			default: this.getColorValue(defaultColor),
			high: this.getColorValue(high),
			highest: this.getColorValue(highest),
			onContainer: this.getColorValue(this.getOnColor(defaultColor)),
		};
	}

	private static getLightColorPalette(token: string): ColorPalette {
		const baseColor = Color(token);
		const containerColor = baseColor.lighten(1.75).desaturate(0.25);

		return {
			color: this.getColorValue(baseColor),
			onColor: this.getColorValue(this.getOnColor(baseColor)),
			container: this.getColorValue(containerColor),
			onContainer: this.getColorValue(this.getOnColor(containerColor)),
		};
	}

	static getLightTheme(tokens?: ThemeTokens): Theme {
		const primaryPalette = this.getLightColorPalette(tokens?.primary || this.lightDefaults.primary);
		const secondaryPalette = this.getLightColorPalette(tokens?.secondary || this.lightDefaults.secondary);
		const errorPalette = this.getLightColorPalette(tokens?.error || this.lightDefaults.error);
		const containerPalette = this.getLightContainerPalette(tokens?.container || this.lightDefaults.container);

		const shadows = this.getLightShadows();
		const typography = this.getTypography();

		return {
			typography: typography,

			shadows: shadows,

			colors: {
				outline: containerPalette.outline,
				surface: containerPalette.lowest,
				onSurface: containerPalette.onSurface,
				containerLowest: containerPalette.lowest,
				containerLow: containerPalette.low,
				container: containerPalette.default,
				containerHigh: containerPalette.high,
				containerHighest: containerPalette.highest,
				onContainer: containerPalette.onContainer,

				primary: primaryPalette.color,
				onPrimary: primaryPalette.onColor,
				primaryContainer: primaryPalette.container,
				onPrimaryContainer: primaryPalette.onContainer,

				secondary: secondaryPalette.color,
				onSecondary: secondaryPalette.onColor,
				secondaryContainer: secondaryPalette.container,
				onSecondaryContainer: secondaryPalette.onContainer,

				error: errorPalette.color,
				onError: errorPalette.onColor,
				errorContainer: errorPalette.container,
				onErrorContainer: errorPalette.onContainer,
			},
		};
	}

	// Dark theme
	private static readonly darkDefaults: ThemeDefaults = {
		primary: '#799AD2',
		secondary: '#7AA4B8',
		error: '#FF6666',
		container: '#313133',
	};

	private static getDarkShadows(): Shadows {
		const shadowColor = this.getColorValue(this.black.fade(0.25));

		return {
			xs: `${shadowColor} 0px 2px 5px 1px`,
			sm: `${shadowColor} 0px 2px 7px 1px`,
			md: `${shadowColor} 0px 2px 10px 1px`,
			lg: `${shadowColor} 0px 2px 20px 1px`,
			xl: `${shadowColor} 0px 2px 40px 1px`,
		};
	}

	private static getDarkContainerPalette(token: string): ContainerPalette {
		const defaultColor = Color(token);
		const lowest = defaultColor.darken(0.25);
		const low = defaultColor.darken(0.1);
		const high = defaultColor.lighten(0.05);
		const highest = defaultColor.lighten(0.1);

		return {
			outline: this.getColorValue(this.getOnColor(defaultColor).fade(0.5)),
			surface: this.getColorValue(lowest),
			onSurface: this.getColorValue(this.getOnColor(lowest)),
			lowest: this.getColorValue(lowest),
			low: this.getColorValue(low),
			default: this.getColorValue(defaultColor),
			high: this.getColorValue(high),
			highest: this.getColorValue(highest),
			onContainer: this.getColorValue(this.getOnColor(defaultColor)),
		};
	}

	private static getDarkColorPalette(token: string): ColorPalette {
		const baseColor = Color(token);
		const containerColor = baseColor.darken(0.7).desaturate(0.75);

		return {
			color: this.getColorValue(baseColor),
			onColor: this.getColorValue(this.getOnColor(baseColor)),
			container: this.getColorValue(containerColor),
			onContainer: this.getColorValue(this.getOnColor(containerColor)),
		};
	}

	static getDarkTheme(tokens?: ThemeTokens): Theme {
		const primaryPalette = this.getDarkColorPalette(tokens?.primary || this.darkDefaults.primary);
		const secondaryPalette = this.getDarkColorPalette(tokens?.secondary || this.darkDefaults.secondary);
		const errorPalette = this.getDarkColorPalette(tokens?.error || this.darkDefaults.error);
		const containerPalette = this.getDarkContainerPalette(tokens?.container || this.darkDefaults.container);

		const shadows = this.getDarkShadows();
		const typography = this.getTypography();

		return {
			typography: typography,

			shadows: shadows,

			colors: {
				outline: containerPalette.outline,
				surface: containerPalette.lowest,
				onSurface: containerPalette.onSurface,
				containerLowest: containerPalette.lowest,
				containerLow: containerPalette.low,
				container: containerPalette.default,
				containerHigh: containerPalette.high,
				containerHighest: containerPalette.highest,
				onContainer: containerPalette.onContainer,

				primary: primaryPalette.color,
				onPrimary: primaryPalette.onColor,
				primaryContainer: primaryPalette.container,
				onPrimaryContainer: primaryPalette.onContainer,

				secondary: secondaryPalette.color,
				onSecondary: secondaryPalette.onColor,
				secondaryContainer: secondaryPalette.container,
				onSecondaryContainer: secondaryPalette.onContainer,

				error: errorPalette.color,
				onError: errorPalette.onColor,
				errorContainer: errorPalette.container,
				onErrorContainer: errorPalette.onContainer,
			},
		};
	}
}
