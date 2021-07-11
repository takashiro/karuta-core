import Driver from './Driver';
import User from './User';

interface Room {
	/**
	 * Gets room id
	 */
	getId(): number;

	/**
	 * @return Room owner
	 */
	getOwner(): User;

	/**
	 * Find a user by user id
	 * @param id user id
	 */
	findUser(id: number): User | undefined;

	/**
	 * @return user list
	 */
	getUsers(): User[];

	/**
	 * Add a user into this room
	 * @param user
	 */
	addUser(user: User): void;

	/**
	 * Remove a user from this room
	 * @param user
	 */
	removeUser(user: User): void;

	/**
	 * Broadcast a command to all users in this room
	 * @param command
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	broadcast(command: number): void;

	/**
	 * Broadcast a command to all users in this room
	 * @param command
	 * @param args
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	broadcast(command: number, args: any): void;

	/**
	 * Broadcast a command to all users except one
	 * @param except
	 * @param command
	 */
	broadcastExcept(except: User, command: number): void;

	/**
	 * Broadcast a command to all users except one
	 * @param except
	 * @param command
	 * @param args
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	broadcastExcept(except: User, command: number, args: any): void;

	/**
	 * @return room configuration
	 */
	getConfig(): unknown;

	/**
	 * Update room configuration
	 * @param config
	 */
	updateConfig(config: unknown): void;

	/**
	 * @return room driver
	 */
	getDriver(): Driver | undefined;
}

export default Room;
