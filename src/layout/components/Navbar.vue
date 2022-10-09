<template>
  <!--  <div class="big-header-banner">-->
  <!--    <div id="header" class="page-header sticky">-->
  <!--      <div class="navbar navbar-expand-md">-->
  <!--        <div class="container-fluid p-0">-->

  <!--          <a href="" class="navbar-brand d-md-none" title="网站导航">-->
  <!--            <img-->
  <!--              src="wp-content/uploads/2020/01/ywdh-logo-bark-ico.png"-->
  <!--              class="logo-light"-->
  <!--              alt="网站导航"-->
  <!--            >-->
  <!--            <img-->
  <!--              src="wp-content/uploads/2020/01/ywdh-logo-ico.png"-->
  <!--              class="logo-dark d-none"-->
  <!--              alt="网站导航"-->
  <!--            >-->
  <!--          </a>-->

  <!--          <div class="collapse navbar-collapse order-2 order-md-1">-->
  <!--            <div class="header-mini-btn">-->
  <!--              <label>-->
  <!--                <input id="mini-button" type="checkbox">-->
  <!--                <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">-->
  <!--                  <path class="line&#45;&#45;1" d="M0 40h62c18 0 18-20-17 5L31 55" />-->
  <!--                  <path class="line&#45;&#45;2" d="M0 50h80" />-->
  <!--                  <path class="line&#45;&#45;3" d="M0 60h62c18 0 18 20-17-5L31 45" />-->
  <!--                </svg>-->
  <!--              </label>-->

  <!--            </div>-->

  <!--            <ul class="navbar-nav site-menu" style="margin-right: 16px;">-->
  <!--              <li-->
  <!--                id="menu-item-281"-->
  <!--                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-281"-->
  <!--              >-->
  <!--                <a href="https://gitee.com/chongzhe/nav_web">-->
  <!--                  <i class="iconfont icon-zhuye1 fa-lg mr-2" />-->
  <!--                  <span>首页</span></a>-->
  <!--              </li>-->
  <!--              <li-->
  <!--                id="menu-item-786"-->
  <!--                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-786"-->
  <!--              ><a-->
  <!--                target="_blank"-->
  <!--                rel="noopener"-->
  <!--                href="javascript:;"-->
  <!--              >-->
  <!--                <i class="iconfont icon-rizhi fa-lg mr-2" />-->
  <!--                <span>日志</span></a></li>-->

  <!--              <li-->
  <!--                id="menu-item-284"-->
  <!--                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-284"-->
  <!--              >-->
  <!--                <a href="about.html" one-link-mark="yes">-->
  <!--                  <i class="iconfont icon-guanyu fa-lg mr-2" />-->
  <!--                  <span>关于</span></a>-->
  <!--                <ul class="sub-menu">-->
  <!--                  <li-->
  <!--                    id="menu-item-264"-->
  <!--                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-264"-->
  <!--                  >-->
  <!--                    <a href="https://weibo.com">站长微博</a>-->
  <!--                  </li>-->
  <!--                  <li-->
  <!--                    id="menu-item-285"-->
  <!--                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-285"-->
  <!--                  >-->
  <!--                    <a href="#">关于导航</a>-->
  <!--                  </li>-->
  <!--                </ul>-->
  <!--              </li>-->

  <!--            </ul>-->
  <!--            <div class="rounded-circle weather">-->
  <!--              <div id="he-plugin-simple" style="display: contents;" />-->
  <!--              &lt;!&ndash;              <script>WIDGET = {&ndash;&gt;-->
  <!--              &lt;!&ndash;                CONFIG: {&ndash;&gt;-->
  <!--              &lt;!&ndash;                "modules": "12034",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "background": 5,&ndash;&gt;-->
  <!--              &lt;!&ndash;                "tmpColor": "E4C600",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "tmpSize": 14,&ndash;&gt;-->
  <!--              &lt;!&ndash;                "cityColor": "E4C600",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "citySize": 14,&ndash;&gt;-->
  <!--              &lt;!&ndash;                "aqiColor": "#E4C600",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "aqiSize": 14,&ndash;&gt;-->
  <!--              &lt;!&ndash;                "weatherIconSize": 24,&ndash;&gt;-->
  <!--              &lt;!&ndash;                "alertIconSize": 18,&ndash;&gt;-->
  <!--              &lt;!&ndash;                "padding": "10px 10px 10px 10px",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "shadow": "1",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "language": "auto",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "borderRadius": 5,&ndash;&gt;-->
  <!--              &lt;!&ndash;                "fixed": "false",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "vertical": "middle",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "horizontal": "left",&ndash;&gt;-->
  <!--              &lt;!&ndash;                "key": "e05c4ce44b7e43c6a9303e68cc42a48c"&ndash;&gt;-->
  <!--              &lt;!&ndash;                }&ndash;&gt;-->
  <!--              &lt;!&ndash;                }&ndash;&gt;-->
  <!--              &lt;!&ndash;              </script>&ndash;&gt;-->
  <!--              &lt;!&ndash;              <script&ndash;&gt;-->
  <!--              &lt;!&ndash;                src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"&ndash;&gt;-->
  <!--              &lt;!&ndash;              />&ndash;&gt;-->
  <!--            </div>-->
  <!--          </div>-->

  <!--          <ul class="nav navbar-menu text-xs order-1 order-md-2">-->
  <!--            &lt;!&ndash; 一言 &ndash;&gt;-->
  <!--            &lt;!&ndash;            <li class="nav-item mr-3 mr-lg-0 d-none d-lg-block">&ndash;&gt;-->
  <!--            &lt;!&ndash;              <script>&ndash;&gt;-->
  <!--            &lt;!&ndash;                fetch('https://v1.hitokoto.cn')&ndash;&gt;-->
  <!--            &lt;!&ndash;                .then(response => response.json())&ndash;&gt;-->
  <!--            &lt;!&ndash;                .then(data => {&ndash;&gt;-->
  <!--            &lt;!&ndash;                const hitokoto = document.getElementById('hitokoto_text')&ndash;&gt;-->
  <!--            &lt;!&ndash;                hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid&ndash;&gt;-->
  <!--            &lt;!&ndash;                hitokoto.innerText = data.hitokoto&ndash;&gt;-->
  <!--            &lt;!&ndash;                })&ndash;&gt;-->
  <!--            &lt;!&ndash;                .catch(console.error)&ndash;&gt;-->
  <!--            &lt;!&ndash;              </script>&ndash;&gt;-->
  <!--            &lt;!&ndash;              <div id="hitokoto"><a id="hitokoto_text" href="#" target="_blank">我爱你，洛千婷</a></div>&ndash;&gt;-->
  <!--            &lt;!&ndash;            </li>&ndash;&gt;-->
  <!--            &lt;!&ndash; 一言 end &ndash;&gt;-->
  <!--            <li class="nav-search ml-3 ml-md-4">-->
  <!--              <a href="javascript:" data-toggle="modal" data-target="#search-modal"><i-->
  <!--                class="iconfont icon-search icon-2x"-->
  <!--              /></a>-->
  <!--            </li>-->
  <!--            <li class="nav-item d-md-none mobile-menu ml-3 ml-md-4">-->
  <!--              <a-->
  <!--                id="sidebar-switch"-->
  <!--                href="javascript:"-->
  <!--                data-toggle="modal"-->
  <!--                data-target="#sidebar"-->
  <!--              ><i class="iconfont icon-classification icon-2x" /></a>-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="placeholder" style="height:74px" />-->
  <!--  </div>-->
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
