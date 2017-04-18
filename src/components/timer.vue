<template>
    <div class="wrapper">
        <div class="time">
            {{ days | beautify }}
            <div class="time__mode">
                Days
            </div>
        </div>
        <div class="time">
            {{ hours | beautify }}
            <div class="time__mode">
                Hours
            </div>

        </div>
        <div class="time">
            {{ minutes| beautify }}
            <div class="time__mode">
                Minutes
            </div>

        </div>
        <div class="time">
            {{ seconds | beautify }}
            <div class="time__mode">
                Seconds
            </div>

        </div>

    </div>
</template>
<style>
    .wrapper {
        width: 100%;
        position: absolute;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        dislpay: inline-block;
        text-align: center;
        font-family: "Lato", Arial, sans-serif;
        font-weight: normal;
        color: #f1f1f1;
    }

    .time {
        display: inline-block;
        padding: 20px;
        font-size: 4em;
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        .time {
            font-size: 2em;
        }
    }

    .time .time__mode {
        font-size: 15px;
        font-weight: 300;
        margin: 7px 0;
        letter-spacing: 4px;
    }

    @media screen and (max-width: 768px) {
        .time .time__mode {
            font-size: 12px;
            letter-spacing: normal;
        }
    }
</style>
<script>
    export default{
        props: ['dateProps'],
        mounted: function () {
            this.$nextTick(function () {
                window.setInterval(() => {
                    this.current = Math.trunc((new Date()).getTime() / 1000);
            },
                1000
                )
                ;
            });
        },

        data() {
            return {
                current: Math.trunc((new Date()).getTime() / 1000),
                date: Math.trunc(Date.parse(this.dateProps) / 1000)
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
                return Math.trunc((this.date - this.current) / 60) % 60;
            },

            seconds() {
                return Math.trunc((this.date - this.current)) % 60;
            }
        },

        filters: {
            beautify: function (value) {
                let temp = value.toString();

                if (temp.length <= 1) {
                    return "0" + value.toString();
                } else {
                    return value.toString();
                }
            }
        }
    }
</script>
