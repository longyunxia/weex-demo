<template>
  <div>
    <div class="slider-wrap">
      <slider class="slider" interval="3000" auto-play="true" @change="onchange">
        <div :key="img.url" class="frame" v-for="img in sliderImgs" @click="imgClick(img)">
          <image class="image" resize="cover" :src="img.url"></image>
        </div>
      </slider>
      <div class="xtag">
        <text class="xtag-text">{{activeIndex + 1}}/{{(sliderImgs || 0).length}}</text>
      </div>
    </div>
    <div v-if="bigPic.visible" class="m-bigpic" @click="closeBigPic()">
      <image class="bigpic" :style="{width:bigPic.width+'px',height:bigPic.height+'px'}" :src="bigPic.url"></image>
    </div>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  export default{
    props: ['sliderImgs'],
    data(){
      return {
        activeIndex: 1,
        bigPic: {
          visible: false,
          width: 0,
          height: 0,
          url: null
        }
      }

    },
    methods: {
      closeBigPic(){
        this.bigPic = {}
      },
      imgClick(img){
        var bigPic = {
          visible: true,
          width: img.width,
          height: img.height,
          url: img.url
        }
        this.bigPic = bigPic;
      },
      onchange (event) {
        this.activeIndex = event.index;
      }
    }
  }
</script>
<style scoped>
  .slider-wrap {
    position: relative;
  }

  .slider {
    width: 750px;
    height: 375px;
  }

  .image {
    width: 750px;
    height: 375px;
  }

  .xtag {
    position: absolute;
    bottom: 27px;
    right: 30px;
  }

  .xtag-text {
    min-width: 60px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 3px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    border-radius: 20px;
  }

  .m-bigpic {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background-color: #000000;
    justify-content: center;
    align-items: center;
  }

  .bigpic {

  }

</style>