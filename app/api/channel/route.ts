import { NextResponse } from 'next/server';

import { closeMongo, connectMongo, getDb } from 'libs/db';
import { Channel } from 'types/channel';

const collectionName = 'channels';

const GET = async () => {
  try {
    await connectMongo();
    const db = getDb();
    const collection = db.collection<Channel>(collectionName);
    const channels = await collection.find({}).toArray();

    return NextResponse.json(channels);
  } catch (error) {
    throw new Error((error as Error).message);
  } finally {
    await closeMongo();
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  GET,
};
