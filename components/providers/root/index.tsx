import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const RootProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <MantineProvider defaultColorScheme='light'>
      <div className='flex min-h-screen w-full flex-col items-center justify-start'>
        {children}
      </div>
      <Notifications
        position={'top-right'}
        autoClose={5000}
        containerWidth={300}
        limit={3}
      />
    </MantineProvider>
  );
};

export default RootProvider;
