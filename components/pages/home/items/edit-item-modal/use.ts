import useNotification from '@/hooks/notification/use';
import useListStore from '@/stores/list';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import { useEffect } from 'react';
import { homeHeadEditItemSchema } from './utils';

/**
 * A hook that provides a form for editing an item.
 *
 * @returns an object that contains the form, a function to handle form submission, a function to handle modal close, and the item ID to edit.
 */
const useHomeItemsEditItemModal = () => {
  const notification = useNotification();
  const { updateItem, itemIdToEdit, setItemIdToEdit, getItem } = useListStore();
  const item = getItem(itemIdToEdit);

  const form = useForm({
    initialValues: {
      title: '',
      subtitle: '',
    },
    validate: yupResolver(homeHeadEditItemSchema),
    validateInputOnBlur: true,
  });

  const handleSubmit = (values: typeof form.values) => {
    updateItem(itemIdToEdit, values);
    notification.success({ message: 'Item updated successfully' });
    form.reset();
    setItemIdToEdit('');
  };

  const handleModalClose = () => {
    form.reset();
    setItemIdToEdit('');
  };

  useEffect(() => {
    if (!item) return;

    form.setValues({
      title: item?.title,
      subtitle: item?.subtitle,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return {
    form,
    handleSubmit,
    handleModalClose,
    itemIdToEdit,
  };
};
export default useHomeItemsEditItemModal;
