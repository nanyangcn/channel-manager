import { Fragment } from 'react';

import getChannels from 'actions/getChannels';

import ToggleButton from 'components/ChannelList/components/ToggleButton';
import Divider from 'components/Divider';

export const revalidate = 0;

async function ListBody() {
  const channels = await getChannels();

  return (
    <div className="flex flex-col">
      {channels.map((channel, index) => (
        <Fragment key={channel.id}>
          <div className="flex items-center gap-4 px-4 py-3 dark:bg-additional-dark">
            <p
              className="flex h-5 shrink grow basis-0 items-center text-sm
                font-normal leading-tight text-text-secondary dark:text-text-secondary-dark"
            >
              {channel.name}
            </p>
            <ToggleButton channelId={channel.id} />
          </div>
          {index !== channels.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
}

export default ListBody;
