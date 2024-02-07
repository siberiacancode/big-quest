import { AddressCard } from '../AddressCard/AddressCard';

interface AddressesListProps {
  addresses: OrganizationAddresses[];
}

export const AddressesList = ({ addresses }: AddressesListProps) => (
  <div className='m-3 mt-4 flex flex-wrap gap-5'>
    {addresses.map((address, index) => (
      <AddressCard key={index} address={address} />
    ))}
  </div>
);
