import { User } from "src/entities/user.entity";
import { Injectable } from "@nestjs/common";
import { DeepPartial } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { UserRepository } from "src/repositories/user.repository";
import { BaseService } from "./base.service";

@Injectable()
export class UserService extends BaseService<User>{
  constructor(
    private readonly userRepository: UserRepository
  ) {
    super(userRepository);
  };
};