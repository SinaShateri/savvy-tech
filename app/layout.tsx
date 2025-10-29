import RootProvider from '@/components/providers/root';
import { IranSansX } from '@/utils/fonts';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

import './globals.css';

export const metadata = {
  title: 'Savvy Tech',
  description: 'Savvy Tech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${IranSansX.variable} font-iransansx font-normal antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
