
<!--觉得不怎么好，因为封装之后还是有很多在父组件中操作，没有减少多少代码，还更绕了-->
<!--父组件-->
<template>
    <div class="form-group mobile-group">

        <label v-if="label" v-text="label"></label>

        <input type="tel" class="input-mobile" v-model="value" maxlength="11" placeholder="请输入手机号" @blur="leaveInput" @focus="enterInput">

        <resetIcon ref="resetComponent" reset="true" @resetValue="val => value = val"></resetIcon>
    </div>
</template>

<script>
    import resetIcon from './resetIcon.vue';
    export default {
        components: {
            resetIcon
        },
        props: ['label', 'readonly'],
        data() {
            return {
                value: ''
            }
        },
        methods: {
            validValue: function(value) {
                var pattern = /^1\d{10}$/;
                if (!value) {
                    alert('请输入手机号！');
//                    C.showPageHint('请输入手机号！');
                    return false;
                }
                if (!pattern.test(value)) {
                    alert('您输入的手机号有误！');
//                    C.showPageHint('您输入的手机号有误！');
                    return false;
                }
                return true;
            },
            enterInput: function () {
                if (this.value) {
                    this.$refs.resetComponent.show();
                } else {
                    this.$refs.resetComponent.hide();
                }
            },
            leaveInput: function () {
                var that = this;
                setTimeout(function() {
                    that.$refs.resetComponent.hide();
                }, 100);
            }
        },
        watch: {
            value () {
                this.$emit('value', this.value);
                if (this.value) {
                    this.$refs.resetComponent.show();
                } else {
                    this.$refs.resetComponent.hide();
                }
            }
        }
    };
</script>



<!--子组件-->
<template>

    <div class="input-reset-b" :class="{hide: isHideReset}" v-if="reset" @click="clickReset">
        <img src="../../images/reset.png">
    </div>

</template>
<script>
    export default {
        props: ['reset'],
        data() {
            return {
                isHideReset: true
            }
        },
        methods: {
            show: function () {
                this.isHideReset = false;
            },
            hide: function () {
                this.isHideReset = true;
            },
            clickReset: function() {
                this.isHideReset = true;
                this.$emit('resetValue', '');
            }
        }
    };
</script>


