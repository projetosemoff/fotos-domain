import type { BaseError } from "./base-error";

export class BadRequestError extends Error implements BaseError {
	public readonly id: number;

	constructor() {
		super("bad.request.error");
		this.id = 400;
	}
}
