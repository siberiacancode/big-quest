import { AddressCard } from '../AddressCard/AddressCard';

import { addresses } from './constants/fakeData';

export const AddressesList = () => (
  <div className='m-3 mt-4 flex flex-wrap gap-5'>
    {addresses.map((address, index) => (
      <AddressCard
        key={index}
        location={address.location}
        street={address.street}
        house={address.house}
        details={address.details}
        workingTime={address.workingTime}
      />
    ))}
  </div>
);
