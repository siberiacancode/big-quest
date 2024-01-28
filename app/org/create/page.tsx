'use client';

import React from 'react';

import type { ComboBoxItemType } from '@/components/ui';
import { Combobox } from '@/components/ui';

const items: ComboBoxItemType[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' }
];

const CreateOrganization = () => {
  const [item, setItem] = React.useState<string | undefined>();

  return (
    <Combobox className='w-full' items={items} onSelect={(value) => setItem(value)} value={item} />
  );
};

export default CreateOrganization;
