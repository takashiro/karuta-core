import { Method } from '@karuta/protocol';

import Driver from './Driver';
import User, { UserProfile } from './User';

export interface RoomConfiguration {
	name?: string;
}

export interface RoomProfile {
	id: number;
	owner: UserProfile;
	driver?: string;
	config: RoomConfiguration;
}

interface Room {
	on(event: 'close', listener: () => void): this;

	once(event: 'close', listener: () => void): this;

	off(event: 'close', listener: () => void): this;

	emit(event: 'close'): boolean;

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
	 * @param context
	 */
	broadcast(method: Method, context: number): void;

	/**
	 * Broadcast a command to all users in this room
	 * @param method
	 * @param context
	 * @param args
	 */
	broadcast(method: Method, context: number, args: unknown): void;

	/**
	 * Broadcast a command to all users except one
	 * @param except
	 * @param method
	 * @param context
	 */
	broadcastExcept(except: User, method: Method, context: number): void;

	/**
	 * Broadcast a command to all users except one
	 * @param except
	 * @param method
	 * @param context
	 * @param args
	 */
	broadcastExcept(except: User, method: Method, context: number, args: unknown): void;

	/**
	 * @return Basic information of the room
	 */
	getProfile(): RoomProfile;

	/**
	 * @return room configuration
	 */
	getConfig(): RoomConfiguration;

	/**
	 * Update room configuration
	 * @param config
	 */
	updateConfig(config: Partial<RoomConfiguration>): void;

	/**
	 * @return room driver
	 */
	getDriver(): Driver<unknown> | undefined;

	/**
	 * Load a driver from Node.js modules.
	 * @param name driver name
	 */
	loadDriver(name: string): boolean;

	/**
	 * Unload the existing driver.
	 * @return Whether the existing driver is unloaded.
	 */
	unloadDriver(): boolean;
}

export default Room;
