import useNotification from '@/hooks/notification/use';
import useListStore from '@/stores/list';

const useHomeItemsDeleteItemModal = () => {
  const notification = useNotification();
  const { removeItem, itemIdtoDelete, setItemIdToDelete, getItem } =
    useListStore();

  const handleDeleteItem = () => {
    removeItem(itemIdtoDelete);
    notification.success({ message: 'Item deleted successfully' });
    setItemIdToDelete('');
  };

  const handleModalClose = () => {
    setItemIdToDelete('');
  };

  return {
    itemIdtoDelete,
    getItem,
    handleDeleteItem,
    handleModalClose,
  };
};

export default useHomeItemsDeleteItemModal;
