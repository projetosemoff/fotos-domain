import { AbstractRepositoryImpl } from "@/core/test/abstract-repository-impl";
import type { Photographer } from "@/domain/photos/enterprise/entities/photographer";

export class InMemoryPhotographerRepository<
	T extends Photographer,
> extends AbstractRepositoryImpl<T> {
	async findByEmail(email: string): Promise<T | null> {
		const item = this.items.find((item) => item.email.toString() === email);
		return item || null;
	}
}
