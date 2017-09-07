<template>
    <a @click="click">{{text}}</a>
</template>
<script>
    export default {
        name:'anchButton',
        methods: {
            click() {
                this.$emit('click')
            }
        },
        props:{
            text:{
                type:String
            }
        }
    }
</script>
