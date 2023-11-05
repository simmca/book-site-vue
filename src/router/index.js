import { createRouter as _createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MyBooksView from '../views/MyBooksView.vue';
import NewBookView from '../views/NewBookView.vue';
import BookView from '../views/BookView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myBooks',
    name: 'my-books',
    component: MyBooksView
  },
  {
    path: '/addBook',
    name: 'add-book',
    component: NewBookView
  },
  {
  path: '/book/:isbn',
  name: 'view-book',
  component: BookView
}
];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}
