<template>
    <div class="container">
        <h2>案例一：弹框毛玻璃</h2>
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" class="dialog-box" :modal-append-to-body="false">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
        </el-dialog>
        <h2>案例二：下拉毛玻璃</h2>
        <el-select v-model="value" placeholder="请选择" value="">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <div class="image"><img src="../public/images/bg1.jpg" alt="测试图片"></div>
    </div>
</template>

<script>
    export default {
        name: 'backdropFilter',
        data() {
            return {
                dialogVisible: false,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '双皮奶'
            }
        }
    }
</script>

<style>
    .v-modal {
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        opacity: inherit;
        background: rgba(0, 0, 0, .7);
    }
    .el-select-dropdown {
        background: hsla(0, 0%, 100%, .75);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }
    .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
        background: hsla(0, 0%, 100%, .3);
    }
</style>

<style scoped lang="scss">
    /*.container {
        box-sizing: border-box;
        width: 250px;
        margin: 20px auto;
    }*/
    .image {
        img {
            margin-top: 20px;
            width: 450px;
        }
    }
</style>