import Vue from 'vue';
import Spin from './Spin';

const SpinCls = Vue.extend(Spin);
const positopns = ['relative', 'absolute', 'fixed'];

export default {
  inserted(el, { modifiers, value }) {
    // 创建Spin实例并插入指令元素中
    let spinInstance = new SpinCls({
      el: document.createElement('div')
    });
    el.instance = spinInstance;

    spinInstance.full = true;
    spinInstance.show = value;
    modifiers.text && (spinInstance.text = '加载中...');

    // 如果没有设置position属性或者不支持getComputedStyle，则添加relative防止Spin组件溢出
    let hasPos = hasPositions(el);
    if(!positopns.includes(hasPos)) {
      el.style.position = 'relative';
      el._position = hasPos;
    }

    el.appendChild(spinInstance.$el)
  },
  update(el, { modifiers, value }) {
    if(!el.instance) return;
    el.instance.show = value;
  },
  unbind(el) {
    el.instance && el.instance.$destroy();
  }
};

function hasPositions(dom) {
  let position = window.getComputedStyle && window.getComputedStyle(dom).position;
  return position;
}