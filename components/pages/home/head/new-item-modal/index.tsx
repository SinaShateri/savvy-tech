'use client';

import Button from '@/components/shared/button';
import { Divider, Modal, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { HomeHeadNewItemModalProps } from './types';
import useHomeHeadNewItemModal from './use';

const HomeHeadNewItemModal = ({ close, opened }: HomeHeadNewItemModalProps) => {
  const { form, formSubmitHandler, onModalClose } = useHomeHeadNewItemModal({
    close,
  });

  return (
    <Modal
      opened={opened}
      onClose={onModalClose}
      title='Create New Item'
      centered
      radius='lg'
      overlayProps={{
        blur: 5,
      }}
    >
      <form onSubmit={form.onSubmit(formSubmitHandler)}>
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
            onClick={onModalClose}
          >
            Cancel
          </Button>
          <Button
            type='submit'
            startIcon={<IconPlus className='size-5' />}
          >
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default HomeHeadNewItemModal;
