
<template>
    <div class="form-group mobile-group">

        <label v-if="label" v-text="label"></label>

        <input type="tel" v-model="value" maxlength="11" placeholder="请输入手机号" @blur="leaveInput" @focus="enterInput">

        <InputReset :isShow="isShowReset" @click="clickReset"></InputReset>

    </div>
</template>

<script>
    import InputReset from './InputReset.vue';
    export default {
        components: {
            InputReset
        },
        props: ['label', 'readonly'],
        data() {
            return {
                isShowReset: false,
                value: ''
            }
        },
        methods: {
            validValue: function(value) {
                const pattern = /^1\d{10}$/;
                if (!value) {
                    global.hint.show('请输入手机号!');
                    return false;
                }
                if (!pattern.test(value)) {
                    global.hint.show('您输入的手机号有误!');
                    return false;
                }
                return true;
            },
            enterInput: function () {
                this.isShowReset = !!this.value;
            },
            leaveInput: function () {
                let that = this;
                setTimeout(function() {
                    that.isShowReset = false;
                }, 100);
            },
            clickReset: function() {
                this.value = '';
            }
        },
        watch: {
            value () {
                this.$emit('value', this.value);
                this.isShowReset = !!this.value;
            }
        }
    };
</script>




