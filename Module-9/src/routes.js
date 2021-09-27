import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/',
      redirect: '/teams'
    },
    {
      path: '/teams',
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          // path: '/teams/:teamId'
          path: ':teamId',
          component: TeamMembers
          // props: true
        }
      ]
    },
    {
      path: '/users',
      // component: UsersList
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    {
      path: '/:notFound(.*)',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  next();
});

// router.afterEach((to, from) => {
//   // Sending analytics data, for example.
// })

export default router;
