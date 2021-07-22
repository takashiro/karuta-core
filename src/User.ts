import { Method } from '@karuta/protocol';

import Lobby from './Lobby';
import Room from './Room';
import Driver from './Driver';

export interface UserProfile {
	id: number;
	name?: string;
}

interface User {
	on(event: 'disconnected', listener: () => void): this;

	once(event: 'disconnected', listener: () => void): this;

	off(event: 'disconnected', listener: () => void): this;

	emit(event: 'disconnected'): boolean;

	/**
	 * Gets user id
	 */
	getId(): number;

	/**
	 * Gets user name
	 */
	getName(): string | undefined;

	/**
	 * Sets user name
	 * @param name
	 */
	setName(name: string): void;

	/**
	 * Gets the current room
	 */
	getRoom(): Room | undefined;

	/**
	 * Sets the current room
	 * @param room
	 */
	setRoom(room?: Room): void;

	/**
	 * Gets the lobby
	 */
	getLobby(): Lobby;

	/**
	 * Gets the driver in the room
	 */
	getDriver(): Driver<unknown> | undefined;

	/**
	 * @return whether the user is connected
	 */
	isConnected(): boolean;

	/**
	 * Log out the user.
	 */
	logout(): void;

	/**
	 * @return brief introduction to the user
	 */
	getProfile(): UserProfile;

	/**
	 * Sets maximum time limit for each request.
	 * @param timeout
	 */
	setRequestTimeout(timeout?: number): void;

	/**
	 * @returns Maximum time limit for a request.
	 */
	getRequestTimeout(): number | undefined;

	/**
	 * Get something from the user.
	 * @param context
	 * @param params
	 */
	get(context: number, params?: unknown): Promise<unknown>;

	/**
	 * Get meta information of something from the user.
	 * @param context
	 * @param params
	 */
	head(context: number, params?: unknown): Promise<unknown>;

	/**
	 * Post changes to the user.
	 * @param context
	 * @param params
	 */
	post(context: number, params?: unknown): Promise<unknown>;

	/**
	 * Put something on the user.
	 * @param context
	 * @param params
	 */
	put(context: number, params?: unknown): Promise<unknown>;

	/**
	 * Patch something on the user.
	 * @param context
	 * @param params
	 */
	patch(context: number, params?: unknown): Promise<unknown>;

	/**
	 * Delete something from the user.
	 * @param context
	 * @param params
	 */
	delete(context: number, params?: unknown): Promise<unknown>;

	/**
	 * Send a request
	 * @param method
	 * @param context
	 * @param params
	 */
	request(method: Method, context: number, params?: unknown): Promise<unknown>;

	/**
	 * Send a one-way notification to the user.
	 * @param context
	 * @param params
	 */
	notify(method: Method, context: number, params?: unknown): void;
}

export default User;
