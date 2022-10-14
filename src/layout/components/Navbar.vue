<template>
  <div class="navbar" flex="justify:between align:center">
    <Logo />
    <div class="right-menu" flex="align:center">
      <el-dropdown-item style="padding:0 10px;" @click.native="logout">
        <div flex="align:center">
          <i class="iconfont icontuichu" />
          <span>返回</span>
        </div>
      </el-dropdown-item>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import '@/assets/theme/wp-content/themes/onenav/js/jquery.min-3.03029.1.js'
import '@/assets/theme/wp-content/themes/onenav/js/jquery-ui.min-3.03029.1.js'
import '@/assets/theme/wp-includes/js/clipboard.min-5.6.2.js'
import '@/assets/theme/wp-content/themes/onenav/js/popper.min-3.03029.1.js'
import '@/assets/theme/wp-content/themes/onenav/js/bootstrap.min-3.03029.1.js'
// import "@/assets/theme/wp-content/themes/onenav/js/lazyload.min-3.03029.1.js"
import '@/assets/theme/wp-content/themes/onenav/js/app-3.03029.1.js'

import '@/assets/theme/wp-content/themes/onenav/css/iconfont-3.03029.1.css'
import '@/assets/theme/wp-content/themes/onenav/css/bootstrap.min-3.03029.1.css'
import '@/assets/theme/wp-content/themes/onenav/css/jquery.fancybox.min-3.03029.1.css'
import '@/assets/theme/wp-content/themes/onenav/css/style-3.03029.1.css'
import $ from 'jquery'

export default {
  components: {
    Logo
  },
  created() {
    // this.$store.dispatch('user/userinfo')
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/resetToken')
      this.$router.push(`/`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: $headerHeight;
  overflow: hidden;
  position: relative;
  background: $whiteColor;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 0 30px;

  .right-menu {
    height: 100%;

    &:focus {
      outline: none;
    }

    .avatar-container {
      cursor: pointer;

      .avatar-wrapper {
        color: $fontColor;
        padding-left: 20px;

        span {
          margin-left: 5px;
        }
      }
    }
  }
}

.user-dropdown {
  padding: 5px 10px;

  .el-dropdown-menu__item:focus,
  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: transparent;

    span {
      color: $mainColor;
    }
  }

  .el-dropdown-menu__item {
    padding: 0;
    text-align: center;
    line-height: 40px;
  }

  .iconfont {
    text-align: center;
    width: 24px;
    height: 24px;
    line-height: 24px;
    background-color: #EEEEEE;
    border-radius: 50%;
    display: inline-block;
    color: $mainColor !important;
    margin-right: 10px;
    font-size: 12px;
  }

  span {
    color: $blackColor;
  }
}
</style>
