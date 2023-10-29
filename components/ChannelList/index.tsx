import Divider from 'components/Divider';
import Header from './components/Header';
import ListBody from './components/ListBody';

function ChannelList() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border-secondary shadow">
      <Header />
      <Divider />
      <ListBody />
    </div>
  );
}

export default ChannelList;
