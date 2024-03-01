import { createRoute } from '@tanstack/react-router';
import { rootRouter } from './root';
import { About } from '../ui/about/About';

export const aboutRoute = createRoute({
  path: '/about',
  component: () => <About />,
  getParentRoute: () => rootRouter,
});
