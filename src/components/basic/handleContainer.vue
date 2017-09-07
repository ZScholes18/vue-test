<template>
    <div ref="container" class="f-cb container">
        <slot></slot>
    </div>
</template>
<script>
    let height='50px'
    export default {
        name:'handleContainer',
        mounted() {
            let container = this.$refs.container;
            container.style.lineHeight = container.offsetHeight+'px';
        }
    }
</script>
<style scoped lang="scss">
    .container {
        position: relative;
        height:auto;
        line-height: normal;
    }
</style>
