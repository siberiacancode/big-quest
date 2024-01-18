import { Button } from '@/components/ui';
import { getUser } from '@/utils/api';

import { User } from './User';

const Home = async () => {
  const user = await getUser();
  console.log('@', user);

  return (
    <main>
      <Button>test</Button>
      {user.name} === <User />
    </main>
  );
};

export default Home;
