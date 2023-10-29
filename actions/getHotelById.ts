'use server';

import { ObjectId } from 'mongodb';

import { closeMongo, connectMongo, getDb } from 'libs/db';
import { Hotel } from 'types/hotel';

const collectionName = 'hotels';

const getHotelById = async (hotelId: string) => {
  try {
    await connectMongo();
    const db = getDb();
    const collection = db.collection<Hotel>(collectionName);
    const filter = { _id: new ObjectId(hotelId) };
    const hotel = await collection.findOne(filter);
    if (!hotel) {
      return null;
    }
    const oIdKey = '_id';
    const newHotel = {
      id: hotel[oIdKey]?.toString(),
      name: hotel.name,
      channels: hotel.channels,
    };

    return newHotel;
  } catch (error) {
    throw new Error((error as Error).message);
  } finally {
    await closeMongo();
  }
};

export default getHotelById;
