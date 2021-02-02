import User from './User';

interface Action<Request, Response> {
	command: number;

	/**
	 * @return The command this action is bound to.
	 */
	getCommand(): number;

	/**
	 *
	 * @param user The user who sends the request
	 * @param req Request parameters
	 * @return Response to the client
	 */
	process(user: User, req: Request): Promise<Response>;
}

export default Action;
