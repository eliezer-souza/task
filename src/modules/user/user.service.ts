import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async users(): Promise<User[]> {
    return await this.user.find({}).exec();
  }

  async me(id: string): Promise<User> {
    return await this.user.findById(id);
  }

  async create(data: User): Promise<User> {
    return await this.user.create(data);
  }

  async delete(id: string): Promise<User> {
    return await this.user.findByIdAndRemove(id);
  }
}
