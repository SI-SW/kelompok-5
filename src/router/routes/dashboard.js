const dashboard = {
  path: "/dashboard",
  name: "Dashboard",
  children: [
      {
          path: "",
          name: "Default",
          component: () => import('@/views/Dashboard/Default.vue'),
          meta: { auth: true }
      },
      {
          path: "tables",
          name: "Tables",
          component: () => import('@/views/Dashboard/Tables.vue'),
          meta: { auth: true }
      },
      {
          path: "billing",
          name: "Billing",
          component: () => import('@/views/Dashboard/Billing.vue'),
          meta: { auth: true }
      },
      {
          path: "todo",
          children:[
              {
                  path: '',
                  name: 'Todo',
                  // route level code-splitting
                  // this generates a separate chunk (About.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                  component: () => import('@/views/Dashboard/ToDo.vue'),
                  meta: { auth: true }
              },
              {
                  path: "addtodo",
                  name: "Add To Do",
                  component: () => import('@/views/Dashboard/AddToDo.vue'),
                  meta: { auth: true }
              },
              {
                  path: 'edittodo/:id',
                  name: "Edit To Do",
                  component: () => import('@/views/Dashboard/EditToDo.vue'),
                  meta: { auth: true }
                  //component: () => import('@/views/Dashboard/EditToDo.vue'),
                  //meta: { auth: true }
              },
          ]
      },
      {
          path: "profile",
          name: "Profile",
          component: () => import('@/views/Dashboard/Profile.vue'),
          meta: { auth: true }
      },
  ]
};

export default dashboard;