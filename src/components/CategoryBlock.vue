<template>
  <div>
    <div class="category-wrap">
      <image class="bg-image" :src="category.bgSrc"></image>
      <div class="name-wrap">
        <text class="category-name">{{category.name}}</text>
        <text class="iconfont icon-more">&#xe63c;</text>
      </div>
      <text class="spguide">{{category.guide}}</text>
      <div v-if="category.goods&&category.goods.length>0" class="good-list">
        <div :key="index" v-for="(good, index) in category.goods" class="good" @click="jumpDetail(good)">
          <image class="good-image"
                 :src="good.imgSrc"></image>
          <div class="good-info">
            <text class="name">{{good.name}}</text>
            <text class="desc">{{good.desc}}</text>
            <div class="coupons">
              <text v-if="good.coupon" class="coupon">{{good.coupon}}</text>
            </div>
            <text class="actual-price">￥{{good.actualPrice}}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var navigator = weex.requireModule('navigator')
  const modal = weex.requireModule('modal')
  import util from '@/assets/util'
  export default{
    props: ['category'],
    data(){
      return {}
    },
    methods: {
      jumpDetail (good) {
        //const url = weex.config.bundleUrl;
        navigator.push({
          url: util.getJumpBaseUrl('detail') + '?goodId=' + good.id,
          animated: "true"
        });

      }
    }
  }
</script>
<style scoped>
  .category-wrap {
    padding-top: 26px;
    margin-top: 40px;
    position: relative;
    align-items: center;
  }

  .bg-image {
    width: 750px;
    height: 240px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  .category-name {
    height: 50px;
    line-height: 50px;
    color: #333;
    font-size: 36px;
  }

  .name-wrap {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .spguide {
    line-height: 33px;
    color: #333;
    font-size: 24px;
    align-items: center;
  }

  .icon-more {
    margin-left: 5px;
  }

  .iconfont {
    font-family: iconfont;
  }

  .good-list {
    margin-top: 20px;
    padding: 0 15px;
    width: 750px;
    flex-direction: row;
    justify-content: space-between;
  }

  .good {
    width: 220px;
  }

  .good-image {
    width: 220px;
    height: 220px;
  }

  .good-info {
    margin-left: 30px;
  }

  .name {
    line-height: 42px;
    lines: 2;
    text-overflow: ellipsis;
    color: #333;
  }

  .desc {
    margin-top: 10px;
    line-height: 33px;
    color: #999;
    font-size: 24px;
  }

  .coupons {
    flex-direction: row;
  }

  .coupon {
    margin-right: 10px;
    border-radius: 2px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin-top: 10px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #CEB48C;

  }


  .price-inner {
    flex-direction: row;
    align-items: flex-end;
  }

  .actual-price {
    height: 45px;
    line-height: 45px;
    color: #BA5038;
    font-size: 32px;
  }

  .original-price {
    color: #999;
    font-size: 28px;
    margin-left: 20px;
    text-decoration: line-through;
  }

</style>