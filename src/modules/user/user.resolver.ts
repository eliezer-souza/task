import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async users() {
    return await this.userService.users();
  }

  @Query()
  async me(@Args('id') id: string) {
    return await this.userService.me(id);
  }

  @Mutation()
  async create(@Args('user') user) {
    return await this.userService.create(user);
  }

  @Mutation()
  async delete(@Args('id') id: string) {
    return await this.userService.delete(id);
  }
}
