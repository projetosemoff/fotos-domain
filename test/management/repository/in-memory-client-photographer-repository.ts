import { AbstractRepositoryImpl } from "@/core/test/abstract-repository-impl";
import type { ClientPhotographer } from "@/domain/management/enterprise/entities/client-photographer";

export class InMemoryClientPhotographerRepository extends AbstractRepositoryImpl<ClientPhotographer> {}
