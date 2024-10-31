import { BaseEntity } from "src/entities/base.entity";
import { BaseRepository } from "src/repositories/base.repository";
import { DeepPartial } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class BaseService<T extends BaseEntity> {
  constructor(
    private readonly repository: BaseRepository<T>   
  ) {};

  async findAll(): Promise<T[]> {
    return await this.repository.findAll();
  };

  async findOneById(id: number): Promise<T> {
    return this.repository.findOneById(id);
  };

  async create(entity: DeepPartial<T>): Promise<T> {
    return await this.repository.createEntity(entity);
  };

  async update(id: number, entitiy: QueryDeepPartialEntity<T>): Promise<T> {
    return await this.repository.updateEntity(id, entitiy);
  };

  async delete(id: number): Promise<void> {
    return await this.repository.deleteEntity(id);
  };
};