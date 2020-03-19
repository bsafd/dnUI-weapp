Page({
  data: {
    current: 0,
    tabBar: [{
        "pagePath": "/pages/index/index",
        "text": "code",
        "iconPath": "/static/images/tabbar/info/home.png",
        "selectedIconPath": "/static/images/tabbar/info/homefill.png",
        "num": 1,
        "isDot": false
      },
      {
        "pagePath": "/pages/extend/extend",
        "text": "extend",
        "iconPath": "/static/images/tabbar/info/chahuafei.png",
        "selectedIconPath": "/static/images/tabbar/info/chahuafeifill.png",
        "num": 2,
        "isDot": true
      },
      {
        "pagePath": "/pages/my/my",
        "text": "uookk",
        "iconPath": "/static/images/tabbar/info/wode2.png",
        "selectedIconPath": "/static/images/tabbar/info/wode3fill.png",
        "verify": true
      }
    ],
    tabBar2: [{
        "pagePath": "/pages/index/index",
        "text": "code",
      "iconPath": "/static/images/tabbar/info/home.png",
      "selectedIconPath": "/static/images/tabbar/info/homefill.png"
      },
      {
        "pagePath": "",
        "text": "extend",
        "iconPath": "/static/images/tabbar/info/chahuafei.png",
        "hump": true,
        "selectedIconPath": "/static/images/tabbar/info/chahuafeifill.png"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "uookk",
        "iconPath": "/static/images/tabbar/info/wode2.png",
        "selectedIconPath": "/static/images/tabbar/info/wode3fill.png",
        "num": 2,
        "isDot": true,
        "verify": true
      }
    ],
    tabBar3: [{
      "pagePath": "/pages/index/index",
      "text": "开始",
      "icon": "dni dni-home",
      "selectedIcon": "dni dni-homefill"
    },
    {
      "pagePath": "/pages/index/index",
      "text": "信息",
      "icon": "dni dni-message",
      "selectedIcon": "dni dni-messagefill"
    },
    {
      "pagePath": "",
      "text": "新任务",
      "icon": "dni dni-jiahao",
      "size": 100,
      "hump": true,
      "selectedIcon": "dni dni-jiahaofill"
    },
    {
      "pagePath": "/pages/my/my",
      "text": "进度",
      "icon": "dni dni-rili",
      "selectedIcon": "dni dni-rilifill",
      "isDot": true,
      },
      {
        "pagePath": "/pages/my/my",
        "text": "我的",
        "icon": "dni dni-yonghu",
        "selectedIcon": "dni dni-yonghufill",
        "num": 2,
        
      }
    ]
  },
  onLoad: function(options) {

  },
  tabbarSwitch(e) {
    let isLogin = false
    if (e.detail.verify && !isLogin) {
      wx.showToast({
        title: '您还未登录，请先登录',
        icon: "none"
      })
    } else {
      this.setData({
        current: e.detail.index
      })
    }
  }
})