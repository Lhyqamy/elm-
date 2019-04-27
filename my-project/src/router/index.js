import Vue from 'vue'
import Router from 'vue-router'
import elm from '@/components/elm'
import login from '@/components/login'
import paging from '@/components/paging'
import users from '@/components/users'
import natureofcode from '@/components/natureofcode'
import foods from '@/components/foods'
import orderID from '@/components/orderID'
import listing from '@/components/listing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/elm',
      name: 'elm',
      component: elm,
			children:[
				{
					name:"paging",
				  path:"/paging",
				  component:paging,
				},	{
					name:"users",
				  path:"/users",
				  component:users,
				},	{
					name:"natureofcode",
				  path:"/natureofcode",
				  component:natureofcode,
				},	{
					name:"foods",
				  path:"/foods",
				  component:foods,
				},
				{
					name:"orderID",
				  path:"/orderID",
				  component:orderID,
				},{
					name:"listing",
				  path:"/listing",
				  component:listing,
				},
				
				]
    }
  ]
})
