const index = r => require.ensure([], () => r(require('./main.vue')), 'index.chunk');
export default  {
    path: '/index',
    level: 1,
    component: index
};