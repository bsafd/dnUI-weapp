const util = require('../../utils/util.js')
let globalData = getApp().globalData;
Page({
  data: {
    list: [{
      name: "步骤条",
      icon: "zuji1",
      type: "new",
      desc: "支持点状，圆角，自定义图标以及树状排列。",
      page: "step",
      like: false
    }, {
        name: "切换开关",
        icon: "creative",
        type: "new",
        desc: "四种风格，支持自定义图标及文字，当然包括颜色。",
        page: "switch",
        like: false
      }, {
        name: "消息提示",
        icon: "duihua",
        type: "normal",
        desc: "包括顶部提示，居中提示，底部提示。可切换提示框背景颜色。",
        page: "msgtips",
        like: false
      }, {
      name: "吸顶容器",
        icon: "subtitle_unblock_light",
        type: "normal",
      desc: "sticky吸顶容器，根据实际场景选择使用。",
      page: "sticky",
      like: false
    }, {
      name: "数字键盘",
        icon: "number9",
        type: "normal",
      desc: "例子包括6位数和4位数输入，长度动态传入，根据实际情况使用。",
      page: "keyboard",
      like: false
    }, {
      name: "时间轴",
        icon: "rili",
        type: "normal",
        desc: "timeline时间轴，样式可自定义，例子实现了物流时间轴，在【uookk=>日志】中也有使用。",
        page: "timeline",
      like: false
    }, {
      name: "滚动消息",
        icon: "dingdan",
        type: "normal",
      desc: "滚动消息：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品。",
      page: "rollingNews",
      like: false
    }, {
      name: "弹层下拉选择",
        icon: "xiangxia",
        type: "normal",
      desc: "包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层。",
      page: "popup",
      like: false
    }, {
      name: "ActionSheet",
        icon: "baoxiandingdan",
        type: "normal",
      desc: "操作菜单:可加入提示信息，可单独设置字体样式。",
      page: "actionsheet",
      like: false
    }, {
      name: "NumberBox",
        icon: "calculator",
        type: "normal",
      desc: "数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)。",
      page: "numberbox",
      like: false
    }, {
      name: "Rate评分",
        icon: "shoucang",
        type: "normal",
        desc: "Rate评分:可设置大小颜色，支持半星，支持手势touch选择。",
      page: "rate",
      like: false
    }, {
      name: "Modal弹框",
        type: "normal",
      desc: "Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。",
      page: "modal",
      like: false
    }, {
      name: "倒计时",
        icon: "shijian",
        type: "normal",
      desc: "倒计时:时分秒倒计时，支持设置大小，颜色等",
      page: "countdown",
      like: false
    }, {
      name: "分隔符",
        icon: "picture_multiple",
        type: "normal",
      desc: "Divider分隔符：可设置占据高度，线条宽度，颜色等",
      page: "divider",
      like: false
    }, {
      name: "卡片轮播",
        icon: "tupian1",
        type: "normal",
      desc: "卡片轮播:包含顶部轮播，秒杀商品轮播等",
      page: "carousel",
      like: false
    }, {
      name: "回到顶部",
        icon: "tiquliuliang",
        type: "normal",
      desc: "回到顶部:可设置bottom，right值，可设置距离顶部多少距离显示。",
      page: "goTop",
      like: false
    }, {
      name: "Button按钮",
        icon: "new-window",
        type: "normal",
      desc: "Button按钮:可自定义宽高，字体大小等。",
      page: "button",
      like: false
    }, {
      name: "alert弹框",
        icon: "yujing",
        type: "normal",
      desc: "alert弹框:可设置提示文本，按钮文本及样式。",
      page: "alert",
      like: false
    }, {
      name: "tips提示",
        icon: "zhongyaotishi",
        type: "normal",
      desc: "tips提示:默认居中显示，可设置。带操作按钮，可隐藏。",
      page: "tips",
      like: false
    }, {
      name: "toast提示",
        icon: "bangzhu",
        type: "normal",
      desc: "toast提示：带icon提示，可隐藏，居中显示。",
      page: "toast",
      like: false
    }, {
      name: "表单验证",
        icon: "anquan",
        type: "normal",
      desc: "Form Validation：常用的表单验证,具体查看详情。",
      page: "formValidation",
      like: false
    }, {
      name: "日期时间选择",
        icon: "countdown",
        type: "normal",
      desc: "picker-view扩展，日期时间选择器，可设置默认显示，可根据需要调整选择的类型。",
      page: "picker-dateTime",
      like: false
    }, {
      name: "复制文本",
        icon: "txtd",
        type: "normal",
      desc: "clipboard，复制到剪贴板，兼容H5，APP和小程序依然使用平台自带api。",
      page: "clipboard",
      like: false
    }, {
      name: "悬浮按钮",
        icon: "dianji",
        type: "normal",
        desc: "fab，拓展出来的按钮不应多于6个，否则违反了作为悬浮按钮的快速、高效的原则。",
      page: "fab",
      like: false
    }, {
      name: "Tabbar",
        
        type: "normal",
        desc: "Tabbar，类似uni-app原生tabbar组件，可用于自定义tabbar。",
      page: "tabbar",
      like: false
    }, {
      name: "tabs标签页",
        type: "normal",
        desc: "tabs标签页，支持设置字体颜色、字体大小、背景色、高度等。",
      page: "tabs",
      like: false
    }, {
      name: "折叠面板",
        icon: "jiahao",
        type: "normal",
        desc: "collapse折叠面板，用来折叠/显示过长的内容或者是列表。内容及样式自定义。",
      page: "collapse",
      like: false
    }, {
      name: "图片上传",
        icon: "photo",
        type: "normal",
        desc: "upload，图片上传，需要根据上传接口实际返回数据进行适当调整 。",
      page: "upload",
      like: false
    }, {
      name: "骨架屏",
        icon: "dingdan",
        type: "normal",
        desc: "数据请求时常见到锁屏的loading动画，而现在越来越多的产品倾向于使用Skeleton Screen替代 。",
      page: "skeleton",
      like: false
    }, {
      name: "网络请求",
        icon: "wifi",
        type: "normal",
        desc: "Network request，发起网络请求，简单的封装与使用 。",
      page: "request",
      like: false
    }, {
      name: "抽奖转盘",
        icon: "quan",
        type: "normal",
        desc: "抽奖转盘，例子使用随机值进行抽奖，可以指定中奖奖项。",
      page: "luckdraw",
      like: false
      }, {
        name: "聊天模板",
        icon: "community",
        type: "normal",
        desc: "聊天模板包含：消息列表，好友列表，聊天界面等。",
        page: "tpl-msgList",
        like: false
      }, {
        name: "新闻模板",
        icon: "newspaper",
        type: "normal",
        desc: "新闻模板包含：新闻列表，新闻详情，评论等。",
        page: "news",
        like: false
      }, {
        name: "商城模板",
        icon: "cart",
        type: "normal",
        desc: "商城模板包含：商城首页，商城列表，商城详情，购物车等。",
        page: "mall",
        like: false
      }]
  },
  onLoad: function(options) {
    if (!wx.getStorageSync("uookk_" + globalData.version)) {
      wx.setStorageSync("uookk_" + globalData.version, "1")
      wx.removeTabBarBadge({
        index: 1
      })
    }
    util.request("index.php", {}, "GET", false, true).then((res) => {
      if (res.code == 500) {
        getApp().globalData.isOnline = true
        this.setData({
          list: this.data.list.concat([])
        })
      }
    }).catch((res) => {})
  },
  detail: function(e) {
    const page = e.currentTarget.id;
    wx.navigateTo({
      url: `../extend-view/${page}/${page}`
    })
  },
  like: function(e) {
    let index = e.currentTarget.id;
    let like = `list[${index}].like`;
    this.setData({
      [like]: !this.data.list[index].like
    })
    //还未接入接口，后期会记录到数据库
    //util.toast("感谢您的支持")
  },
  onShareAppMessage: function(e) {
    let index = e.target.dataset.id;
    let title = this.data.list[index].name;
    return {
      title: title
    }
  }
})