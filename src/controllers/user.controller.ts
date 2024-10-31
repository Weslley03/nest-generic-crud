import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {};

  @Get()
  findAll() {
    return this.userService.findAll();
  };

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOneById(id);
  };

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  };

  @Put(':id')
  update(
    @Param('id')
    id: number,
    @Body()
    user: User
  ) {
    return this.userService.update(id, user);
  };

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  };
};