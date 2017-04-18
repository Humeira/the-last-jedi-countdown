<template>
    <div id="app">
        <div class="container">
            <div class="container-gradient">
                <timer date-props="December 15, 2017"></timer>
            </div>

        </div>
    </div>
</template>
<style>
    body {
        margin: 0;
        padding: 0
    }

    .container {
        width: 100%;
        background: url('./assets/img/poster.png') center center no-repeat;
        background-color: #190206;
        height: 100vh;
        min-height: 100%;
        position: relative;
        overflow: hidden;
        background-blend-mode: screen;
    }

    .container-gradient {
        z-index: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.8;
        background: -webkit-linear-gradient(126deg, #190206 50%, #770000 50%);
        background: linear-gradient(126deg, #190206 50%, #770000 50%);
    }
</style>
<script>
    import Timer from './components/timer.vue';
    export default {
        name: 'app',
        components: {
            Timer
        }
    }
</script>



