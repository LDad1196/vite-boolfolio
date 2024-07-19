import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './App.vue';
import AboutView from './pages/AppAbout.vue';
import ContactsView from './pages/AppContacts.vue';
import ProjectsView from './pages/AppProjects.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contacts', name: 'Contacts', component: ContactsView },
  { path: '/projects', name: 'Projects', component: ProjectsView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;