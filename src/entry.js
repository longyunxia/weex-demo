import Vue from 'vue';
import weex from 'weex-vue-render';
const modal = weex.requireModule('modal')
import toast from '@/components/common/Toast/index'
weex.init(Vue);

weex.registerModule('modal', {
  ...modal,
  toast
})
