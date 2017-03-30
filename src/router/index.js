import Vue from 'vue'
import Router from 'vue-router'
import ListCakes from '@/components/ListCakes'
import AddCake from '@/components/AddCake'
import ViewCake from '@/components/ViewCake'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list_cakes',
      component: ListCakes
    },
    {
      name: 'add_cake',
      path: '/cakes/add',
      component: AddCake
    },
    {
      name: 'view_cake',
      path: '/cakes/:id',
      component: ViewCake
    }
  ]
})
