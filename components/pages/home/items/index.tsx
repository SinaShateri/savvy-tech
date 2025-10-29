'use client';

import useListStore from '@/stores/list';
import HomeItemsDeleteItemModal from './delete-item-modal';
import HomeItemsEditItemModal from './edit-item-modal';
import HomeItemsItem from './item';

const HomeItems = () => {
  const { items } = useListStore();

  return (
    <div className='space-y-4 '>
      {items.map((item, index) => (
        <HomeItemsItem
          key={index}
          item={item}
        />
      ))}
      {items.length === 0 && (
        <div className='border border-gray-200 rounded-lg p-4'>
          <p className='text-center'>No items found. </p>
        </div>
      )}
      <HomeItemsEditItemModal />
      <HomeItemsDeleteItemModal />
    </div>
  );
};

export default HomeItems;
