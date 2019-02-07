import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';

@Resolver('Task')
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query()
  async tasks(@Args('idUser') id: string) {
    return await this.taskService.tasks(id);
  }

  @Mutation()
  async createTask(
    @Args('subject') subject: string,
    @Args('description') description: string,
    @Args('user') user: string,
  ) {
    return await this.taskService.create({ subject, description, user });
  }
}
