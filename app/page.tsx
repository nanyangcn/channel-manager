import DropDownMenu from 'components/DropDownMenu';
import ChannelList from 'components/ChannelList';

import getHotels from 'actions/getHotels';

export const revalidate = 0;

export default async function Home() {
  const hotels = await getHotels();

  return (
    <div className="flex flex-col gap-5 p-6">
      <h2
        className="flex h-[30px] w-fit items-center text-2xl
        font-semibold leading-loose text-text-primary dark:text-text-primary-dark"
      >
        Channel manager
      </h2>
      <DropDownMenu label="Hotel" hotels={hotels} isRequired />
      <ChannelList />
    </div>
  );
}
