<template>

    <div class="input-reset-b" :class="{hide: !isShow}" @click="click">
        <img src="../../images/reset.png">
    </div>

</template>

<script>
    export default {
        props: ['isShow'],
        methods: {
            click: function() {
                this.$emit('click');
            }
        }
    };
</script>


<style lang="less" type="text/less">
    .input-reset-b {
        flex: none;
        align-self: flex-end;
        height: 1rem;
        width: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 0.5rem;
            height: 0.5rem;
            flex: none;
        }
    }
</style>


