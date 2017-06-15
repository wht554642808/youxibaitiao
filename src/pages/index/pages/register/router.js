const register = r => require.ensure([], () => r(require('./main.vue')), 'register.chunk');
export default  {
    path: '/register',
    component: register
};