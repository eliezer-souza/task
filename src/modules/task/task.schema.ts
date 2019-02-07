import { Schema, Document } from 'mongoose';

export interface Task extends Document {
  subject: string;
  description: string;
  user: string;
}

export const TaskSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});
