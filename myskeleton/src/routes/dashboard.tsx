import {
  Dashboard,
//  LocationOn,
//  Person,
} from '@material-ui/icons';
import DashboardPage from 'views/Dashboard/Dashboard';

export type Route = typeof dashboardRoutes[0];
const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/',
    navbarName: 'Redirect',
    redirect: true,
    to: '/dashboard',
  },
];

export default dashboardRoutes;
