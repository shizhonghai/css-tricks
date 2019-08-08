<style scoped lang="scss">
    .load-container {
        margin: 50px auto;
        width: 48px;
        height: 48px;
        position: relative;
    }
    .balls {
        width: 4em;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .balls div {
        width: 0.8em;
        height: 0.8em;
        border-radius: 50%;
        background-color: #00adb5;
    }

    .balls div:nth-of-type(1) {
        transform: translateX(-100%);
        animation: left-swing 0.5s ease-in alternate infinite;
    }

    .balls div:nth-of-type(3) {
        transform: translateX(-95%);
        animation: right-swing 0.5s ease-out alternate infinite;
    }

    @keyframes left-swing {
        50%,
        100% {
            transform: translateX(95%);
        }
    }

    @keyframes right-swing {
        50% {
            transform: translateX(-95%);
        }
        100% {
            transform: translateX(100%);
        }
    }


</style>

<template>
    <div class="load-container">
        <div class="balls">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "load10",
        data() {
            return {};
        }
    };
</script>