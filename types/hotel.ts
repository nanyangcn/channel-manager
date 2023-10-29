import type { ObjectId } from 'mongodb';

export interface Hotel {
  _id?: ObjectId;
  id?: string;
  name: string;
  channels: string[]
}
