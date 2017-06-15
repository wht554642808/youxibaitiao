<!--父组件-->
<template>
    <div>
        <header class="login-top">
            <img src="./images/login-top.png">
            <p>sulingxin.com</p>
        </header>
        <section class="form-body no-label">
            <!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
            <!--:value.sync其实是:value="valueMobile" @update:value="val => valueMobile = val"-->
            <!--下面两个子组件都用:value而不会出错，可见子组件$emit时只会触发引用它的html事件-->
            <inputMobile reset="true" :value.sync="valueMobile"></inputMobile>
            <inputPwd reset="true" :value.sync="valuePwd"></inputPwd>
        </section>

        <submit words="登录" @submit="submit"></submit>
    </div>
</template>


<script>
    import inputMobile from '../../../../common/components/form/inputMobile.vue';
    import inputPwd from '../../../../common/components/form/inputPwd.vue';
    import submit from '../../../../common/components/form/submit.vue';
    export default {
        components: {
            inputMobile,
            inputPwd,
            submit
        },
        data() {
            return {
                valueMobile: '',
                valuePwd: ''
            }
        },
        methods: {
            submit: function (value) {

                this.$http({
                    url: 'http://172.16.15.117:8011/slx-account-web/login/userLogin',
                    method: 'POST',
                    // 请求体重发送的数据
                    data: {
                        source: 'H5',
                        loginName: this.valueMobile,
                        password: this.valuePwd
                    },
                    // 设置请求头
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (data) {
                    // 请求成功回调
                    console.log(data);

                }, function () {
                    // 请求失败回调
                });
            }
        }
    }
</script>

<style lang="less" type="text/less">

</style>










<!--子组件-->
<template>
    <div class="form-group mobile-group">

        <label v-if="label" v-text="label"></label>

        <input type="tel" class="input-mobile" v-model="_value" maxlength="11" placeholder="请输入手机号" @blur="leaveInput" @focus="enterInput" @keyup="keyUpInput">

        <div class="input-reset-b" :class="{hide: isHideReset}" v-if="reset" @click="clickReset">
            <img src="../../images/reset.png">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['label', 'readonly', 'reset', 'value'],
        data() {
            return {
                isHideReset: true,
//                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                这里必须得把父组件传过来的值赋给子组件的局部变量，否则报错
//                报错：Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "value"

                _value: this.value
            }
        },
        methods: {
            keyUpInput: function () {
                this.isHideReset = !this._value;
            },
            enterInput: function () {
                this.isHideReset = !this._value;
            },
            leaveInput: function () {
                setTimeout(function() {
                    this.isHideReset = true;
                }, 100);
            },
            clickReset: function() {
                this._value = '';
                this.isHideReset = !this._value;
            }
        },
        watch: {
            _value () {
//                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                本来想用这里来代替keyUpInput和clickReset，以为clickReset里this._value = '';改变了_value值后这里可以监听到，结果这里监听不到了，而且连DOM中的_value值也没变。
//                this.isHideReset = !this._value;
//                vue1.0不需要，vue2把父组件和子组件双向数据流给删除了，vue2.3又给加上了，但是必须写下面这行代码
                this.$emit('update:value', this._value);
            }
        }
    };
</script>


