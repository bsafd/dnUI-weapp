//app.js
//import Config from './config.js';
App({
  onLaunch: function (option) {
    // if (Config.HttpHost == '') {
    //   console.error("请配置根目录下的config.js文件中的 'HttpHost'\n\n请修改开发者工具中【详情】->【AppID】改为自己的Appid\n\n请前往后台【小程序】->【小程序配置】填写自己的 appId and AppSecret\n\n上传小程序前请删除小程序根目录下readme目录");
    //   return false;
    // }
    var that = this;
    if (option.query.hasOwnProperty('scene')) {
      switch (option.scene) {
        //扫描小程序码
        case 1047:
          that.globalData.code = option.query.scene;
          break;
        //长按图片识别小程序码
        case 1048:
          that.globalData.code = option.query.scene;
          break;
        //手机相册选取小程序码
        case 1049:
          that.globalData.code = option.query.scene;
          break;
        //直接进入小程序
        case 1001:
          that.globalData.spid = option.query.scene;
          break;
      }
    }
    // 获取小程序更新机制兼容
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function(res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function() {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经上线啦~，为了获得更好的体验，建议立即更新',
              showCancel: false,
              confirmColor: "#5677FC",
              success: function(res) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            })

            wx.setTabBarBadge({
              index: 1,
              text: 'new'
            })
          })
          updateManager.onUpdateFailed(function() {
            // 新的版本下载失败
            wx.showModal({
              title: '更新失败',
              content: '新版本更新失败，为了获得更好的体验，请您删除当前小程序，重新搜索打开',
              confirmColor: "#5677FC",
              showCancel: false
            })
          })
        }
      })
    } else {
      // 当前微信版本过低，无法使用该功能
    }

    setTimeout(() => {
      if (!wx.getStorageSync("dnui_" + this.globalData.version)) {
        wx.setTabBarBadge({
          index: 1,
          text: 'new'
        })
      }
    }, 0)

  },
  /*获取元素大小及位置 */
  getElementRect(select, callBack) {
    wx.createSelectorQuery().select(select).boundingClientRect(function (rect) {
      callBack && callBack(rect);
    }).exec();
  },
  
  onError(err) {
    //全局错误监听
    //console.log("发生错误："+err)
    // const res = wx.getSystemInfoSync()
    // let errMsg = "手机品牌：" + res.brand + "；手机型号：" + res.model + "；微信版本号：" + res.version + "；操作系统版本：" + res.system + "；客户端平台：" + res.platform + "；错误描述：" + err;

  },
  globalData: {
    token: '',
    expiresTime: 0,
    storageKey: 'daNiu',
    authorized: true, // 默认值设置为 true 以防止授权数据在 Page.onLoad 之后才返回
    userInfo: {},
    spid: 0,          //引导人ID
    code: 0,
    themename: 'danger',
    loginType: 'routine',
    isLogin: wx.getStorageSync("dnui_mobile") ? true : false,
    version: "1.1.0",
    mapApiKey: "IBVBZ-TFYWO-KWMWY-SKRJN-LIYQF-HWFHW",
    amapKey:"c7dc9d50d8d4d85b4c2172581c685c0d",
    isOnline:false
  },
  /*
  * 合并数组
  * @param array list 请求返回数据
  * @param array sp 原始数组
  * @return array
  */
  SplitArray: function (list, sp) { return util.SplitArray(list, sp) }
})