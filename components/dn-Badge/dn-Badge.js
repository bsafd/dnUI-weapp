Component({
  externalClasses: ['uk-class'], //自定义样式
  properties: {
    //primary,warning,green,danger,white，black，gray
    value: {
      type: String,
      value: null,
      observer: function (value) {
        let val = parseInt(value)
        if (!isNaN(val) && value.indexOf("+") < 0 && this.data.max) {
          if (val > this.data.max) {
            val = this.data.max + '+'
          }
          this.setData({
            value: val
          })
        }
      }
    },
    fontsize: {
      type: String,
      value: ""
    },
    /** 是否显示 */
    show: { 
      type: Boolean, 
      value: true 
    },
    /** 数值最大上限 */
    max: { 
      type: Number, 
      value: 0 
    },
    /** 是否闪光 **/
    flash: {
      type: Boolean,
      value: false
    },
    /** 字体颜色 **/
    color: { 
      type: String, 
      value: null 
    },
    /** 徽章背景颜色 **/
    bgcolor: { 
      type: String, 
      value: 'dorange' 
    },
    /** 是否是小红点 **/
    dot: { 
      type: Boolean, 
      value: false 
    },
    /** 顶部距离 **/
    top: { 
      type: String, 
      value: '-20rpx' 
    },
    /** 右部距离 **/
    right: { 
      type: String, 
      value: '10rpx' 
    },
    left: {
      type: String,
      value: null
    },
    /**  是否使用插槽 **/
    userSlot: { 
      type: Boolean, 
      value: false 
    },
    /**  形状 **/
    shape: { 
      type: String, 
      value: "bubble" 
    },
    size: {
      type: String,
      value: '',
    },
    
    // //是否可见
    // visible: {
    //   type: Boolean,
    //   value: true
    // }
  },
  data: {

  },
  methods: {
  }
})