<template>
  <div class="wrapper">
    <scroller>
      <SliderIndex :imageList="imageList"/>
      <Nav/>
      <SignIn :user="user" @signIn="signIn"></SignIn>
      <HotBlock :goods="hotGoods"></HotBlock>
      <CategoryBlock :key="index" v-for="(category,index) in categories" :category="category"></CategoryBlock>
      <text class="no-more">没有更多了</text>
    </scroller>
  </div>
</template>

<script>
  var modal = weex.requireModule('modal');
  var stream = weex.requireModule('stream');
  import util from '@/assets/util';
  import Nav from '@/components/Nav'
  import Search from '@/components/Search'
  import SignIn from '@/components/SignIn'
  import SliderIndex from '@/components/Slider'
  import HotBlock from '@/components/HotBlock'
  import CategoryBlock from '@/components/CategoryBlock'
  import mixins from '@/mixins'

  export default {
    mixins: [mixins],
    name: 'App',
    components: {
      Nav,
      SignIn,
      SliderIndex,
      HotBlock,
      CategoryBlock
    },
    data () {
      return {
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
        hotGoods: [],
        categories: [],
        imageList: [],
        user: {}
      }
    },
    methods: {
      signIn(){
        this.POST('/api/signIn.json', {userId: this.user.userId}, res => {
          let data = res.data;
          if (data.success) {
            let user = this.user;
            user.isSignIn = true;
            this.user = user
            modal.toast({
              message: '签到成功'
            })
          }
        })
      }
    },
    created () {
      util.initIconFont();
      this.GET('/api/getIndexSlider.json', res => {
        console.log(res)
        var imageList = res.data.imageList || [];
        this.imageList = imageList;
      })
      this.GET('/api/hotGoods.json', res => {
        console.log(res)
        var goods = res.data.goods || [];
        this.hotGoods = goods;
      })
      this.GET('/api/category.json', res => {
        console.log(res)
        var categories = res.data.categories || [];
        this.categories = categories;
      })
      this.GET('/api/get/userInfo.json', res => {
        console.log(res)
        this.user = res.data.user;
      })
    }
  }
</script>

<style scoped>
  .no-more {
    margin-top: 30px;
    padding: 36px 0 31px 0;
    color: #999;
    font-size: 24px;
    text-align: center;
    background: #f5f5f5;
  }

</style>
