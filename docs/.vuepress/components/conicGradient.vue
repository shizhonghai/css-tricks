<template>
    <div class="container">
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'conicGradient',
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .container{
        width: 300px;
        height: 300px;
        margin: 0 auto;
        > div {
            width: 200px;
            height: 200px;
            border-radius: 100px;
            background: conic-gradient(#c5f06e 0 30%, #00adb5 30% 68%, #7f96ff 60% 100%);
        }
    }
</style>