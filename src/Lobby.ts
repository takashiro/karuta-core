import Room from './Room';

interface Lobby {
	/**
	 * Find a room by room id
	 * @param id room id
	 */
	findRoom(id: number): Room | undefined;

	/**
	 * @return all rooms
	 */
	getRooms(): Room[];

	/**
	 * Add a new room
	 * @param room
	 */
	addRoom(room: Room): void;
}

export default Lobby;
