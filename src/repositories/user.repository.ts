import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base.repository";
import { EntityManager } from "typeorm";
import { User } from "src/entities/user.entity";

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(manager: EntityManager) {
    super(User, manager);
  };
};