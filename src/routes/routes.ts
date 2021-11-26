import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
);
// const lazy1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1')
// );
// const lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
// );
// const lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
// );

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload',
    Component: LazyLayout,
    name: 'LazyLayout',
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];
