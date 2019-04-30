import CompoundComponents from './components/01-CompoundComponents';
import Context from './components/02-Context';
import HigherOrder from './components/03-HigherOrder';
import OptimizeRender from './components/04-OptimizeRender/';

const routes = [{
  path: '/01',
  component: CompoundComponents,
}, {
  path: '/02',
  component: Context,
}, {
  path: '/03',
  component: HigherOrder,
}, {
  path: '/04',
  component: OptimizeRender,
}];

export default routes;
