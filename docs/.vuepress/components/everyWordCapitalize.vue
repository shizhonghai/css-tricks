<style scoped lang="scss">
    .container {
        box-sizing: border-box;
        width: 250px;
        margin: 20px auto;
        text-align: center;
        .word-capitalize {
            text-transform: capitalize;
        }
    }
</style>

<template>
    <div class="container">
        <div class="word-capitalize">It's a beautiful world</div>
    </div>
</template>

<script>
    export default {
        name: 'wordCapitalize',
        data() {
            return {}
        }
    }
</script>