import '@/main';
import './vue.scss';

import Vue from 'vue';
import HelloWorld from '@/views/HelloWorld';

new Vue({
  el: '#root',
  render: h => h(HelloWorld)
});