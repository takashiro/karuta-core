import Room from './Room';
import Driver from './Driver';

export interface UserProfile {
	id: number;
	name?: string;
}

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
	getRoom(): Room | undefined;

	/**
	 * Gets the driver in the room
	 */
	getDriver(): Driver | undefined;

	/**
	 * @return whether the user is connected
	 */
	isConnected(): boolean;

	/**
	 * @return brief introduction to the user
	 */
	getProfile(): UserProfile;
}

export default User;
