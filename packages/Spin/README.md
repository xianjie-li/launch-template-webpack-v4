## 使用
### 组件模式
```jsx harmony
<Spin 
  show={true} // <bool=false>  显示/隐藏
  size="small"  // <str=('small'|'large')>  大小
  text="加载中..." // <str>  加载时显示的文本
  height="5rem" // <str|num>  默认Spin为内联元素，设置后会根据高度展开Spin父容器的高度以达到占位的效果，取值类型为number时，单位为px
  full={true} // <bool=false>   // 为true时，会将Spin父容器撑开到与最近的position定位元素宽高一直并产生遮罩, 请确保父元素有定位属性，否则Spin会超出范围
  bgColor=""  // <str=rgba(255,255,255,0.8)>  //  背景色, 只在full为true时有效
  textColor=""  // <str=rgba(0,0,0,0.45)>   // 加载文本颜色
  ></Spin>
```

### 指令模式
```jsx harmony
// 带文本
<div vSpin_text={true}>w: 200, h: 200</div>
// 不带文本
<div vSpin_text={true}>w: 200, h: 200</div>
// vue模板中使用
<div v-spin.text="true">w: 200, h: 200</div>
// 指令只支持简单的text和show命令，如果需要深度的配置，可以把把Spin放到需要加载的容器中实现和指令同样的效果
<div>
  w: 200, h: 200
  <Spin show={this.show2} full bgColor="pink" text="获取数据中..."></Spin>
</div>
```