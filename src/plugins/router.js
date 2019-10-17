import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import jingxuan from '../pages/jingxuan.vue'
import user from '../pages/user.vue'
import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import rankbtn from '../pages/rankbtn.vue'
import shujia from '../pages/shujia.vue'

export default new VueRouter({
    // mode:'history',
    routes:[
        {path:'/home', component:Home},
        {path:'/jingxuan',component:jingxuan},
        {path:'/user',component:user},
        {path:'/rankbtn',component:rankbtn},
        {path:'/Login',component:Login},
        {path:'/Reg',component:Reg},
        {path:'/Detail/:id',component:Detail,name:'detail'},
        {path:'/',redirect:'/home'},
        {path:'/shujia',component:shujia}


    ]
})
