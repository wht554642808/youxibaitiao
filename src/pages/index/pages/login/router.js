const login = r => require.ensure([], () => r(require('./main.vue')), 'login.chunk');
export default  {
    path: '/login',
    level: 1,
    component: login
};