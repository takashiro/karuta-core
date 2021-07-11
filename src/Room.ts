import { Method } from '@karuta/protocol';

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
