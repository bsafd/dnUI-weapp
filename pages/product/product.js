Page({
  data: {
    pageIndex: 1,
    dngridNum: 2,
    dngapNum: 1,
    productList: [{
        img: 1,
        name: "一个完整的商品标题",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "商品的标题有可能是一行或者两行",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "商品标题可以强制定义最多三行内容，建议是两行",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "当商品标题内容超出了行数限制时，将会会自动截取",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "在卡片的应用中，能满足绝大部分图文的排版需求",
        sale: 599,
        factory: 899,
        payNum: 2399
      }, {
        img: 1,
        name: "在UK中卡片，列表和宫格是最核心的排版基础",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "UK的主要核心在于样式的自由组合",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "当然小程序的好坏除了排版之外不能忽视本色问题",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "UK的本色足够非富",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "当然通过配置PAGE还可以有更多的扩展",
        sale: 599,
        factory: 899,
        payNum: 2399
      }
    ],
    loadData: [{
        img: 1,
        name: "在针对主题色PRIMARY的设置能够全局设定配色方案",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "UK的前身是dnUI,因此叫什么已经无所谓了",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "UK还包括了PC版本，在丰富度上比小程序版更优",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "UK的PC版叫做优壳构建器，也许现在已经不重视PC端的应用了",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "对那些对网络展示有很强把控力的企业来说",
        sale: 599,
        factory: 899,
        payNum: 2399
      }, {
        img: 1,
        name: "UK优壳网页构建器是一个很好的选择",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "当然UK还是主要针对前端人员使用的，我们有句话叫想像你的想像",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "也就是没有什么不可能的",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "UK不仅仅只是让你视觉构建更轻松",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "也许你还能从中发现一点什么，也许从来都不缺美",
        sale: 599,
        factory: 899,
        payNum: 2399
      }
    ],
    loadding: false,
    pullUpOn: true
  },
  onLoad: function(options) {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    //延时为了看效果
    setTimeout(() => {
      this.setData({
        productList: this.data.loadData,
        pageIndex: 1,
        pullUpOn: true,
        loadding: false
      })
      wx.stopPullDownRefresh()
      wx.showToast({
        title: '刷新成功',
        icon: "none"
      })
    }, 200)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    }, () => {
      if (this.data.pageIndex == 3) {
        this.setData({
          loadding: false,
          pullUpOn: false
        })
      } else {
        this.setData({
          productList: this.data.productList.concat(this.data.loadData),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  },
  switchGridNum: function (e) {
    this.setData({
      dngridNum: e.currentTarget.dataset.index
    })
  },
  switchGapNum: function (e) {
    this.setData({
      dngapNum: e.currentTarget.dataset.index
    })
  },
  detail(e) {
    wx.navigateTo({
      url: '../extend-view/productDetail/productDetail'
    })
  }
})