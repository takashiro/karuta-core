import { ContextListener } from '@karuta/protocol';

import User from './User';

interface Driver {
	getName(): string;

	setConfig(config: unknown): void;

	getConfig(): unknown;

	createContextListeners(user: User): ContextListener[] | undefined;
}

export default Driver;
