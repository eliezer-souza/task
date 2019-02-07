import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserResolver } from './user.resolver';
import { TaskService } from '../task/task.service';
import { TaskSchema } from '../task/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  providers: [UserService, UserResolver, TaskService],
})
export class UserModule {}
