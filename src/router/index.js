import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../views/layout/energy/MainLayout.vue";
import SubLayout from "../views/layout/energy/SubLayout.vue";
import AuthLayout from "../views/layout/AuthLayout.vue";
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
          //홈
          path: "/main",
          name: "Main",
          component: () => import("../views/energy/Main.vue"),
        },
      ],
    },
    {
      path: "/",
      component: SubLayout,
      children: [
        {
          //에너지복지사업
          path: "/introduce",
          name: "Introduce",
          component: () => import("../views/energy/Introduce.vue"),
        },
        {
          //세부사업내용
          path: "/welfaremodel",
          name: "WelfareModel",
          component: () => import("../views/energy/WelfareModel.vue"),
        },
        {
          //건물형 인프라구축 사업
          path: "/welfaremodel1",
          name: "WelfareModel1",
          component: () => import("../views/energy/WelfareModel1.vue"),
        },
        {
          //점포형 에너지비용절감 사업
          path: "/welfaremodel2",
          name: "WelfareModel2",
          component: () => import("../views/energy/WelfareModel2.vue"),
        },
        {
          //공동주택형 에너지서비스 사업
          path: "/welfaremodel3",
          name: "WelfareModel3",
          component: () => import("../views/energy/WelfareModel3.vue"),
        },
        {
          //단독주택형 에너지서비스 사업
          path: "/welfaremodel4",
          name: "WelfareModel4",
          component: () => import("../views/energy/WelfareModel4.vue"),
        },
        {
          //운영현황-사업현황
          path: "/welfarestatus",
          name: "WelfareStatus",
          component: () => import("../views/energy/WelfareStatus.vue"),
        },
        //{
        //  path: "/welfarestatusdetail",
        //  name: "WelfareStatusDetail",
        //  component: () => import("../views/energy/WelfareStatusDetail.vue"),
        //},
        {
          //운영현황-구축사례
          path: "/constructioncase",
          name: "ConstructionCase",
          component: () => import("../views/energy/ConstructionCase.vue"),
        },
        {
          //참여와소통-복지소식
          path: "/energynotice",
          name: "Notice",
          component: () => import("../views/energy/Notice.vue"),
        },
        {
          ////참여와소통-복지소식-상세
          path: "/energynoticeview",
          name: "NoticeView",
          component: () => import("../views/energy/NoticeView.vue"),
        },
        {
          //마이에너지
          path: "/myenergy",
          name: "MyEnergy",
          component: () => import("../views/energy/MyEnergy.vue"),
        },
        {
          //참여와소통-자주묻는질문
          path: "/energyfaq",
          name: "Faq",
          component: () => import("../views/energy/Faq.vue"),
        },
        {
          //세부사업내용-건물형 인프라구축 사업
          path: "/applysocialwelfare1",
          name: "ApplySocialWelfare1",
          component: () => import("../views/energy/ApplySocialWelfare1.vue"),
        },
        {
          //세부사업내용-점포형 에너지비용절감 사업
          path: "/applysocialwelfare2",
          name: "ApplySocialWelfare2",
          component: () => import("../views/energy/ApplySocialWelfare2.vue"),
        },
        {
          //세부사업내용-공동주택형 에너지서비스 사업
          path: "/applysocialwelfare3",
          name: "ApplySocialWelfare3",
          component: () => import("../views/energy/ApplySocialWelfare3.vue"),
        },
        {
          //세부사업내용-단독주택형 에너지서비스 사업
          path: "/applysocialwelfare4",
          name: "ApplySocialWelfare4",
          component: () => import("../views/energy/ApplySocialWelfare4.vue"),
        },
        {
          //세부사업내용-신청완료
          path: "/applysocialwelfare5",
          name: "ApplySocialWelfare5",
          component: () => import("../views/energy/ApplySocialWelfare5.vue"),
        },
        {
          //세부사업내용-신청이력조회
          path: "/applycheck",
          name: "ApplyCheck",
          component: () => import("../views/energy/ApplyCheck.vue"),
        },
        {
          //세부사업내용-신청이력확인
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
