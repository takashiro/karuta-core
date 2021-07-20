import { ContextListener } from '@karuta/protocol';

import User from './User';

export interface DriverProfile {
	name: string;
	[key: string]: unknown;
}

interface Driver {
	getName(): string;

	setConfig(config: unknown): void;

	getConfig(): unknown;

	createContextListeners(user: User): ContextListener[] | undefined;
}

export default Driver;
