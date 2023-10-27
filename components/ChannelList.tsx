import { Fragment } from 'react';

import Divider from './Divider';
import ToggleButton from './ToggleButton';

interface ChannelListProps {
  hotelId: string;
}

const channelList = [
  {
    id: '1',
    name: 'Channel 1',
    visibility: true,
  },
  {
    id: '2',
    name: 'Channel 2',
    visibility: false,
  },
];

function Header() {
  return (
    <div className="flex h-11 gap-4 bg-slate-50 px-4 py-3">
      <p className="shrink grow basis-0 text-sm font-semibold leading-tight text-zinc-900">
        Name
      </p>
      <p className="text-sm font-semibold leading-tight text-zinc-900">
        Visibility
      </p>
    </div>
  );
}

function ListBody() {
  return (
    <div className="flex flex-col">
      {channelList.map((channel) => (
        <Fragment key={channel.id}>
          <div className="flex gap-4 px-4 py-3">
            <p className="shrink grow basis-0 text-sm font-normal leading-tight text-slate-700">
              {channel.name}
            </p>
            <ToggleButton isActive={channel.visibility} />
          </div>
          <Divider />
        </Fragment>
      ))}
    </div>
  );
}

function ChannelList({ hotelId }: ChannelListProps) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-200 shadow">
      <Header />
      <Divider />
      <ListBody />
    </div>
  );
}

export default ChannelList;
