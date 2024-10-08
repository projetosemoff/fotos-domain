import type { BaseError } from "@/core/errors/base-error";

export class PhotographerAlreadyExistsError extends Error implements BaseError {
	public readonly id: number;

	constructor() {
		super("photographer.already.exists.error");
		this.id = 409;
	}
}
