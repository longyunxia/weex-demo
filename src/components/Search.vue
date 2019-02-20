<template>
  <div>
    <div class="search-wrap" @click="onSearchClick">
      <div class="search">
        <text class="iconfont icon-search">&#xe614;</text>
        <text class="search-text">护肤套盒</text>
      </div>
    </div>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  export default{
    methods: {
      onSearchClick(event) {
        console.log('onclick:', event)
        modal.toast({
          message: 'search click',
          duration: 0.8
        })
      }
    }
  }
</script>
<style scoped>
  .iconfont {
    font-family: iconfont;
  }

  .search-wrap {
    padding-top: 20px;
    width: 750px;
  }

  .search {
    align-items: center;
    flex-direction: row;
    margin-right: 20px;
    margin-left: 20px;
    height: 58px;
    cursor: text;
    border-radius: 8px;
    background-color: rgb(234, 235, 237);
  }

  .icon-search {
    margin-left: 10px;
  }

  .search-text {
    flex: 1 1 0%;
    font-size: 13px;
    line-height: 29px;
    color: rgb(114, 114, 115);
    text-align: left;
    -webkit-box-flex: 1;
    margin-left: 10px;
  }
</style>