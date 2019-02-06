import { Schema, Document, HookNextFunction } from 'mongoose';
import { hash } from 'bcryptjs';

export interface User extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
}

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

UserSchema.pre<User>('save', async function hashPassword(
  next: HookNextFunction,
) {
  const user: User = this;
  if (!user.isModified('password')) {
    next();
  } else {
    this.password = await hash(this.password, 8);
  }
});
