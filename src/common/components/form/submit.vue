<template>
    <div class="form-submit">
        <a :href="href" v-text="words" @click="submit"></a>
    </div>
</template>

<script>
    export default {
        props: ['href', 'words'],
        methods: {
            submit: function() {
                this.$emit('click');
            }
        }
    };
</script>


