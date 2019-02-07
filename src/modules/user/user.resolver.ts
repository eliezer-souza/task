import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { TaskService } from '../task/task.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly taskService: TaskService,
  ) {}

  @Query()
  async users() {
    return await this.userService.users();
  }

  @Query()
  async me(@Args('id') id: string) {
    return await this.userService.me(id);
  }

  @Mutation()
  async createUser(@Args('user') user) {
    return await this.userService.create(user);
  }

  @Mutation()
  async deleteUser(@Args('id') id: string) {
    return await this.userService.delete(id);
  }

  @ResolveProperty()
  async tasks(@Parent() user) {
    const { id } = user;
    return await this.taskService.tasks(id);
  }
}
