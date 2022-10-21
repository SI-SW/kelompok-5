
const auth = {
    path : '/',
    name : 'Auth',
    children :[
        {
            path: "/auth/signin",
            name: "Signin",
            component:()=> import('@/views/Auth/Signin.vue'),
            //meta:{auth:true},
          },
          {
            path: "/auth/signup",
            name: "Signup",
            component:()=> import('@/views/Auth/Signup.vue'),
            //meta:{auth:true},
          },
    ]
          
};
export default auth;