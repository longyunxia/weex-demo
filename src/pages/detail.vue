<template>
  <div class="wrapper">
    <scroller>
    <SliderDetail :sliderImgs="good.sliderImgs"></SliderDetail>
    <div class="m-product">
      <div class="part part-1">
        <div class="price">
          <text class="actual-price">￥{{good.actualPrice}}</text>
          <text class="original-price">￥{{good.originalPrice}}</text>
        </div>
        <text class="pdstock">库存充足{{good.pdstock}}</text>
      </div>
      <div class="part part-2">
        <text class="name">{{good.name}}</text>
      </div>
    </div>
    <div class="m-selattr">
      <div class="selattr js-attr-nosel" data-stock="2998" id="auto-id-BfqZu2m5">
        <text class="selattrtxt">选择规格数量</text><text
          class="arrow iconfont">&#xe620;</text></div>
    </div>
    <div class="m-detailpics" >
      <image :key="img.url" v-for="img in good.detailImgs" :style="{width:img.width+'px',height:img.height+'px'}" resize="cover" :src="img.url"></image>
    </div>
    </scroller>
  </div>
</template>

<script>
  var modal = weex.requireModule('modal');
  var stream = weex.requireModule('stream');
  import SliderDetail from '@/components/SliderDetail'
  import util from '@/assets/util';
  import mixins from '@/mixins'

  export default {
    name: 'Detail',
    mixins:[mixins],
    components: {
      SliderDetail
    },
    data () {
      return {
        good:{}
      }
    },
    created () {
      var params=util.getUrlParam()
      util.initIconFont();
      this.GET('/api/good.json?goodId='+params.goodId, res => {
        console.log(res)
        this.good = res.data||{};
      })
    }
  }
</script>

<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .m-product{
    padding: 20px 30px;
    background-color: #ffffff;
  }
  .part-1 {
    flex-direction: row;
  }
  .price{
    flex-direction: row;
  }

  .pdstock {
    flex:1 1 auto;
    text-align:right;
    color:#999;
    font-size:26px;
  }
  .price{
    align-items: baseline;
  }
  .actual-price {
    color: #BA5038;
    font-size: 56px;
  }

  .original-price {
    color: #999;
    font-size: 28px;
    margin-left: 20px;
    text-decoration: line-through;
  }
  .part-2{
    margin-top:10px;
    line-height: 50px;
    color: #333;
    font-size: 36px;
  }
  .m-selattr{
    margin-top:20px;
    padding:30px;

  }
  .selattr{
    flex-direction: row;
    justify-content: space-between;
  }
</style>
