<script>
    import Vue from 'vue';
    export default new Vue({
        el: 'superman',
        template: `
                <div class="cover-transparent" :class="{hide: !isShow}" id="J_Superman">
                    <div class="superman-body">
                        <i class="icon-superman i-superman-cloud"></i>
                        <div class="superman">
                            <i class="icon-superman i-superman-body"></i>
                            <i class="icon-superman i-superman-cloak"></i>
                        </div>
                        <p>加载中...</p>
                    </div>
                </div>
        `,
        data: {
            isShow: false,
        },
        methods: {
            show: function () {
                this.isShow = true;
            },
            hide: function() {
                this.isShow = false;
            }
        }
    });
</script>

<style lang="less" type="text/less">
    .icon-superman {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB9CAYAAACYovzsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MkRFQzlGOTc0MkExMUU2OTQyOUJGRDk3MUI5MTg2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MkRFQzlGQTc0MkExMUU2OTQyOUJGRDk3MUI5MTg2MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyREVDOUY3NzQyQTExRTY5NDI5QkZEOTcxQjkxODYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyREVDOUY4NzQyQTExRTY5NDI5QkZEOTcxQjkxODYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+42K/8AAAFM5JREFUeNrsnQmQFUWa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");
        background-repeat: no-repeat;
        background-size: 1.5rem 1.6rem;
    }
    .cover-transparent {
        display: none;
        position: fixed;
        z-index: 9999;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .superman-body {
        position: fixed;
        top: 14em;
        left: 50%;
        margin-left: -3.8em;
        width: 7.6em;
        height: 7.6em;
        border-radius: 5px;
        background: rgba(40, 40, 40, 0.75);
        overflow: hidden;
    }
    .i-superman-cloud {
        width: 7em;
        height: 4em;
        background-position: 0 -3.1em;
        position: absolute;
        top: 1em;
        left: -120%;
        -webkit-animation: superman_cloud 1s ease-in-out 0s infinite;
        animation: superman_cloud 1s ease-in-out 0s infinite;
    }
    .superman-body .superman {
        position: absolute;
        top: 1.2em;
        width: 100%;
        -webkit-animation: superman_body 1s ease-in-out 0s infinite;
        animation: superman_body 1s ease-in-out 0s infinite;
    }
    .i-superman-body {
        width: 5.2em;
        height: 2em;
        background-position: 0 -1.1em;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .i-superman-cloak {
        width: 3.8em;
        height: 1em;
        background-position: 0 0;
        position: absolute;
        top: 0.4em;
        left: 50%;
        margin-left: -1.25em;
        -webkit-animation: superman_cloak 1s ease-in-out 0s infinite;
        animation: superman_cloak 1s ease-in-out 0s infinite;
    }
    .superman-body p {
        width: 100%;
        position: absolute;
        top: 5em;
        text-align: center;
        color: #fff;
        font-size: 1.1em;
        font-weight: bold;
    }
    @-webkit-keyframes superman_cloak {
        0% {
            -webkit-transform-origin: 0 95%;
            transform-origin: 0 95%;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform-origin: 0 95%;
            transform-origin: 0 95%;
            -webkit-transform: rotate(-10deg);
            transform: rotate(-10deg);
        }
        100% {
            -webkit-transform-origin: 0 95%;
            transform-origin: 0 95%;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
    }
    @keyframes superman_cloak {
        0% {
            -webkit-transform-origin: 0 95%;
            transform-origin: 0 95%;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform-origin: 0 95%;
            transform-origin: 0 95%;
            -webkit-transform: rotate(-10deg);
            transform: rotate(-10deg);
        }
        100% {
            -webkit-transform-origin: 0 95%;
            transform-origin: 0 95%;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
    }
    @-webkit-keyframes superman_body {
        0% {
            top: 1.2em;
        }
        50% {
            top: 2em;
        }
        100% {
            top: 1.2em;
        }
    }
    @keyframes superman_body {
        0% {
            top: 1.2em;
        }
        50% {
            top: 2em;
        }
        100% {
            top: 1.2em;
        }
    }
    @-webkit-keyframes superman_cloud {
        0% {
            left: -120%;
        }
        100% {
            left: 120%;
        }
    }
    @keyframes superman_cloud {
        0% {
            left: -120%;
        }
        100% {
            left: 120%;
        }
    }
</style>


