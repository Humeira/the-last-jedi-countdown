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
        background: url('./assets/img/img_1.jpeg') center center no-repeat;
        background-size: cover;
        background-color: #190206;
        height: 100vh;
        min-height: 100%;
        position: relative;
        overflow: hidden;
    }

    .container-gradient {
        z-index: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background: -webkit-linear-gradient(top left, rgba(0,0,0,0.3), rgba(0,0,0,0.3));
        background: linear-gradient(top left, rgba(0,0,0,0.3), rgba(0,0,0,0.3));
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



