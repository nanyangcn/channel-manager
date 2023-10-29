import { Fragment } from 'react';

import getChannels from 'actions/getChannels';

import ToggleButton from 'components/ChannelList/components/ToggleButton';
import Divider from 'components/Divider';

export const revalidate = 0;

async function ListBody() {
  const channels = await getChannels();

  return (
    <div className="flex flex-col">
      {channels.map((channel) => (
        <Fragment key={channel.id}>
          <div className="flex items-center gap-4 px-4 py-3">
            <p
              className="flex h-5 shrink grow basis-0 items-center text-sm
                font-normal leading-tight text-text-secondary"
            >
              {channel.name}
            </p>
            <ToggleButton channelId={channel.id} />
          </div>
          <Divider />
        </Fragment>
      ))}
    </div>
  );
}

export default ListBody;
