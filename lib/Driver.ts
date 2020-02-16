import Action from './Action';

interface Driver {
	getName(): string;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setConfig(config: any): void;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getConfig(): any;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getAction(command: number): Action<any, any>;
}

export default Driver;
