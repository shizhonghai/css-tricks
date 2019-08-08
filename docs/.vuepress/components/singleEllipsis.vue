<style scoped lang="scss">
    .ellipsis-container {
        .article-container {
            width: 500px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 40px;
            line-height:40px;
            margin:15px auto;
            border:1px solid #ddd;
            padding:15px;
        }
    }
</style>

<template>
    <div class="ellipsis-container">
        <div class="article-container">CSS实现单行文本溢出显示省略号CSS实现单行文本溢出显示省略号CSS实现单行文本溢出显示省略号</div>
    </div>
</template>

<script>
    export default {
        name: "singleEllipsis",
        data() {
            return {};
        },
    }
</script>