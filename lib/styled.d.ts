import 'styled-components';

import { Theme } from './helpers';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
