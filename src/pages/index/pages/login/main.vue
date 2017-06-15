<template>

    <div class="">
        <header class="login-top">
            <img src="./images/login-top.png">
            <p>sulingxin.com</p>
        </header>
        <section class="form-body no-label">
            <!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
            <!--:value.sync其实是:value="valueMobile" @update:value="val => valueMobile = val"-->
            <!--下面两个子组件都用:value而不会出错，可见子组件$emit时只会触发引用它的html事件-->
            <inputMobile ref="mobileComponent" @value="val => valueMobile = val"></inputMobile>
            <inputPwd ref="pwdComponent" @value="val => valuePwd = val"></inputPwd>
        </section>

        <submit words="登录" @click="submit"></submit>
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
            submit: function () {
//                this.$router.push({ path: 'index', query: { time: (new Date()).getTime() }});


                global.superman.show();
                if (!this.$refs.mobileComponent.validValue(this.valueMobile) || !this.$refs.pwdComponent.validValue(this.valuePwd)) {
                    global.superman.hide();
                    return;
                }





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
//                    C.hideSuperman();
                    console.log(data);

                }, function () {
                    // 请求失败回调
//                    C.hideSuperman();
                });
            }
        }
    }
</script>

<style lang="less" type="text/less">
    @import "../../../../common/css/form.less";
    .login-top {
        height: 3rem;
        text-align: center;
        background: #3ba3f2;
        overflow: hidden;
        padding-top: 1rem;
        img {
            display: block;
            margin: auto;
            width: 2rem;
        }
        p {
            height: 0.5rem;
            margin: 0.02rem auto 0 auto;
            color: #3ba3f2;
            border-radius: 0.5rem;
            line-height: 1.5;
            font-size: 0.3rem;
            width: 2rem;
            background: #fff;
        }
    }
</style>







