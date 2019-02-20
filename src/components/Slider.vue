<template>
  <div>
    <div class="slider-wrap">
      <slider class="slider" interval="3000" auto-play="true" @change="onchange">
        <div :key="img.src" class="frame" v-for="img in imageList" @click="jumpUrl(img.url)">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
      </slider>
      <div class="xtag">
        <text class="xtag-text">{{activeIndex + 1}}/{{(imageList || 0).length}}</text>
      </div>
    </div>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  var event = weex.requireModule('event')
  var navigator = weex.requireModule('navigator')
  import util from '@/assets/util'
  export default{
    props:["imageList"],
    data(){
      return {
        activeIndex: null
      }

    },
    methods: {
      onchange (event) {
        this.activeIndex = event.index;
      },
      jumpUrl (url) {
        if (url == '') rerun;
        event.openURL(url);

      },
      jumpList (good) {
        navigator.push({
          url: util.getJumpBaseUrl('list'),
          animated: "true"
        });

      }
    }
  }
</script>
<style scoped>
  .slider {
    width: 750px;
    height: 240px;
  }

  .image {
    width: 750px;
    height: 240px;
  }

  .xtag {
    position: absolute;
    bottom: 27px;
    right: 30px;
  }

  .xtag-text {
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 3px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    border-radius: 20px;
  }

</style>