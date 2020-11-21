import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import MovieDetail from './components/MovieDetail.vue';
import Movies from './components/Movies.vue';
import NotFound from './components/NotFound.vue';
import ReviewCreate from './components/ReviewCreate.vue';
import SignUp from './components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/signin', component: Login},
    {path: '/movies', component: Movies},
    {path: '/movies/:pk', component: MovieDetail,
        children: [
            {path: 'review', component: ReviewCreate}
        ]},
        {path: '/signup', component: SignUp},
        {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})