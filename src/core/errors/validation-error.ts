import type { BaseError } from "./base-error";

export class ValidationError extends Error implements BaseError {
	public readonly id: number;

	constructor() {
		super("validation.error");
		this.id = 400;
	}
}
