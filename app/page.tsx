import DropDownMenu from 'components/DropDownMenu';
import ChannelList from 'components/ChannelList';

const hotelList = [
  {
    id: 'A',
    name: 'Hotel A',
  },
  {
    id: 'B',
    name: 'Hotel B',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <h2 className="text-2xl font-semibold leading-loose">
        Channel manager
      </h2>
      <DropDownMenu label="Hotel" list={hotelList} isRequired />
      <ChannelList hotelId="A" />
    </div>
  );
}
