import Body from './Body';
import Footnote from './Footnote';
import Headline from './Headline';
import Label from './Label';
import Title from './Title';

export type TypographyVariant = 'default' | 'primary' | 'secondary' | 'danger';
export type TypographySize = 'small' | 'medium' | 'large';

export class Typography {
	static Body = Body;
	static Footnote = Footnote;
	static Headline = Headline;
	static Label = Label;
	static Title = Title;
}
