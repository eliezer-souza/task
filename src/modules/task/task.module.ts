import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './task.schema';
import { TaskResolver } from './task.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  providers: [TaskService, TaskResolver],
})
export class TaskModule {}
