const auth = {
  path: "/auth",
  name: "Auth",
  children: [
    {
      path: "signin",
      name: "Signin",
      component: () => import("@/views/Auth/Signin.vue"),
      meta: { auth: true }
    },
    {
      path: "signup",
      name: "Signup",
      component: () => import("@/views/Auth/Signup.vue"),
      meta: { auth: true }
    },
  ],
};

export default auth;