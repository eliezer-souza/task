import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly task: Model<Task>) {}

  async tasks(id: string): Promise<Task[]> {
    return await this.task.find({ user: id }).exec();
  }

  async create(data: {
    subject: string;
    description: string;
    user: string;
  }): Promise<Task> {
    return await this.task.create(data);
  }
}
