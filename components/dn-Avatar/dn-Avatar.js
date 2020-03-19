Component({
  externalClasses: ['uk-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    /** 图片路径**/
    src: {
      type: String,
      value: null
    },
    /** 是否加边框 **/
    border: {
      type: Boolean,
      value: false
    },
    /** 是否方形 **/
    square: {
      type: Boolean,
      value: false
    },
    round: {
      type: Boolean,
      value: false
    },
    hoverClass: {
      type: String,
      value: null
    },
    color: {
      type: String,
      value: null
    },
    bgcolor: {
      type: String,
      value: null
    },
    bgclass: {
      type: String,
      value: null
    },
    size: {
      type: String,
      value: ""
    },
    fontsize: {
      type: String,
      value: ""
    },
    weight: {
      type: String,
      value: ""
    },
    content: {
      type: String,
      value: null
    },
    icon: {
      type: String,
      value: null
    },
    width: {
      type: String,
      value: null
    },
    height: {
      type: String,
      value: null
    },
    more: {
      type: Boolean,
      value: false
    },
    upload: {
      type: Boolean,
      value: false
    },
    uploadicon: {
      type: String,
      value: 'dni dni-xiangji'
    },
    sizeType: {
      type: Array,
      value: ['original', 'compressed']
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera']
    }
  },
  methods: {
    click(e) {
      let self = this
      if (this.data.upload){
        wx.chooseImage({
          count: 1,
          sourceType: self.data.sourceType, // 可以指定来源是相册还是相机，默认二者都有
          sizeType: self.data.sizeType,     // 可以指定是原图还是压缩图，默认二者都有
          success: function(res) {
            self.triggerEvent('change', res.tempFiles[0]);
          }
        });
      } else {
        this.triggerEvent('click', e);
      }
    }
  }
})
