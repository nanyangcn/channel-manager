import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

import { closeMongo, connectMongo, getDb } from 'libs/db';
import { Hotel } from '../../../../types/hotel';

const collectionName = 'hotels';

const GET = async (
  _req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const { id } = params;
  try {
    await connectMongo();
    const db = getDb();
    const collection = db.collection<Hotel>(collectionName);
    const filter = { _id: new ObjectId(id) };
    const hotel = await collection.findOne(filter);

    return NextResponse.json(hotel);
  } catch (error) {
    throw new Error((error as Error).message);
  } finally {
    await closeMongo();
  }
};

const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const { id } = params;
  const channelId = await req.json() as string;

  try {
    await connectMongo();
    const db = getDb();
    const collection = db.collection<Hotel>(collectionName);
    const filter = { _id: new ObjectId(id) };
    const hotel = await collection.findOne(filter);
    const update = hotel?.channels.includes(channelId)
      ? { $pull: { channels: channelId } }
      : { $push: { channels: channelId } };
    await collection.updateOne(filter, update);

    return NextResponse.json(await collection.findOne(filter));
  } catch (error) {
    throw new Error((error as Error).message);
  } finally {
    await closeMongo();
  }
};

export {
  GET,
  PUT,
};
