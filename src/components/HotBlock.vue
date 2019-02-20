<template>
  <div>
    <div class="hot-wrap">
      <text class="title">爆款推荐</text>
      <div class="good-list">
        <div :key="index" class="good" v-for="(good,index) in goods" @click="jumpDetail(good)">
          <image class="good-image"
                 :src="good.imgSrc"></image>
          <div class="good-info">
            <text class="name">{{good.name}}</text>
            <text class="desc">{{good.desc}}</text>
            <div class="coupons">
              <text v-if="good.coupon" class="coupon" >{{good.coupon}}</text>
            </div>
            <div class="price">
              <div v-if="good.payType=='coin'" class="price-inner">
                <image class="icon-coin" :src="require('../images/index/icon-coin.png')"></image>
                <text class="price-coin">{{good.actualPrice}}</text>
              </div>
              <div v-else class="price-inner">
                <text class="actual-price">￥{{good.actualPrice}}</text>
                <text v-if="good.originalPrice" class="original-price">￥{{good.originalPrice}}</text>
              </div>
            </div>
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
    props: ['goods'],
    data(){
      return {}
    },
    methods: {
      jumpDetail (good) {
        //const url = weex.config.bundleUrl;
        console.log(util.getJumpBaseUrl('detail') + '?goodId=' + good.id);
        navigator.push({
          url: util.getJumpBaseUrl('detail') + '?goodId=' + good.id,
          animated: "true"
        });

      }
    }
  }
</script>
<style scoped>
  .hot-wrap {
    padding: 0 30px;
    margin-top: 50px;
  }

  .title {
    color: #333;
    font-size: 36px;
  }

  .good-list {
  }

  .good {
    margin-top: 30px;
    flex-direction: row;
  }

  .good-image {
    width: 200px;
    height: 200px;
    border-radius: 4px;
  }

  .good-info {
    position: relative;
    margin-left: 30px;
  }

  .name {
    width: 450px;
    line-height: 42px;
    lines: 1;
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

  .icon-coin {
    width: 22px;
    height: 28px;
  }

  .price {
    flex: 2;
    justify-content: flex-end;

  }

  .price-inner {
    flex-direction: row;
    align-items: flex-end;
  }

  .price-coin {
    font-size: 32px;
    color: #333;
    margin-left: 10px;
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