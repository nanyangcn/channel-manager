import { NextRequest, NextResponse } from 'next/server';

import { closeMongo, connectMongo, getDb } from 'libs/db';
import { Hotel } from 'types/hotel';

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
    const hotels = await collection.aggregate<Hotel>([
      {
        $match: {
          channels: id,
        },
      },
    ]).toArray();

    return NextResponse.json(hotels);
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
