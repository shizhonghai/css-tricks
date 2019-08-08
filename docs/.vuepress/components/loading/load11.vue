<style scoped lang="scss">
    .load-container {
        margin: 50px auto;
        width: 48px;
        height: 48px;
        position: relative;
    }
    svg {
        width: 3.75em;
        animation: 1.5s spin ease infinite;
    }

    .ring {
        fill: none;
        stroke: hsla(183, 100%, 35%, 0.3);
        stroke-width: 2;
    }

    .ball {
        fill: #00adb5;
        stroke: none;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>

<template>
    <div class="load-container">
        <svg viewBox="0 0 50 50">
            <circle class="ring" cx="25" cy="25" r="20"></circle>
            <circle class="ball" cx="25" cy="5" r="3.5"></circle>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "load11",
        data() {
            return {};
        }
    };
</script>