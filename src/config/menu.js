/**
 * path 菜单的路径
 * filePath  菜单文件的位置 ，用'/'分割成数组，最后一项作为路由的name
 * title 菜单的中文名称
 * icon 菜单的图标
 * show 菜单是否显示
 * alwaysShow 当只有一个子菜单时，父菜单自动隐藏，为true显示父菜单
 * notAllowed 菜单是否无权限
 * children 子菜单
 */
export default [{
  path: '/nav',
  filePath: '/nav',
  title: '精选导航',
  icon: 'el-icon-success',
  alwaysShow: true,
  show: true,
  children: [{
    path: '/index',
    filePath: '/nav/index',
    title: '网址导航',
    icon: 'el-icon-files',
    show: true,
    children: []
  }]
}]
