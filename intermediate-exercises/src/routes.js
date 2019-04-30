import LifeCycle from './components/01-LifeCycle';
import StopWatch from './components/02-StopWatch';
import FetchGithubData from './components/03-FetchGithubData';
import RenderProps from './components/04-RenderProps';
import SnakeGame from './components/05-SnakeGame';

const routes = [{
  path: '/01',
  component: LifeCycle,
}, {
  path: '/02',
  component: StopWatch,
}, {
  path: '/03',
  component: FetchGithubData,
}, {
  path: '/04',
  component: RenderProps,
}, {
  path: '/05',
  component: SnakeGame,
}];

export default routes;
