<template>
  <div>
    <div class="nav-wrap">
      <div :key="rowIndex" class="anv-row" v-for="(row,rowIndex) in navs">
        <div :key="nav.src" class="frame" v-for="(nav) in row" @click="jumpUrl(nav.url)">
          <image class="nav-image" resize="cover" :src="nav.img"></image>
        </div>
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
    data(){
      return {
        activeIndex: null,
        navs: [
          [{
            url: 'http://www.lofter.com/inpin?fixedId=3008',
            img: 'https://easyreadfs.nosdn.127.net/1549002056171/nav1.png'
          },
            {
              url: 'http://www.lofter.com/inpin?fixedId=3009',
              img: 'https://easyreadfs.nosdn.127.net/1549002076084/nav2.png'
            },
            {
              url: 'http://www.lofter.com/benefit/h5/shelf/2005?fixedId=3010',
              img: 'https://easyreadfs.nosdn.127.net/1549002093783/nav3.png'
            },
            {
              url: 'http://www.lofter.com/benefit/h5/shelf/2005?fixedId=3011',
              img: 'https://easyreadfs.nosdn.127.net/1549002113571/nav4.png'
            }],
          [{
            url: 'http://www.lofter.com/benefit/h5/shelf/2008?fixedId=3013',
            img: 'https://easyreadfs.nosdn.127.net/1549002168582/nav5.png'
          }, {
            url: 'http://www.lofter.com/benefit/h5/shelf/2004?fixedId=3014',
            img: 'https://easyreadfs.nosdn.127.net/1549002189739/nav6.png'
          }, {
            url: 'http://www.lofter.com/benefit/h5/shelf/2007?fixedId=3012',
            img: 'https://easyreadfs.nosdn.127.net/1549002206607/nav7.png'
          }, {
            url: 'http://www.lofter.com/benefit/h5/shelf/2002?fixedId=3015',
            img: 'https://easyreadfs.nosdn.127.net/1549002224365/nav8.png'
          }]

        ]
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
  .nav-wrap {
    padding: 25px 0 0 25px;

  }

  .anv-row {
    flex-direction: row;
  }

  .frame {
    width: 175px;
    height: 190px;
  }

  .nav-image {
    width: 176px;
    height: 190px;
  }


</style>