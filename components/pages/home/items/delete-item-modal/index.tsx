'use client';

import Button from '@/components/shared/button';
import { Alert, Divider, Modal } from '@mantine/core';
import { IconAlertCircle, IconTrash } from '@tabler/icons-react';
import useHomeItemsDeleteItemModal from './use';

const HomeItemsDeleteItemModal = () => {
  const { itemIdtoDelete, getItem, handleDeleteItem, handleModalClose } =
    useHomeItemsDeleteItemModal();

  return (
    <Modal
      opened={!!itemIdtoDelete}
      onClose={handleModalClose}
      title='Delete Item'
      centered
      radius='lg'
      overlayProps={{
        blur: 5,
      }}
    >
      <div>
        <Alert
          variant='light'
          color='red'
          icon={<IconAlertCircle />}
        >
          Are you sure you want to delete &apos;{getItem(itemIdtoDelete)?.title}
          &apos;?
          <br />
          This action cannot be undone.
        </Alert>
        <Divider my={20} />
        <div className='flex gap-2 justify-end '>
          <Button
            variant='outlined-gray'
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button
            className='bg-red-600 hover:bg-red-700'
            onClick={handleDeleteItem}
            startIcon={<IconTrash className='size-5' />}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default HomeItemsDeleteItemModal;
