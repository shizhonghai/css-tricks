<template>
    <div class="container">
        <div>
            <dl>
                <dt>A</dt>
                <dd>Andrew W.K.</dd>
                <dd>Apparat</dd>
                <dd>Arcade Fire</dd>
                <dd>At The Drive-In</dd>
                <dd>Aziz Ansari</dd>
            </dl>
            <dl>
                <dt>C</dt>
                <dd>Chromeo</dd>
                <dd>Common</dd>
                <dd>Converge</dd>
                <dd>Crystal Castles</dd>
                <dd>Cursive</dd>
            </dl>
            <dl>
                <dt>E</dt>
                <dd>Explosions In The Sky</dd>
            </dl>
            <dl>
                <dt>T</dt>
                <dd>Ted Leo & The Pharmacists</dd>
                <dd>T-Pain</dd>
                <dd>Thrice</dd>
                <dd>TV On The Radio</dd>
                <dd>Two Gallants</dd>
            </dl>
        </div>
<!--        <div class="image"><img src="../public/images/bg1.jpg" alt="测试图片"></div>-->
    </div>
</template>

<script>
    export default {
        name: 'sticky01',
        data() {
            return {
            }
        }
    }
</script>

<style scoped lang="scss">
    /*.container {
        box-sizing: border-box;
        width: 250px;
        margin: 20px auto;
    }*/
    /*.image {*/
    /*    img {*/
    /*        margin-top: 20px;*/
    /*        width: 450px;*/
    /*    }*/
    /*}*/

    dl {
        margin: 0;
        padding: 24px 0 0 0;
    }

    dt {
        background: #B8C1C8;
        border-bottom: 1px solid #989EA4;
        border-top: 1px solid #717D85;
        color: #FFF;
        font: bold 18px/21px Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 2px 0 0 12px;
        position: -webkit-sticky;
        position: sticky;
        top: 58px;
    }

    dd {
        font: bold 20px/45px Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0 0 0 12px;
        white-space: nowrap;
    }

    dd + dd {
        border-top: 1px solid #CCC
    }
</style>
