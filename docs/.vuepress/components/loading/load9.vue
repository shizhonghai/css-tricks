<style scoped lang="scss">
    .load-container {
        margin: 50px auto;
        width: 48px;
        height: 48px;
        position: relative;
    }
    .box {
        perspective: 120px;
    }

    .coin {
        width: 2em;
        height: 2em;
        border-radius: 50%;
        border: 4px solid #00adb5;
        animation: spin 1.5s ease-in-out infinite;
    }

    @keyframes spin {
        to {
            transform: rotateY(540deg);
        }
    }

</style>

<template>
    <div class="load-container">
        <div class="box">
            <div class="coin"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "load9",
        data() {
            return {};
        }
    };
</script>