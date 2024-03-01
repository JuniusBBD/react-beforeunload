import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { rootRouter } from './routes/root';
import {
  RouterProvider,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { About } from './ui/about/About';
import { Home } from './ui/home/Home';

const routes = [
  {
    path: '/about',
    component: <About />,
  },
  {
    path: '/',
    component: <Home />,
  },
];

const _routes = routes.map((route) =>
  createRoute({
    path: route.path,
    component: () => route.component,
    getParentRoute: () => rootRouter,
  })
);

const routeTree = rootRouter.addChildren(_routes);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
