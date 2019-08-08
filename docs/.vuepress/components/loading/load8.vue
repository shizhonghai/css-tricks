<style scoped lang="scss">
    .load-container {
        margin: 50px auto;
        width: 48px;
        height: 48px;
        position: relative;
    }
    div.load8 {
        display: flex;
        width: 3.5em;
        height: 3.5em;
        border: 3px solid transparent;
        border-top-color: #00adb5;
        border-bottom-color: #00adb5;
        border-radius: 50%;
        animation: spin 1.5s linear infinite;
    }

    div.load8:before {
        content: '';
        display: block;
        margin: auto;
        width: 0.75em;
        height: 0.75em;
        border: 3px solid #00adb5;
        border-radius: 50%;
        animation: pulse 1s alternate ease-in-out infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes pulse {
        from {
            transform: scale(0.5);
        }
        to {
            transform: scale(1);
        }
    }
</style>

<template>
    <div class="load-container">
        <div class="load8"></div>
    </div>
</template>

<script>
    export default {
        name: "load8",
        data() {
            return {};
        }
    };
</script>