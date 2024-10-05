import type { BaseError } from "./base-error";

export class ConflictError extends Error implements BaseError {
	public readonly id: number;

	constructor() {
		super("conflict.error");
		this.id = 409;
	}
}
