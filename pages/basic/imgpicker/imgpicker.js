Page({
  data: {
    imageData: [],
    //上传地址
    serverUrl: "http://upload.cn",
    files: ["/static/demo/1.jpg", "/static/demo/2.jpg", "/static/demo/3.jpg"], //最多上传9张图片
    imgList: [
      {
        url: "../../static/demo/1.jpg"
      },
      {
        url: "../../static/demo/2.jpg"
      },
      {
        url: "../../static/demo/3.jpg"
      }
    ]
  },
  result: function (e) {
    console.log("result", e)
    this.setData({
      imageData: e.detail.imgArr
    })
  },
  remove: function (e) {
    //移除图片
    wx.showToast({
      title: "监听事件:移除了图片",
      icon: 'none',
      duration: 2000
    });
    console.log("移除了图片", e)
    let index = e.detail.index
  },

  preview: function (e) {
    wx.showToast({
      title: "监听事件:预览了图片",
      icon: 'none',
      duration: 2000
    });
    console.log("预览了图片", e)
  },

  deleteImage: function (e) {
    const index = e.currentTarget.dataset.index;
    let arr = this.data.files;
    arr.splice(index, 1)
    this.setData({
      files: arr
    });
  },
 
  change: function (e) {
    wx.showToast({
      title: "监听事件:添加了图片",
      icon: 'none',
      duration: 2000
    });
    console.log("添加了图片", e)
  }
});
