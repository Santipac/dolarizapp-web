import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import HomePage from './sections/home';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'calculate',
        async lazy() {
          const { CalculatePage } = await import(
            '~/presentation/sections/calculate'
          );
          return { Component: CalculatePage };
        },
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </QueryClientProvider>
    </>
  );
}
