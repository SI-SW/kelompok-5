const dashboard = {
    path:'/dashboard',
    name:'Dashboard',
    children:[
        {
            path: '',
            name: 'Default',
            component:() => import('@/views/Dashboard/Default.vue'),
            meta:{auth:true},
          },
          {
            path: 'tables',
            name: 'Tables',
            component:() => import('@/views/Dashboard/Tables.vue'),
            meta:{auth:true},
          },
          {
            path: 'billing',
            name: 'Billing',
            component:() => import('@/views/Dashboard/Billing.vue'),
            meta:{auth:true},
          },
          {
            path: "todo",
            name: "ToDo",
            component: ()=> import('@/views/Dashboard/ToDo.vue'),
            meta: {auth: true},
          },
          {
            path: 'profile',
            name: 'Profil',
            component:() => import('@/views/Dashboard/Profile.vue'),
            meta:{auth:true},
          },
          
    ],
};

export default dashboard;