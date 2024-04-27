import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return await this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() updatedUser: User): Promise<User> {
    return await this.userService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
