import { createRoute } from '@tanstack/react-router';
import { Home } from '../ui/home/Home';
import { rootRouter } from './root';

export const homeRoute = createRoute({
  path: '/',
  component: () => <Home />,
  getParentRoute: () => rootRouter,
});
