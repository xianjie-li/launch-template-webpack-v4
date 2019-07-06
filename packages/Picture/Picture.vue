<template>
  <img v-if="!loadErr"
       ref="img"
       @error="setDefaultSrc" />
  <canvas :class="$sty.pictureCanvas"
          v-else
          ref="canvas"
          width="160"
          height="160"></canvas>
</template>

<script>
export default {
  name: 'Picture',
  data() {
    return {
      loadErr: false
    };
  },
  mounted() {
    if (!this.$attrs.src) {
      this.setDefaultSrc({
        target: this.$refs.img // 针对直接没有传src的情况，生成一个假事件对象并设置默认图
      });
    }
  },
  methods: {
    setDefaultSrc({ target: img }) {
      // 如果已经加载过一次默认图了直接return，防止一直onerror导致死循环
      if (this.loadErr) return;
      this.loadErr = true;

      let width = img.offsetWidth;
      let height = img.offsetHeight;

      this.$nextTick(() => {
        this.initCanvas(width, height);
      });
    },
    initCanvas(width, height) {
      let canvas = this.$refs.canvas;
      let ctx = canvas.getContext('2d');
      let fontSize = width >= 100 ? 16 : 12;

      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = fontSize + 'px tabular-nums';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${width}x${height}`, width / 2, height / 2);
    }
  }
};
</script>

<style lang="scss" module="$sty">
  @import '../Style/index';

.pictureCanvas {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>