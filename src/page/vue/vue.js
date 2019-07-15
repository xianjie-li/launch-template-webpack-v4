import '@/main';
import './vue.scss';

import Vue from 'vue';
import HelloWorld from '@/vue/HelloWorld';

new Vue({
  el: '#root',
  render: h => h(HelloWorld)
});