import {
  NotificationData,
  notifications,
  NotificationsStore,
} from '@mantine/notifications';
import {
  IconCircleXFilled,
  IconSquareRoundedCheckFilled,
} from '@tabler/icons-react';

const useNotification = () => {
  const error = (
    notification: NotificationData,
    store?: NotificationsStore,
  ) => {
    notifications.show(
      {
        ...notification,
        color: 'red',
        title: '',
        classNames: {
          root: 'rounded-2xl!',
          icon: 'bg-transparent!',
          description: 'text-neutral-800! text-base!',
        },
        icon: <IconCircleXFilled className='h-5 w-5 text-red-500' />,
      },
      store,
    );
  };
  const success = (
    notification: NotificationData,
    store?: NotificationsStore,
  ) => {
    notifications.show(
      {
        ...notification,
        color: 'green',
        title: '',
        classNames: {
          root: 'rounded-2xl!',
          icon: 'bg-transparent!',
          description: 'text-neutral-800! text-base!',
        },
        icon: (
          <IconSquareRoundedCheckFilled className='h-5 w-5 text-green-500' />
        ),
      },
      store,
    );
  };
  return { success, error };
};
export default useNotification;
