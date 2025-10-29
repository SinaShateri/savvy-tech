'use client';

import Button from '@/components/shared/button';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';
import HomeHeadNewItemModal from './new-item-modal';

const HomeHead = () => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <div className='flex items-center flex-col sm:flex-row gap-4 justify-between mb-8'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
          List Management
        </h1>
        <p className='text-gray-600'>
          Manage your items with ease and efficiency
        </p>
      </div>
      <Button
        className='px-6 py-3'
        startIcon={<IconPlus className='size-5' />}
        onClick={open}
      >
        Create New Item
      </Button>
      <HomeHeadNewItemModal
        opened={opened}
        close={close}
      />
    </div>
  );
};

export default HomeHead;
