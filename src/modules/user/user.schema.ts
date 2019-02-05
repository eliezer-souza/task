import { Schema, HookNextFunction } from 'mongoose';
import { hash } from 'bcryptjs';
import { User } from './user.model';

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const hashPassword = async function(next: HookNextFunction) {
  const user: User = this;
  if (!user.isModified('password')) {
    next();
  } else {
    this.password = await hash(this.password, 8);
  }
};

UserSchema.pre('save', hashPassword);
