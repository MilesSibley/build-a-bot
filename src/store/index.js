import { createStore } from 'vuex';
import robotsModule from './modules/robots'
import usersModule from './modules/users'


const store = createStore({
    modules: {
        robots: robotsModule,
        users: usersModule
    }    
});

export default store