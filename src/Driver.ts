import ContextListener from './ContextListener';
import User from './User';

type ContextListenerCreator = new (user: User) => ContextListener;

interface Driver {
	getName(): string;

	setConfig(config: unknown): void;

	getConfig(): unknown;

	getContextListeners(): ContextListenerCreator[] | undefined;
}

export default Driver;
