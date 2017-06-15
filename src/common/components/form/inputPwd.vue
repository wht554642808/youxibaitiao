<template>
    <div class="form-group pwd-group">

        <label v-if="label" v-text="label"></label>


        <input v-if="type === 'password' " type="password" v-model="value" maxlength="20" placeholder="请输入登录密码"  @blur="leaveInput" @focus="enterInput">
        <input v-if="type === 'text' " type="text" v-model="value" maxlength="20" placeholder="请输入登录密码"  @blur="leaveInput" @focus="enterInput">

        <InputReset :isShow="isShowReset" @click="clickReset"></InputReset>

        <InputPwdEye @click="val => type = val === 'show' ? 'text' : 'password' "></InputPwdEye>


    </div>
</template>

<script>
    import InputReset from './InputReset.vue';
    import InputPwdEye from './InputPwdEye.vue';
    export default {
        components: {
            InputReset,
            InputPwdEye,
        },
        props: ['label', 'readonly'],
        data() {
            return {
                isShowReset: false,
                type: 'password',
                value: ''
            }
        },
        methods: {
            validValue: function(value) {
                const pattern = /^\d*$/;
                if (!value) {
                    this.$store.commit('showHint', '请输入密码!');
                    return false;
                }
                if (value.length < 6) {
                    this.$store.commit('showHint', '密码不能低于6位!');
                    return false;
                }
                if (value.length > 20) {
                    this.$store.commit('showHint', '密码不能大于20位!');
                    return false;
                }
                if (pattern.test(value)) {
                    this.$store.commit('showHint', '密码不能为纯数字!');
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


