'use client';

import Button from '@/components/shared/button';
import { Divider, Modal, TextInput } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import useHomeItemsEditItemModal from './use';

const HomeItemsEditItemModal = () => {
  const { form, handleSubmit, handleModalClose, itemIdToEdit } =
    useHomeItemsEditItemModal();

  return (
    <Modal
      opened={!!itemIdToEdit}
      onClose={handleModalClose}
      title='Edit Item'
      centered
      radius={'lg'}
      overlayProps={{
        blur: 5,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label='Title'
          placeholder='Enter title'
          radius='md'
          {...form.getInputProps('title')}
        />
        <TextInput
          label='Subtitle'
          placeholder='Enter subtitle'
          radius='md'
          mt={16}
          {...form.getInputProps('subtitle')}
        />
        <Divider my={16} />
        <div className='flex gap-2 justify-end'>
          <Button
            variant='outlined-gray'
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button
            type='submit'
            startIcon={<IconEdit className='size-5' />}
          >
            Edit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default HomeItemsEditItemModal;
