import ContextHandler from './ContextHandler';

interface Driver {
	getName(): string;

	setConfig(config: unknown): void;

	getConfig(): unknown;

	getContextHandler(context: number): ContextHandler | undefined;
}

export default Driver;
