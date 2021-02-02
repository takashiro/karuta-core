import Room from './Room';
import Driver from './Driver';
import UserProfile from './UserProfile';

interface User {
	/**
	 * Gets user id
	 */
	getId(): number;

	/**
	 * Gets user name
	 */
	getName(): string | undefined;

	/**
	 * Gets the current room
	 */
	getRoom(): Room | null;

	/**
	 * Gets the driver in the room
	 */
	getDriver(): Driver | null;

	/**
	 * @return whether the user is connected
	 */
	isConnected(): boolean;

	/**
	 * @return brief introduction to the user
	 */
	getProfile(): UserProfile;

	/**
	 * Send a command to the client
	 * @param command
	 * @return true iff. the command was sent
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	send(command: number): boolean;

	/**
	 * Send a command to the client
	 * @param command
	 * @param args
	 * @return true iff. the command was sent
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	send(command: number, args: any): boolean;

	/**
	 * Wait for a command. Timeout: 15 secs
	 * @param command
	 * @return arguments of the command
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	receive(command: number, timeout: number): Promise<any>;

	/**
	 * Wait for a command
	 * @param command command
	 * @param timeout milliseconds
	 * @return arguments of the command
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	receive(command: number, timeout: number): Promise<any>;

	/**
	 * Send a command to the client and return the response. Timeout: 15s
	 * @param command
	 * @return the promise that resolves user response
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	request(command: number): Promise<any>;

	/**
	 * Send a command to the client and return the response. Timeout: 15s
	 * @param command
	 * @param args
	 * @return the promise that resolves user response
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	request(command: number, args: any): Promise<any>;

	/**
	 * Send a command to the client and return the response
	 * @param command
	 * @param args
	 * @param timeout
	 * @return the promise that resolves user response
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	request(command: number, args: any, timeout: number): Promise<any>;
}

export default User;
