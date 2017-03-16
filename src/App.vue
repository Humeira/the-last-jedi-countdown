<template>
    <div id="app">
        <timer date-props="December 15, 2017"></timer>
    </div>
</template>

<script>
    import Timer from './components/timer.vue';
    export default {
        name: 'app',
        components: {
            Timer
        }
    }
</script>



