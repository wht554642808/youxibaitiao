const mine = r => require.ensure([], () => r(require('./main.vue')), 'mine.chunk');
export default  {
    path: '/mine',
    component: mine
};