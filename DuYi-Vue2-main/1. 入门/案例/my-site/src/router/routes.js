import "nprogress/nprogress.css";
import NotFound from "@/views/NotFound.vue";
import { start, done, configure } from "nprogress";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(800);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

const title = "-我的个人空间";
export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() =>
      import("@/views/Home")
    ),
    meta: {
      title: "首页" + title,
    },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() =>
      import("@/views/About")
    ),
    meta: {
      title: "关于我" + title,
    },
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() =>
      import("@/views/Blog")
    ),
    meta: {
      title: "文章" + title,
    },
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() =>
      import("@/views/Blog")
    ),
    meta: {
      title: "文章" + title,
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() =>
      import("@/views/Blog/Detail")
    ),
    meta: {
      title: "文章详情" + title,
    },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() =>
      import("@/views/Project")
    ),
    meta: {
      title: "项目&效果" + title,
    },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() =>
      import("@/views/Message")
    ),
    meta: {
      title: "留言板" + title,
    },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];
