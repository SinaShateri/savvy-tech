import useNotification from '@/hooks/notification/use';
import useListStore from '@/stores/list';
import { useForm } from '@mantine/form';
import { yupResolver } from 'mantine-form-yup-resolver';
import { UseHomeHeadNewItemModalProps } from './types';
import { homeHeadNewItemSchema } from './utils';

/**
 * A hook that provides a form for creating a new item.
 *
 * @returns an object that contains the form and a function to handle form submission.
 */
const useHomeHeadNewItemModal = ({ close }: UseHomeHeadNewItemModalProps) => {
  const notification = useNotification();
  const { addItem } = useListStore();
  const form = useForm({
    initialValues: {
      title: '',
      subtitle: '',
    },
    validate: yupResolver(homeHeadNewItemSchema),
    validateInputOnBlur: true,
  });

  /**
   * A function that handles form submission.
   * It adds a new item and resets the form.
   * @param {values} - The form values.
   */
  const formSubmitHandler = (values: typeof form.values) => {
    addItem(values);
    notification.success({ message: 'Item added successfully' });
    form.reset();
    close();
  };

  const onModalClose = () => {
    close();
    form.reset();
  };

  return {
    form,
    formSubmitHandler,
    onModalClose,
  };
};

export default useHomeHeadNewItemModal;
