
<template>
    <section id="J_BannerSliderBody">
        <div>
            <img :src="banners[banners.length-1].image" :to="banners[banners.length-1].to">
            <img v-for="item in banners" :src="item.image" :to="item.to">
        </div>
        <ul>
            <li v-for="item in banners"></li>
        </ul>
    </section>
</template>

<script>
    import bannerSlider from '../../../../../../wlf-common/plugin/bannerSlider.babel';

    export default {
        data() {
            return {};
        },
        props: ['banners'],
        mounted() {
            bannerSlider({id:'J_BannerSliderBody', time: 4000});
        }
    }

</script>

<style scoped lang="less" type="text/less">
    section {
        width: 100%;
        height: 200px;
        position: relative;
        div {
            height: 200px;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            display: flex;
            flex-flow: row nowrap;
            img {
                flex: auto;
            }
        }
        ul {
            position: absolute;
            z-index: 2;
            bottom: 0.5em;
            left: 1em;
            overflow: hidden;
            li {
                float: left;
                margin-right: 0.7em;
                width: 0.5em;
                height: 0.5em;
                border-radius: 0.5em;
                background: rgba(255,255,255,0.4);
                &.active {
                    background: rgba(255,255,255,0.8);
                }
            }
        }
    }
</style>