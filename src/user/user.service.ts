import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async users(): Promise<User[]> {
    return await this.user.find({}).exec();
  }
}
