'use server';

import { ObjectId } from 'mongodb';

import { closeMongo, connectMongo, getDb } from 'libs/db';
import { Hotel } from 'types/hotel';

const collectionName = 'hotels';

interface PutHotelByIdProps {
  hotelId: string;
  channelId: string;
  action: 'push' | 'pull';
}

const putHotelById = async ({ hotelId, channelId, action }: PutHotelByIdProps) => {
  try {
    await connectMongo();
    const db = getDb();
    const collection = db.collection<Hotel>(collectionName);
    const filter = { _id: new ObjectId(hotelId) };
    const update = action === 'push'
      ? { $push: { channels: channelId } }
      : { $pull: { channels: channelId } };
    return await collection.updateOne(filter, update);
  } catch (error) {
    throw new Error((error as Error).message);
  } finally {
    await closeMongo();
  }
};

export default putHotelById;
