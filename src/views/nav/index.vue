<template>
  <div>
    <div
      class="header-big  post-top css-color mb-4"
      style="background-image: linear-gradient(45deg, #b28ae7 0%, #b75c5c 50%, #5520e8 100%);"
    >
      <div class="s-search">
        <div id="search" class="s-search mx-auto">
          <div id="search-list-menu" class="hide-type-list">
            <div class="s-type text-center">
              <div class="s-type-list big">
                <div class="anchor" style="position: absolute; left: 50%; opacity: 0;" />
                <label for="type-baidu" class="" data-id="group-a"><span>常用</span></label><label
                  for="type-baidu1"
                  data-id="group-b"
                ><span>搜索</span></label><label
                  for="type-br"
                  data-id="group-c"
                ><span>工具</span></label><label
                  for="type-zhihu"
                  data-id="group-d"
                ><span>社区</span></label><label
                  for="type-taobao1"
                  data-id="group-e"
                ><span>生活</span></label><label
                  for="type-zhaopin"
                  data-id="group-f"
                ><span>求职</span></label>
              </div>
            </div>
          </div>
          <form action="https://www.baidu.com/s?wd=" method="get" target="_blank" class="super-search-fm">
            <input
              id="search-text"
              type="text"
              class="form-control smart-tips search-key"
              zhannei=""
              placeholder="输入关键字搜索"
              style="outline:0"
              autocomplete="off"
            >
            <button type="submit"><i class="iconfont icon-search" /></button>
          </form>
          <div id="search-list" class="hide-type-list">
            <div class="search-group group-a ">
              <ul class="search-type">
                <li><input
                  id="type-baidu"
                  checked="checked"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.baidu.com/s?wd="
                  data-placeholder="百度一下"
                ><label
                  for="type-baidu"
                ><span class="text-muted">百度</span></label></li>
                <li><input
                  id="type-google"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.google.com/search?q="
                  data-placeholder="谷歌两下"
                ><label
                  for="type-google"
                ><span class="text-muted">谷歌</span></label></li>
                <li><input
                  id="type-zhannei"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.423down.com/?s="
                  data-placeholder="软件搜索"
                ><label
                  for="type-zhannei"
                ><span class="text-muted">软件</span></label></li>
                <li><input
                  id="type-taobao"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://s.taobao.com/search?q="
                  data-placeholder="淘宝"
                ><label
                  for="type-taobao"
                ><span class="text-muted">淘宝</span></label></li>
                <li><input
                  id="type-bing"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.cupfox.com/search?key="
                  data-placeholder="影视资源聚合搜索"
                ><label
                  for="type-bing"
                ><span class="text-muted">影视</span></label></li>
              </ul>
            </div>
            <div class="search-group group-b ">
              <ul class="search-type">
                <li><input
                  id="type-baidu1"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.baidu.com/s?wd="
                  data-placeholder="百度一下"
                ><label
                  for="type-baidu1"
                ><span class="text-muted">百度</span></label></li>
                <li><input
                  id="type-google1"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.google.com/search?q="
                  data-placeholder="谷歌两下"
                ><label
                  for="type-google1"
                ><span class="text-muted">谷歌</span></label></li>
                <li><input
                  id="type-360"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.so.com/s?q="
                  data-placeholder="360好搜"
                ><label
                  for="type-360"
                ><span class="text-muted">360</span></label></li>
                <li><input
                  id="type-sogo"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.sogou.com/web?query="
                  data-placeholder="搜狗搜索"
                ><label
                  for="type-sogo"
                ><span class="text-muted">搜狗</span></label></li>
                <li><input
                  id="type-bing1"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://cn.bing.com/search?q="
                  data-placeholder="必应搜索"
                ><label
                  for="type-bing1"
                ><span class="text-muted">必应</span></label></li>
                <li><input
                  id="type-sm"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://yz.m.sm.cn/s?q="
                  data-placeholder="神马搜索"
                ><label
                  for="type-sm"
                ><span class="text-muted">神马</span></label></li>
              </ul>
            </div>
            <div class="search-group group-c ">
              <ul class="search-type">
                <li><input
                  id="type-br"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://rank.chinaz.com/all/"
                  data-placeholder="请输入网址(不带https://)"
                ><label for="type-br"><span
                  class="text-muted"
                >权重查询</span></label></li>
                <li><input
                  id="type-links"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://link.chinaz.com/"
                  data-placeholder="请输入网址(不带https://)"
                ><label
                  for="type-links"
                ><span class="text-muted">友链检测</span></label></li>
                <li><input
                  id="type-icp"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://icp.aizhan.com/"
                  data-placeholder="请输入网址(不带https://)"
                ><label
                  for="type-icp"
                ><span class="text-muted">备案查询</span></label></li>
                <li><input
                  id="type-ping"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://ping.chinaz.com/"
                  data-placeholder="请输入网址(不带https://)"
                ><label
                  for="type-ping"
                ><span class="text-muted">PING检测</span></label></li>
                <li><input
                  id="type-404"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://tool.chinaz.com/Links/?DAddress="
                  data-placeholder="请输入网址(不带https://)"
                ><label for="type-404"><span
                  class="text-muted"
                >死链检测</span></label></li>
                <li><input
                  id="type-ciku"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.ciku5.com/s?wd="
                  data-placeholder="请输入关键词"
                ><label
                  for="type-ciku"
                ><span class="text-muted">关键词挖掘</span></label></li>
              </ul>
            </div>
            <div class="search-group group-d ">
              <ul class="search-type">
                <li><input
                  id="type-zhihu"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.zhihu.com/search?type=content&q="
                  data-placeholder="知乎"
                ><label for="type-zhihu"><span
                  class="text-muted"
                >知乎</span></label></li>
                <li><input
                  id="type-wechat"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://weixin.sogou.com/weixin?type=2&query="
                  data-placeholder="微信"
                ><label for="type-wechat"><span
                  class="text-muted"
                >微信</span></label></li>
                <li><input
                  id="type-weibo"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://s.weibo.com/weibo/"
                  data-placeholder="微博"
                ><label
                  for="type-weibo"
                ><span class="text-muted">微博</span></label></li>
                <li><input
                  id="type-douban"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.douban.com/search?q="
                  data-placeholder="豆瓣"
                ><label
                  for="type-douban"
                ><span class="text-muted">豆瓣</span></label></li>
                <li><input
                  id="type-why"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://ask.seowhy.com/search/?q="
                  data-placeholder="SEO问答社区"
                ><label
                  for="type-why"
                ><span class="text-muted">搜外问答</span></label></li>
              </ul>
            </div>
            <div class="search-group group-e ">
              <ul class="search-type">
                <li><input
                  id="type-taobao1"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://s.taobao.com/search?q="
                  data-placeholder="淘宝"
                ><label
                  for="type-taobao1"
                ><span class="text-muted">淘宝</span></label></li>
                <li><input
                  id="type-jd"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://search.jd.com/Search?keyword="
                  data-placeholder="京东"
                ><label
                  for="type-jd"
                ><span class="text-muted">京东</span></label></li>
                <li><input
                  id="type-xiachufang"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.xiachufang.com/search/?keyword="
                  data-placeholder="下厨房"
                ><label for="type-xiachufang"><span
                  class="text-muted"
                >下厨房</span></label></li>
                <li><input
                  id="type-xiangha"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.xiangha.com/so/?q=caipu&s="
                  data-placeholder="香哈菜谱"
                ><label for="type-xiangha"><span
                  class="text-muted"
                >香哈菜谱</span></label></li>
                <li><input
                  id="type-12306"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.12306.cn/?"
                  data-placeholder="12306"
                ><label
                  for="type-12306"
                ><span class="text-muted">12306</span></label></li>
                <li><input
                  id="type-kd100"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.kuaidi100.com/?"
                  data-placeholder="快递100"
                ><label
                  for="type-kd100"
                ><span class="text-muted">快递100</span></label></li>
                <li><input
                  id="type-qunar"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.qunar.com/?"
                  data-placeholder="去哪儿"
                ><label
                  for="type-qunar"
                ><span class="text-muted">去哪儿</span></label></li>
              </ul>
            </div>
            <div class="search-group group-f ">
              <ul class="search-type">
                <li><input
                  id="type-zhaopin"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://sou.zhaopin.com/jobs/searchresult.ashx?kw="
                  data-placeholder="智联招聘"
                ><label for="type-zhaopin"><span
                  class="text-muted"
                >智联招聘</span></label></li>
                <li><input
                  id="type-51job"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://search.51job.com/?"
                  data-placeholder="前程无忧"
                ><label
                  for="type-51job"
                ><span class="text-muted">前程无忧</span></label></li>
                <li><input
                  id="type-lagou"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.lagou.com/jobs/list_"
                  data-placeholder="拉钩网"
                ><label
                  for="type-lagou"
                ><span class="text-muted">拉钩网</span></label></li>
                <li><input
                  id="type-liepin"
                  hidden=""
                  type="radio"
                  name="type"
                  value="https://www.liepin.com/zhaopin/?key="
                  data-placeholder="猎聘网"
                ><label
                  for="type-liepin"
                ><span class="text-muted">猎聘网</span></label></li>
              </ul>
            </div>
          </div>
          <div class="card search-smart-tips" style="display: none">
            <ul />
          </div>
        </div>
      </div>
      <div class="bulletin-big mx-3 mx-md-0">
        <div id="bulletin_box" class="card my-2">
          <div class="card-body py-1 px-2 px-md-3 d-flex flex-fill text-xs text-muted">
            <div><i class="iconfont icon-laba font-size:26px" style="line-height:25px" /></div>
            <div class="bulletin mx-1 mx-md-2 carousel-vertical">
              <div class="carousel slide" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active"><a
                    class="overflowClip_1"
                    href="https://mail.qq.com/"
                    target="_blank"
                  >网站导航 -
                    Copy每一个链接</a></div>
                  <div class="carousel-item "><a class="overflowClip_1" href="https://mail.qq.com/" target="_blank">网站导航
                    -
                    不求最全，但求好用</a></div>
                </div>
              </div>
            </div>
            <div class="flex-fill" />
            <a
              title="关闭"
              href="javascript:;"
              rel="external nofollow"
              class="bulletin-close"
              onclick="$('#bulletin_box').slideUp('slow');"
            ><i
              class="iconfont icon-searchclose"
              style="line-height:25px"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <fm-nav v-if="navData.length>0" v-model="anchor" :nav-info="navData">
      <fm-nav-item
        v-for="(item, index) of navData"
        :key="index"
        :label="item.navTypeName"
        :name="item.sort"
        :id="item.id"
        :icon="item.icon"
        :nav-info-list="item"

        class="anchor-item"
      >
        <div class="text">
          <div id="content" class="content-site customize-site">
            <div class="d-flex flex-fill ">
              <h4 class="text-gray text-lg mb-4">
                <i id="term-2" :class="'site-tag' +item.icon" />
                {{ item.navTypeName }}
              </h4>
              <div class="flex-fill" />
              <a class="btn-move text-xs" href="#">more+</a>
            </div>
            <div class="row ">
              <div
                v-for="info in item.navInfoList"
                v-if="item.navInfoList !== null"
                class="url-card col-4   "
              >
                <div class="url-body default">
                  <a
                    :href="info.navUrl"
                    target="_blank"
                    data-id="689"
                    :data-src="info.navUrl"
                    class="card no-c  mb-4 site-689"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    :title="info.navDesc"
                  >
                    <div class="card-body">
                      <div class="url-content d-flex align-items-center">
                        <div
                          class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"
                        >
                          <img
                            class="lazy"
                            :src="info.navLogo"
                          >
                        </div>
                        <div class="url-info flex-fill">
                          <div class="text-sm overflowClip_1">
                            <strong>{{ info.navName }}</strong>
                          </div>
                          <p class="overflowClip_1 m-0 text-muted text-xs">{{ info.navDesc }}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    :href="info.navUrl"
                    :data-src="info.navUrl"
                    class="togo text-center text-muted is-views"
                    data-id="689"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="直达"
                    rel="nofollow"
                  ><i
                    class="iconfont icon-goto"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </fm-nav-item>
    </fm-nav>
    <!--    <footer class="main-footer footer-type-1 text-xs">-->
    <!--      <div id="footer-tools" class="d-flex flex-column">-->
    <!--        <a id="go-to-up" href="javascript:" class="btn rounded-circle go-up m-1" rel="go-top">-->
    <!--          <i class="iconfont icon-to-up" />-->
    <!--        </a>-->

    <!--        <el-button-->
    <!--          id="yejian"-->
    <!--          class="btn rounded-circle switch-dark-mode m-1"-->
    <!--          data-toggle="tooltip"-->
    <!--          data-placement="left"-->
    <!--          title="夜间模式"-->
    <!--          @click.native="updateColor"-->
    <!--        >-->
    <!--          <i class="mode-ico iconfont icon-yejian" />-->
    <!--        </el-button>-->
    <!--      </div>-->
    <!--    </footer>-->
  </div>
</template>

<script>
import { NAV_TYPE_LIST } from '@/api/api/nav.js'
import FmNav from '@/components/common/FmNav'

import '@/assets/theme/wp-content/themes/onenav/js/jquery.min-3.03029.1.js'
import '@/assets/theme/wp-content/themes/onenav/js/jquery-ui.min-3.03029.1.js'
import '@/assets/theme/wp-includes/js/clipboard.min-5.6.2.js'
import '@/assets/theme/wp-content/themes/onenav/js/popper.min-3.03029.1.js'
import '@/assets/theme/wp-content/themes/onenav/js/bootstrap.min-3.03029.1.js'
import '@/assets/theme/wp-content/themes/onenav/js/app-3.03029.1.js'

import '@/assets/theme/wp-content/themes/onenav/css/iconfont-3.03029.1.css'
import '@/assets/theme/wp-content/themes/onenav/css/bootstrap.min-3.03029.1.css'
import '@/assets/theme/wp-content/themes/onenav/css/jquery.fancybox.min-3.03029.1.css'
import '@/assets/theme/wp-content/themes/onenav/css/style-3.03029.1.css'
import $ from 'jquery'

export default {
  name: 'Nav',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FmNav
  },
  data() {
    return {
      navData: [],
      anchor: ''
    }
  },
  mounted() {
    this.findData()
  },
  methods: {
    // 获取分页数据
    findData: function() {
      NAV_TYPE_LIST().then((res) => {
        this.navData = res
      })
    },
    updateColor: function() {
      var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, '$1') || '0'
      if (night === '0') {
        document.body.classList.remove('io-grey-mode')
        document.body.classList.add('io-black-mode')
        // document.getElementById('app-wrapper hideSidebar').classList.add('io-black-mode')
        // document.getElementById('app-wrapper hideSidebar').remove('io-grey-mode')
        document.cookie = 'night=1;path=/'
        console.log(' ')
        $('.switch-dark-mode').attr('data-original-title', '日间模式')
        $('.mode-ico').removeClass('icon-yejian')
        $('.mode-ico').addClass('icon-yejianms')
      } else {
        // document.getElementById('app-wrapper hideSidebar').remove('io-black-mode')
        // document.getElementById('app-wrapper hideSidebar').add('io-grey-mode')
        document.body.classList.remove('io-black-mode')
        document.body.classList.add('io-grey-mode')
        document.cookie = 'night=0;path=/'
        $('.switch-dark-mode').attr('data-original-title', '夜间模式')
        $('.mode-ico').removeClass('icon-yejianms')
        $('.mode-ico').addClass('icon-yejian')
      }
    },
    $(document) {
      ready(function() {
        var siteWelcome = $('#loading')
        siteWelcome.addClass('close')
        setTimeout(function() {
          siteWelcome.remove()
        }, 600)
      })
    },
    $(document) {
      ready(function() {
        setTimeout(function() {
          if ($('a.smooth[href="' + window.location.hash + '"]')[0]) {
            $('a.smooth[href="' + window.location.hash + '"]').click()
          } else if (window.location.hash !== '') {
            $('html, body').animate({
              scrollTop: $(window.location.hash).offset().top - 90
            }, {
              duration: 500,
              easing: 'swing'
            })
          }
        }, 300)
        $(document).on('click', 'a.smooth', function(ev) {
          ev.preventDefault()
          if ($('#sidebar').hasClass('show') && !$(this).hasClass('change-href')) {
            $('#sidebar').modal('toggle')
          }
          if ($(this).attr('href').substr(0, 1) === '#') {
            $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top - 90
            }, {
              duration: 500,
              easing: 'swing'
            })
          }
          if ($(this).hasClass('go-search-btn')) {
            $('#search-text').focus()
          }
          if (!$(this).hasClass('change-href')) {
            var menu = $('a' + $(this).attr('href'))
            menu.click()
            toTarget(menu.parent().parent(), true, true)
          }
        })
        $(document).on('click', 'a.tab-noajax', function(ev) {
          var url = $(this).data('link')
          if (url) {
            $(this).parents('.d-flex.flex-fill.flex-tab').children('.btn-move.tab-move').show().attr('href', url)
          } else {
            $(this).parents('.d-flex.flex-fill.flex-tab').children('.btn-move.tab-move').hide()
          }
        })
      })
    }
  }
}
</script>
<style scoped lang="scss">
.anchor-item {
  margin-bottom: 15px;
  background-color: #fff;

  .text {
    padding: 20px;
    white-space: pre-line;
  }
}
</style>
