import { EntityID } from "./entity-id";

export abstract class Entity<Props> {
	private _id: EntityID;
	protected props: Props;

	get id() {
		return this._id;
	}

	protected constructor(props: Props, id?: EntityID) {
		this.props = props;
		this._id = id ?? new EntityID();
	}

	public equals(entity: Entity<unknown>) {
		if (entity === this) {
			return true;
		}

		if (entity.id === this._id) {
			return true;
		}

		return false;
	}
}
