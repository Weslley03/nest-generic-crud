import { User } from "src/entities/user.entity";
import { Injectable } from "@nestjs/common";
import { DeepPartial } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { UserRepository } from "src/repositories/user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {};

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  };

  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneById(id);
  };

  async create(userData: DeepPartial<User>): Promise<User> {
    return await this.userRepository.createEntity(userData);
  };

  async update(id: number, userData: QueryDeepPartialEntity<User>): Promise<User | null> {
    return await this.userRepository.updateEntity(id, userData);
  };

  async delete(id: number): Promise<void> {
    return await this.userRepository.deleteEntity(id);
  };
};