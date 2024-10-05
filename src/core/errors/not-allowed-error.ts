import type { BaseError } from "./base-error";

export class NotAllowedError extends Error implements BaseError {
	public readonly id: number;

	constructor() {
		super("not.allowed");
		this.id = 405;
	}
}
