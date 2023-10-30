'use server';

import { closeMongo, connectMongo, getDb } from 'libs/db';
import { Channel } from 'types/channel';

const collectionName = 'channels';

const getChannels = async () => {
  try {
    await connectMongo();
    const db = getDb();
    const collection = db.collection<Channel>(collectionName);
    const channels = await collection.find({}).sort({ name: 1 }).toArray();
    const oIdKey = '_id';
    const sortedChannels = channels.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    const newChannels = sortedChannels.map((channel) => ({
      id: channel[oIdKey]?.toString(),
      name: channel.name,
    }));
    return newChannels;
  } catch (error) {
    throw new Error((error as Error).message);
  } finally {
    await closeMongo();
  }
};

export default getChannels;
