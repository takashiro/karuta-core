type RequestHandler = (req: unknown) => Promise<unknown>;

interface ContextHandler {
	get?: RequestHandler;

	head?: RequestHandler;

	post?: RequestHandler;

	patch?: RequestHandler;

	put?: RequestHandler;

	delete?: RequestHandler;
}

export default ContextHandler;
