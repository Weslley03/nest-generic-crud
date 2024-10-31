import { Injectable } from "@nestjs/common";
import { BaseEntity } from "src/entities/base.entity";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { 
  DeepPartial, 
  EntityManager, 
  EntityTarget, 
  FindOptionsWhere, 
  QueryRunner, 
  Repository 
} from "typeorm";

@Injectable()
export abstract class BaseRepository<T extends BaseEntity> extends Repository<T> {

  constructor(
    target: EntityTarget<T>, 
    manager: EntityManager, 
    queryRunner?: QueryRunner
  ) {
    super(target, manager, queryRunner);
  }

  async findAll(): Promise<T[]> { 
    return await this.find();
  };

  async findOneById(id: number): Promise<T | null> {
    return await this.findOne({ where: { id } as FindOptionsWhere<T> });  
  };

  async createEntity(entity: DeepPartial<T>): Promise<T> {
    const entityNew = this.create(entity);
    return await this.save(entityNew);
  };

  async updateEntity(id: number, entity: QueryDeepPartialEntity<T>): Promise<T | null> {
    await this.update(id, entity);
    return await this.findOneById(id);
  };

  async deleteEntity(id: number): Promise<void> {
    await this.delete(id);
  };
};