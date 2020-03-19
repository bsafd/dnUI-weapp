const util = require('../../../utils/util.js')
Page({
  data: {
    current: 0,
    tabbar: [{
      icon: "message",
      text: "消息",
      size: 24
    }, {
        icon: "wode",
      text: "联系人",
      size: 24
    }, {
        icon: "creative",
      text: "发现",
      size: 24
    }],
    msgList: [{
      nickname: "波动星球",
      pic: "1",
      msg: "兰家双臂初长成！",
      msgNum: 2,
      time: "10:22",
      level: 1
    }, {
      nickname: "UOOKK看点",
      pic: "4",
      msg: "UOOKK商城模板即将上线，功能完善中！",
      msgNum: 2,
      time: "13:27",
      level: 3
    }, {
      nickname: "技术交流群",
      pic: "4",
      msg: "[图片]",
      msgNum: 18,
      time: "12:27",
      level: 1
    }, {
      nickname: "技术交流2群",
      pic: "2",
      msg: "[视频]",
      msgNum: 98,
      time: "10:27",
      level: 2
    }, {
      nickname: "陈永华",
      pic: "3",
      msg: "对方已同意你的好友请求",
      msgNum: 2,
      time: "10:27",
      level: 1
    }, {
      nickname: "尚高旭",
      pic: "4",
      msg: "晚上一起吃个饭！",
      msgNum: 0,
      time: "10:27",
      level: 1
    }, {
      nickname: "张新旺",
      pic: "5",
      msg: "[图片]",
      msgNum: 0,
      time: "10:27",
      level: 1
    }, {
      nickname: "曾少敏",
      pic: "3",
      msg: "对方已同意你的好友请求对方已同意你的好友请求",
      msgNum: 0,
      time: "10:27",
      level: 1
    }, {
      nickname: "波动星球",
      pic: "6",
      msg: "兰家双臂初长成！",
      msgNum: 2,
      time: "10:22",
      level: 1
    }, {
      nickname: "UOOKK看点",
      pic: "4",
      msg: "UOOKK商城模板即将上线，功能完善中！",
      msgNum: 2,
      time: "13:27",
      level: 3
    }, {
      nickname: "技术交流群",
      pic: "4",
      msg: "[图片]",
      msgNum: 18,
      time: "12:27",
      level: 1
    }, {
      nickname: "技术交流2群",
      pic: "2",
      msg: "[视频]",
      msgNum: 98,
      time: "10:27",
      level: 2
    }, {
      nickname: "陈永华",
      pic: "7",
      msg: "对方已同意你的好友请求",
      msgNum: 2,
      time: "10:27",
      level: 1
    }]
  },
  onLoad: function (options) {

  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  tabbarSwitch: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    })
    if (index != 0) {
      if (index == 1) {
         wx.navigateTo({
           url: '../friendsList/friendsList'
         })
      } else {
        util.toast("功能开发中~")
      }
    }
  },
  search: function () {
    wx.navigateTo({
      url: '../news-search/news-search'
    })
  },
  detail: function () {
    wx.navigateTo({
      url: '../chat/chat'
    })
  }
})