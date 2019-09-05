<style scoped lang="scss">
    .container {
        box-sizing: border-box;
        width: 100px;
        margin: 20px auto;
        div {
            box-sizing: border-box;
            margin-bottom: 20px;
            display: block;
            width: 100px;
            height: 24px;
            border: 1px solid #00adb5;
            text-align: justify;
            text-align-last: justify;
            &:after {
                content: '';
                width: 100%;
                display: inline-block;
            }
        }
    }
</style>

<template>
    <div class="container">
        <div>姓名</div>
        <div>手机号码</div>
        <div>账号</div>
        <div>密码</div>
    </div>
</template>

<script>
    export default {
        name: 'fontJustify',
        data() {
            return {}
        }
    }
</script>