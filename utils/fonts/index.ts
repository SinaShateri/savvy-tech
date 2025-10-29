import localFont from 'next/font/local';

const IranSansX = localFont({
  src: [
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/IranSansX/IRANSansX-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-iransansx',
  preload: true,
});

export { IranSansX };
