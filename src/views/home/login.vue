<template>
  <div id="home">
    <!-- 遮罩：防止用户在动画播放期间点击屏幕 -->
    <div
      v-if="!flag"
      class="mask_ban_touch"
      style="width: 100%; height: 100%; z-index: 999; position: absolute"
    />
    <!-- 中间LOGO部分 -->
    <div
      :style="`background-image:url(${imgUrl})`"
      :class="[{ wrapper_blur: centerShow }, 'wrapper', 'bg-blur']"
    >
      <div :class="['img_shadow', { img_shadow_show: imgLoded }]" />
      <div class="inner" style="cursor: pointer" @click="goTo">
        <img
          :class="['R_logo', { R_logo_top: flag }]"
          src="@/assets/logo.svg"
        >
        <div :class="['hello', { hello_bottom: flag }]">
          <div>{{ slogan[i] }}</div>
          <div class="hello_bottom_text">
            点击以访问
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bg from '@/assets/bg.png'

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10)
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    default:
      return 0
  }
}

export default {
  name: 'Login',
  data() {
    this.startTime = new Date()
    return {
      flag: false, // 动画是否播放完毕
      slogan: [],
      i: 0,
      centerShow: false, // 导航抽屉显示状态
      imgLoded: false, // 背景图片加载状态
      imgUrl: Bg,
      loginData: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  computed: {
    indexPath() {
      return this.$store.getters.indexPath
    }
  },
  mounted() {
    setTimeout(() => {
      this.flag = true
    }, 1300)
    // 图片懒加载
    // this.imgUrl = 'http://pic1.win4000.com/wallpaper/2018-01-11/5a5709a9f15da.jpg'
    var img = new Image()
    img.src = this.imgUrl
    img.onload = () => {
      this.imgLoded = true
    }
    this.slogan = [
      '欢迎拜访',
      '歡迎拜訪',
      'Welcome, my friend!',
      '訪問へようこそ',
      '嗨，别来无恙',
      '不忘初心，一生浪漫',
      '最近还好吗？',
      '流星，落花，萤火',
      '马车越空，晃荡越响'
    ]
    this.i = randomNum(0, this.slogan.length - 1)
  },

  methods: {
    goTo() {
      // window.location.href = 'https://blog.esunr.xyz'
      this.$store.dispatch('user/login', this.loginData)
        .then(() => {
          this.loading = false
          this.$emit('loginSuccess')
          this.$router.push({
            path: this.redirect || this.indexPath
          })
        })
        .catch(() => {
          this.loading = false
        })
    },
    _jieliu(callback, delay) {
      const currentTime = new Date()
      if (currentTime - this.startTime > delay) {
        callback()
        this.startTime = new Date()
      }
    },
    showCenter() {
      this.centerShow = true
    },
    hideCenter() {
      this.centerShow = false
    },
    stopPropagation(e) {
      e.stopPropagation()
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .github {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 2rem;
    z-index: 1;
    cursor: pointer;
  }

  .wrapper {
    background-size: cover !important;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    animation: logoEnter 1.2s;
    animation-fill-mode: forwards;
    transition: all 0.8s;

    .inner {
      position: relative;

      .R_logo {
        height: 7rem;
        position: absolute;
        transform: translate(-50%, -50%);
        transition: all 1s;
        top: 0;
      }

      .R_logo_top {
        top: -3.2rem;
      }

      .hello {
        color: #ffffff;
        width: 18.75rem;
        text-align: center;
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        opacity: 0;
        top: 100px;
        transition: all 1s;
      }

      .hello_bottom {
        opacity: 1;
        top: 3.5rem;

        .hello_bottom_text {
          font-size: 1rem;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #fff;
        }
      }
    }
  }

  .img_shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fda085;
    overflow: hidden;
    transition: all 0.5s;
  }

  .img_shadow_show {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .wrapper_blur {
    filter: blur(1px);
  }

  .bottom {
    font-size: 2rem;
    position: absolute;
    color: #fff;
    bottom: 0%;
    opacity: 0;
    transition: all 1s;
    text-align: center;

    .bottom-info {
      font-size: 1rem;
      margin-top: 5px;
      animation: float 4s infinite ease-in-out;
    }
  }

  .bottom_show {
    bottom: 50px;
    opacity: 1;
  }

  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .center_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;

    .center_inner {
      width: 70%;
      position: absolute;
      overflow: hidden;
      border-radius: 0.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 5%;
      height: 70%;
    }
  }

  .record_number {
    width: 100%;
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0;
    transform: translateY(30px);
    transition: transform ease 1s;
  }

  .record_number_show {
    transform: translateY(0px);
  }
}

@media screen and (max-width: 900px) {
  #home {
    .center_wrapper {
      .center_inner {
        width: 100%;
        bottom: 0px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes logoEnter {
  0% {
    opacity: 0;
    width: 0rem;
    height: 0rem;
  }
  20% {
    opacity: 1;
    width: 15rem;
    height: 15rem;
  }
  80% {
    transform: rotate(360deg);
    width: 15rem;
    height: 15rem;
  }
  100% {
    transform: rotate(360deg);
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

