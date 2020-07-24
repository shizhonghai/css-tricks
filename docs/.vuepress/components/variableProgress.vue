<template>
    <div class="container">
        <h3>实时效果：</h3>
        <div class="demo">
            <label>图片1：</label>
            <div class="bar" :style="{'--percent': value1}"></div>
            动态改变进度条的值
            <el-slider v-model="value1" class="bar-slider" :show-tooltip="false"/>
            <label>图片2：</label>
            <div class="bar" style="--percent: 40;"></div>
            <label>图片3：</label>
            <div class="bar" style="--percent: 20;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CSS变量与上传进度条',
        data() {
            return {
                value1: 60,
                value2: 40,
                value3: 20
            }
        }
    }
</script>

<style scoped lang="scss">
    .demo {
        width: 300px;
    }
    .bar {
        height: 20px;
        width: 300px;
        background-color: #f5f5f5;
        margin: 5px 0 10px;
    }

    .bar::before {
        counter-reset: progress var(--percent);
        content: counter(progress) '%\2002';
        display: block;
        width: calc(300px * var(--percent) / 100);
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
        background-color: #2486ff;
        text-align: right;
        white-space: nowrap;
        overflow: hidden;
    }

    .bar-slider {
        margin-bottom: 20px;
    }
</style>
