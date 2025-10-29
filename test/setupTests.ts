/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import React from 'react';

// Global mocks for next/router and next/image so individual tests don't need to repeat them.
// These are minimal, adjustable implementations suitable for typical unit tests.

// Mock next/router's useRouter
jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    back: jest.fn(),
  }),
}));

// Mock next/image to render a plain <img> in tests (keeps props like alt/src)
jest.mock('next/image', () => {
  const NextImage = (props: any) => {
    return React.createElement('img', props);
  };

  NextImage.defaultProps = {
    unoptimized: true,
  };

  return {
    __esModule: true,
    default: NextImage,
  };
});
