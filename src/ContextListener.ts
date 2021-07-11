type RequestHandler = (req: unknown) => unknown;

interface ContextListener {
	readonly context: number;

	get?: RequestHandler;

	head?: RequestHandler;

	post?: RequestHandler;

	patch?: RequestHandler;

	put?: RequestHandler;

	delete?: RequestHandler;
}

export default ContextListener;
