import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/AppHome.vue';
import AboutView from './pages/AppAbout.vue';
import ContactsView from './pages/AppContacts.vue';
import ProjectsView from './pages/AppProjects.vue';
import SingleProject from './pages/AppSingleProjects.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contacts', name: 'Contacts', component: ContactsView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/projects/:slug', name: 'SingleCard', component: SingleProject}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;