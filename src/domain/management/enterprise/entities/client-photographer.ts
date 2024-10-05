import { Entity } from "@/core/entities/entity";
import type { EntityID } from "@/core/entities/entity-id";
import type { Optional } from "@/core/types/optional";

interface ClientPhotographerProps {
	photographerId: EntityID;
	email: string;
	createdAt: Date;
	updatedAt?: Date;
}

export class ClientPhotographer extends Entity<ClientPhotographerProps> {
	get email(): string {
		return this.props.email;
	}

	set email(email: string) {
		this.props.email = email;
		this.touch();
	}

	private touch() {
		this.props.updatedAt = new Date();
	}

	static create(
		props: Optional<ClientPhotographerProps, "createdAt">,
		id?: EntityID
	) {
		const clientPhotographer: ClientPhotographer = new ClientPhotographer(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id
		);

		return clientPhotographer;
	}
}
