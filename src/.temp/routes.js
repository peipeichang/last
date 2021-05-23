const c1 = () => import(/* webpackChunkName: "page--src--templates--news-vue" */ "/Users/changpeiyu/last/src/templates/News.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--vvvvv-vue" */ "/Users/changpeiyu/last/src/pages/Vvvvv.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--resource-vue" */ "/Users/changpeiyu/last/src/pages/Resource.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--news-vue" */ "/Users/changpeiyu/last/src/pages/News.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-copy-vue" */ "/Users/changpeiyu/last/src/pages/Index copy.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--downloads-vue" */ "/Users/changpeiyu/last/src/pages/Downloads.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/changpeiyu/last/src/pages/About.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/changpeiyu/last/node_modules/gridsome/app/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/changpeiyu/last/src/pages/Index.vue")

export default [
  {
    path: "/News/1/",
    component: c1
  },
  {
    path: "/News/2/",
    component: c1
  },
  {
    path: "/News/3/",
    component: c1
  },
  {
    path: "/News/5/",
    component: c1
  },
  {
    path: "/News/6/",
    component: c1
  },
  {
    path: "/News/7/",
    component: c1
  },
  {
    path: "/News/8/",
    component: c1
  },
  {
    path: "/vvvvv/",
    component: c2
  },
  {
    path: "/resource/",
    component: c3
  },
  {
    path: "/news/",
    component: c4
  },
  {
    path: "/index-copy/",
    component: c5
  },
  {
    path: "/downloads/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
