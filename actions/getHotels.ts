'use server';

import { closeMongo, connectMongo, getDb } from 'libs/db';
import { Hotel } from 'types/hotel';

const collectionName = 'hotels';

const getHotels = async () => {
  try {
    await connectMongo();
    const db = getDb();
    const collection = db.collection<Hotel>(collectionName);
    const hotels = await collection.find({}).sort({ name: 1 }).toArray();
    const oIdKey = '_id';
    const newHotels = hotels.map((hotel) => ({
      id: hotel[oIdKey]?.toString(),
      name: hotel.name,
      channels: hotel.channels,
    }));

    return newHotels;
  } catch (error) {
    throw new Error((error as Error).message);
  } finally {
    await closeMongo();
  }
};

export default getHotels;
