import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Demand = React.lazy(() => import('./views/dashboard/Demand'));

const routes = [
  { path: '/trends', name: 'Trends', component: Dashboard },
  { path: '/demand', name: 'Demand', component: Demand },
];

export default routes;
