'use client';

import useListStore from '@/stores/list';
import { getItemsCountThisWeek } from '@/utils/date/get-items-count-this-week';
import { IconCalendarWeek, IconFileDescription } from '@tabler/icons-react';

const HomeAnalytics = () => {
  const { items } = useListStore();

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
      <div className='bg-white rounded-xl border border-gray-200 p-6'>
        <div className='flex items-center'>
          <div className='w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center'>
            <IconFileDescription />
          </div>
          <div className='ml-4'>
            <p className='text-sm font-medium text-gray-600'>Total Items</p>
            <p className='text-2xl font-bold text-gray-900'>{items.length}</p>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-xl border border-gray-200 p-6'>
        <div className='flex items-center'>
          <div className='w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center'>
            <IconCalendarWeek />
          </div>
          <div className='ml-4'>
            <p className='text-sm font-medium text-gray-600'>This Week</p>
            <p className='text-2xl font-bold text-gray-900'>
              {getItemsCountThisWeek(items)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAnalytics;
