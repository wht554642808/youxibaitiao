
<script>
    import Vue from 'vue';
    export default new Vue({
        el: 'hint',
        template: '<p class="page-hint" :class="{hide: !isShow}"><span>{{words}}</span></p>',
        data: {
            isShow: false,
            words: '',
        },
        methods: {
            show: function (words, callback, time) {
                if (words) {
                    this.words = words;
                    this.isShow = true;

                    const that = this;
                    setTimeout(function() {
                        that.isShow = false;
                        callback || callback();
                    }, time || 3000);
                }
            },
            hide: function() {
                this.isShow = false;
            }
        }
    });

</script>

<style lang="less" type="text/less">
    .page-hint {
        position: fixed;
        z-index: 9999;
        width: 100%;
        height: 2rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
        text-align: center;
        pointer-events: none;
        span {
            color: #fff;
            font-size: 0.4rem;
            background: rgba(0,0,0,0.8);
            padding: 0.1rem 0.3rem;
            max-width: 5rem;
            line-height: 0.6rem;
            border-radius: 5px;
            display: inline-block;
        }
    }
</style>


