import type { BaseError } from "./base-error";

export class ResourceNotFoundError extends Error implements BaseError {
	public readonly id: number;

	constructor() {
		super("resource.not.found");
		this.id = 404;
	}
}
