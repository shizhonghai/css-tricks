<style scoped lang="scss">
    .ellipsis-container {
        width: 500px;
        border: 1px solid #ddd;
        padding: 15px;
        margin: 30px auto;

        .article-container {
            display: -webkit-box;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.5;
            box-sizing: border-box;
        }
    }

    .ellipsis-two {
        width: 500px;
        border: 1px solid #ddd;
        padding: 15px;
        margin: 30px auto;
        p {
            position: relative;
            line-height: 20px;
            max-height: 40px;
            overflow: hidden;
        }

        p::after {
            content: "...";
            position: absolute;
            bottom: 0;
            right: 0;
            padding-left: 40px;
            background: -webkit-linear-gradient(left, transparent, #fff 55%);
            background: -o-linear-gradient(right, transparent, #fff 55%);
            background: -moz-linear-gradient(right, transparent, #fff 55%);
            background: linear-gradient(to right, transparent, #fff 55%);
        }
    }
    .ellipsis-title {
        margin: 20px;
        text-align: center;
    }
</style>

<template>
    <div>
        <div class="ellipsis-title">不带阴影的显示省略号</div>
        <div class="ellipsis-container">
            <div class="article-container" style="-webkit-box-orient: vertical;">
                CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号CSS实现多行文本溢出显示省略号
            </div>
        </div>
        <div class="ellipsis-title">带阴影的显示省略号</div>
        <div class="ellipsis-two">
            <p>海客談瀛洲，煙濤微茫信難求。越人語天姥，雲霞明滅或可覩。天姥連天向天橫，勢拔五嶽掩赤城。天台四萬八千丈，對此欲倒東南傾。我欲因之夢吳越，一夜飛渡鏡湖月。湖月照我影，送我至剡溪。謝公宿處今尚在，淥水蕩漾清猨啼。腳著謝公屐，身登青雲梯。半壁見海日，空中聞天雞。千巖萬轉路不定，迷花倚石忽已暝。熊咆龍吟殷巖泉，慄深林</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "multipleEllipsis",
        data() {
            return {};
        }
    };
</script>