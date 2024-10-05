import type { BaseError } from "./base-error";

export class InternalServerError extends Error implements BaseError {
	public readonly id: number;

	constructor() {
		super("internal.server.error");
		this.id = 500;
	}
}
