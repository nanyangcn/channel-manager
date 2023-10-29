import type { ObjectId } from 'mongodb';

export interface Channel {
  _id?: ObjectId;
  id?: string;
  name: string;
}
