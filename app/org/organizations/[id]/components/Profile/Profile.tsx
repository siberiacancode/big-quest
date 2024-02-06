import { Journal, ProfileInformation, Statistics } from './components';

export const Profile = ({ data }) => {
  return (
    <div className='mt-4 flex justify-center gap-[22px] smx:flex-col'>
      <ProfileInformation organization={data} />
      <div className='flex w-1/2 flex-col gap-[22px] smx:w-full'>
        <Statistics />
        <Journal />
      </div>
    </div>
  );
};
