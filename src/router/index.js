import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';

const routes = [
  {
      path: '/',
      name: 'Home',
      component: HomePage,
  },
  {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
  },
  {
    path:'/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'RobotHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'RobotArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'RobotTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
      {
        name: 'RobotBases',
        path: 'bases',
        component: RobotBases,
      },
    ]
  },
  {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
  }
]

const router = createRouter({
    history: createWebHashHistory(),
  routes
})

export default router
