import useListStore from '@/stores/list';
import { ListItem } from '@/stores/list/type';
import formatISODate from '@/utils/date/format-iso-date';
import { IconEdit, IconTrash } from '@tabler/icons-react';

const HomeItemsItem = ({ item }: { item: ListItem }) => {
  const { setItemIdToEdit, setItemIdToDelete } = useListStore();

  return (
    <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 group'>
      <div className='flex flex-col sm:flex-row gap-5 items-start justify-between'>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center space-x-2 mb-2'>
            <span className='text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
              {formatISODate(item.createdAt)}
            </span>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-2 lg:group-hover:text-blue-600 transition-colors'>
            {item.title}
          </h3>
          <p className='text-gray-600 text-sm leading-relaxed'>
            {item.subtitle}
          </p>
        </div>
        <div className='flex items-center space-x-2 ml-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 self-center lg:self-auto'>
          <button
            onClick={() => {
              setItemIdToEdit(item.id);
            }}
            className='inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent hover:bg-blue-100 border border-blue-700 lg:border-transparent text-blue-700 focus:ring-blue-500 px-3 py-1.5 text-sm gap-1.5  '
          >
            <span className='flex items-center justify-center'>
              <IconEdit className='size-5' />
            </span>
            Edit
          </button>
          <button
            onClick={() => {
              setItemIdToDelete(item.id);
            }}
            className='inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent hover:bg-red-100 border border-red-700 lg:border-transparent text-red-600 focus:ring-red-500 px-3 py-1.5 text-sm gap-1.5  '
          >
            <span className='flex items-center justify-center'>
              <IconTrash className='size-5' />
            </span>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItemsItem;
