import { AbstractRepository } from "@/core/repositories/abstract-repository";
import type { ClientPhotographer } from "../../enterprise/entities/client-photographer";

export abstract class ClientPhotographerRepository extends AbstractRepository<ClientPhotographer> {}
