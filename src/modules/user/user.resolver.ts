import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async users() {
    return await this.userService.users();
  }

  @Mutation()
  async createUser(@Args('user') user) {
    return await this.userService.create(user);
  }
}
