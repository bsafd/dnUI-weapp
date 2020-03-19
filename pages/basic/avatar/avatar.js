Page({
  data: {
    files: [], //最多上传9张图片
    uploadImgPath1: "/static/demo/demo.jpg",
    uploadImgPath2: "/static/demo/demo2.jpg"
  },
  chooseImage: function (e) {
    let that = this;
    if (that.data.files.length >= 9) {
      util.toast("最多上传9张图片");
      return
    }
    wx.chooseImage({
      count: 9 - that.data.files.length,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        //上传功能已去除
        //...
        wx.showToast({
          title: "上传功能已去除",
          icon: 'none',
          duration: 1000
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  deleteImage: function (e) {
    const index = e.currentTarget.dataset.index;
    let arr = this.data.files;
    arr.splice(index, 1)
    this.setData({
      files: arr
    });
  },
  select: function (e) {
    wx.showToast({
      title: "点击了-" + e.currentTarget.dataset.index + "",
      icon: 'none',
      duration: 2000
    });
  },

  uploadImg1: function (e) {
    this.setData({
      uploadImgPath1: e.detail.path
    })
  },

  uploadImg2: function (e) {
    this.setData({
      uploadImgPath2: e.detail.path
    })
  }
});
