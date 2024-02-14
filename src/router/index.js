import Vue from "vue";
import VueRouter from "vue-router";
import AuthLayout from "../views/layout/AuthLayout.vue";
import MainLayout from "../views/layout/energy/MainLayout.vue";
import AdminLayout from "../views/layout/admin/AdminLayout.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "Index",
          component: () => import("../views/Index.vue"),
        },
        {
          path: "/main",
          name: "Main",
          component: () => import("../views/energy/Main.vue"),
        },
        {
          path: "/introduce",
          name: "Introduce",
          component: () => import("../views/energy/Introduce.vue"),
        },
        {
          path: "/welfaremodel",
          name: "WelfareModel",
          component: () => import("../views/energy/WelfareModel.vue"),
        },
        {
          path: "/welfaremodel1",
          name: "WelfareModel1",
          component: () => import("../views/energy/WelfareModel1.vue"),
        },
        {
          path: "/welfaremodel2",
          name: "WelfareModel2",
          component: () => import("../views/energy/WelfareModel2.vue"),
        },
        {
          path: "/welfaremodel3",
          name: "WelfareModel3",
          component: () => import("../views/energy/WelfareModel3.vue"),
        },
        {
          path: "/welfaremodel4",
          name: "WelfareModel4",
          component: () => import("../views/energy/WelfareModel4.vue"),
        },
        {
          path: "/welfarestatus",
          name: "WelfareStatus",
          component: () => import("../views/energy/WelfareStatus.vue"),
        },
        {
          path: "/welfarestatusdetail",
          name: "WelfareStatusDetail",
          component: () => import("../views/energy/WelfareStatusDetail.vue"),
        },
        {
          path: "/energynotice",
          name: "Notice",
          component: () => import("../views/energy/Notice.vue"),
        },
        {
          path: "/energynoticeview",
          name: "NoticeView",
          component: () => import("../views/energy/NoticeView.vue"),
        },
        {
          path: "/supportinformation",
          name: "SupportInformation",
          component: () => import("../views/energy/SupportInformation.vue"),
        },
        {
          path: "/supportinformationview",
          name: "SupportInformationView",
          component: () => import("../views/energy/SupportInformationView.vue"),
        },
        {
          path: "/energyfaq",
          name: "Faq",
          component: () => import("../views/energy/Faq.vue"),
        },
        {
          path: "/applysocialwelfare",
          name: "ApplySocialWelfare",
          component: () => import("../views/energy/ApplySocialWelfare.vue"),
        },
        {
          path: "/applycheck",
          name: "ApplyCheck",
          component: () => import("../views/energy/ApplyCheck.vue"),
        },
        {
          path: "/applycheckform",
          name: "ApplyCheckForm",
          component: () => import("../views/energy/ApplyCheckForm.vue"),
        },
      ],
    },
    {
      path: "/",
      component: AuthLayout,
      children: [
        {
          path: "/signin",
          name: "Signin",
          component: () => import("../views/auth/Signin.vue"),
        },
      ],
    },
    {
      path: "/",
      component: AdminLayout,
      children: [
        {
          path: "/admin",
          name: "Dashboard",
          component: () => import("../views/admin/Dashboard.vue"),
        },
        {
          path: "/promotion",
          name: "Promotion",
          component: () => import("../views/admin/Promotion.vue"),
        },
        {
          path: "/notice",
          name: "Notice",
          component: () => import("../views/admin/Notice.vue"),
        },
        {
          path: "/noticeview",
          name: "NoticeView",
          component: () => import("../views/admin/NoticeView.vue"),
        },
        {
          path: "/noticeedit",
          name: "NoticeEdit",
          component: () => import("../views/admin/NoticeEdit.vue"),
        },
        {
          path: "/faq",
          name: "Faq",
          component: () => import("../views/admin/Faq.vue"),
        },
        {
          path: "/businessapplication",
          name: "BusinessApplication",
          component: () => import("../views/admin/BusinessApplication.vue"),
        },
      ],
    },
  ],
});

export default router;
