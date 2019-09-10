import React from 'react';
import PhotoGallery from './views/PhotoGallery';
import ContactUs from './views/ContactUs';
import Volunteer from './views/Volunteer';
import JoinUs from './views/JoinUs';
import AboutUs from './views/AboutUs';


const Dashboard = React.lazy(() => import('./views/Dashboard'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/gallery', name: 'PhotoGallery', component: PhotoGallery },
  { path: '/contact', name: 'ContactUs', component: ContactUs },
  { path: '/volunteers', name: 'Volunteer', component: Volunteer },
  { path: '/join', name: 'JoinUs', component: JoinUs },
  { path: '/about', name: 'AboutUs', component: AboutUs },
];

export default routes;
