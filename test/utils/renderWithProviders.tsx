import { MantineProvider } from '@mantine/core';
import { render, RenderOptions } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import type { NextRouter } from 'next/router';
import React from 'react';

const defaultRouter: Partial<NextRouter> = {
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  push: async () => true,
  replace: async () => true,
  prefetch: async () => undefined,
  back: () => undefined,
};

export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { router?: Partial<NextRouter> }
) {
  const router = options?.router
    ? { ...defaultRouter, ...options.router }
    : defaultRouter;

  const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <RouterContext.Provider value={router as NextRouter}>
      <MantineProvider>{children}</MantineProvider>
    </RouterContext.Provider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
}

// Re-export everything from testing-library
export * from '@testing-library/react';
// Override render
export { renderWithProviders as render };
