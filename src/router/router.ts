import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/locations',
		name: 'Locations',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Locations.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
	},
	{
		path: '/projects/:typeOfProject',
		name: 'WebDesign',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Projects.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	},
});

export default router;
