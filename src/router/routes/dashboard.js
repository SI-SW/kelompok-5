const dashboard = {
    path:'/dashboard',
    name:'Dashboard',
    children:[
        {
            path: '',
            name: 'Default',
            component:() => import('@/views/Dashboard/Default.vue'),
            meta:{dashboard:true},
          },
          {
            path: 'tables',
            name: 'Tables',
            component:() => import('@/views/Dashboard/Tables.vue'),
            meta:{dashboard:true},
          },
          {
            path: 'billing',
            name: 'Billing',
            component:() => import('@/views/Dashboard/Billing.vue'),
            meta:{dashboard:true},
          },
          {
            path: 'profile',
            name: 'Profil',
            component:() => import('@/views/Dashboard/Profile.vue'),
            meta:{dashboard:true},
          },
          
    ],
};

export default dashboard;