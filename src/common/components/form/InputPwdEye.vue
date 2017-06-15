<template>

    <div class="input-eye-b" @click="click">
        <img src="../../images/reset.png" :class="{hide: isShow}">
        <img src="../../images/a.png" :class="{hide: !isShow}">
    </div>

</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            click: function() {
                this.isShow = !this.isShow;
                this.$emit('click', this.isShow ? 'show' : 'hide');
            }
        }
    };
</script>

<style lang="less" type="text/less">
    .input-eye-b {
        align-self: flex-end;
        flex: none;
        height: 1rem;
        width: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            flex: none;
            width: 0.5rem;
            height: 0.5rem;
        }
    }
</style>


