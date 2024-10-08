export * from './containers';
export * from './dataDisplay';
export * from './etc';
export * from './feedback';
export * from './inputs';
export * from './layout';
export * from './typography';

export type HtmlAttributes<TElement extends HTMLElement> = React.DetailedHTMLProps<
	React.HTMLAttributes<TElement>,
	TElement
>;
