<template>
    <div>
        {{days}} {{hours}} {{minutes}} {{seconds}}
    </div>
</template>

<script>
    export default{
        props : ['dateProps'],
        mounted: function () {
            this.$nextTick(function () {
                window.setInterval(() => {
                    this.current = Math.trunc((new Date()).getTime() / 1000);
            },1000);
            });
        },

        data() {
            return {
                current : Math.trunc((new Date()).getTime() / 1000),
                date : Math.trunc(Date.parse(this.dateProps) / 1000)
            }
        },

        computed: {
            days() {
                return Math.trunc((this.date - this.current) / 3600 / 24);
            },

            hours() {
                return Math.trunc((this.date - this.current) / 3600) % 24;
            },

            minutes() {
                return Math.trunc((this.date - this.current) / 60 )  % 60;
            },

            seconds() {
                return Math.trunc((this.date - this.current)) % 60;
            }
        }
    }
</script>
