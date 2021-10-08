import { ContextListener } from '@karuta/protocol';

import User from './User';

export interface DriverProfile<Config> {
	name: string;
	config: Config;
}

interface Driver<Config> {
	getName(): string;

	getProfile(): DriverProfile<Config>;

	updateConfig(config: Partial<Config>): void;

	getConfig(): Config;

	createContextListeners(user: User): ContextListener[] | undefined;
}

export default Driver;
