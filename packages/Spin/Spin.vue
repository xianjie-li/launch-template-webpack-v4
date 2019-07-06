<script>
  import Spin from './mspin_googcolor_medium.svg';

  export default {
    name: 'Spin',
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      height: {
        type: [String, Number],
        default: 0
      },
      text: {
        type: String
      },
      size: {
        validator(value) {
          return ['small', 'large'].indexOf(value) !== -1
        }
      },
      full: {
        type: Boolean,
        default: false,
      },
      bgColor: {
        type: String,
        default: 'rgba(255,255,255,0.8)'
      },
      textColor: {
        type: String,
        default: 'rgba(0,0,0,0.45)'
      }
    },
    computed: {
      calcHeight() {
        let isNum = typeof this.height === 'number';
        return isNum ? this.height + 'px' : this.height;
      },
      calcSize() {
        let scale = 1;
        if(this.size === 'small') scale = 0.9;
        if(this.size === 'large') scale = 1.1;
        return scale;
      }
    },
    render() {
      const Spin = (
        <div
          class={[
            'mspin-wrap',
            this.height === 0 ? 'mspin-wrap__inner' : 'mspin-wrap__block',
            this.full ? 'mspin-wrap-full' : '']}
          style={{
            height: this.height === 0 ? 'auto' : this.calcHeight,
            lineHeight: this.calcHeight,
            backgroundColor: this.full ? this.bgColor : '',
          }}>
          <div class="mspin-medium_innerwrap" style={{ transform: `scale(${this.calcSize})` }}>
            <div class="mspin-medium">
              <div>
                <div></div>
              </div>
            </div>
            {this.text && <div class="mspin-text" style={{color: this.textColor}}>{this.text}</div>}
          </div>
        </div>
      )

      return (
        <transition name="bk-fade">
          {this.show && Spin}
        </transition>
      )
    },
  };
</script>

<style lang="scss">
  @import '../Style/index';

  .mspin-wrap {
    box-sizing: border-box;
    text-align: center;
  }

  .mspin-wrap-full {
    display: inline-flex !important;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1000;
    margin: 0;

    .mspin-medium_innerwrap {
      margin: auto;
    }
  }

  .mspin-medium_innerwrap {
    display: inline-block;
    vertical-align: middle;
    line-height: 1.5;
  }

  .mspin-wrap__block {
    display: block;
  }

  .mspin-wrap__inner {
    vertical-align: middle;
    display: inline-block;
  }

  .mspin-text {
    font-size: 15px;
  }

  .mspin-medium {
    display: inline-block;
    width: 36px;
    height: 36px;
    overflow: hidden;
    animation: mspin-rotate 1568.63ms infinite linear;
  }

  .mspin-medium > div {
    animation: mspin-revrot 5332ms infinite steps(4);
  }

  .mspin-medium > div > div {
    background-image: url("./mspin_googcolor_medium.svg");
    background-size: 100%;
    width: 11664px;
    height: 36px;
    animation: mspin-medium-film 5332ms infinite steps(324);
  }

  @keyframes mspin-medium-film {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-11664px);
    }
  }

  @keyframes mspin-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes mspin-revrot {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
</style>