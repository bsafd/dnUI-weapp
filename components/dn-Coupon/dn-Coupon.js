Component({
  externalClasses: ['uk-class'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    /** 左右风格**/
    pos: {
      type: Boolean,
      value: true
    },
    /** 是否加左波浪线 **/
    waveleft: {
      type: Boolean,
      value: false
    },
    /** 是否加右波浪线 **/
    waveright: {
      type: Boolean,
      value: false
    },
    /** 上下是否加半圆 **/
    hole: {
      type: Boolean,
      value: true
    },
    /** 中间是否加虚线 **/
    border: {
      type: Number,
      value: 1
    },
    /** 领取状态 **/
    type: {
      type: String,
      value: ''
    },
    bgcolor: {
      type: String,
      value: 'bg-light'
    },
    bgclass: {
      type: String,
      value: 'bg-success-lt'
    },
    /**  是否使用插槽 **/
    userSlot: {
      type: Boolean,
      value: false
    },
    price: {
      type: String,
      value: ''
    },
    useprice: {
      type: String,
      value: ''
    },
    usetime: {
      type: String,
      value: ''
    },
    hoverClass: {
      type: String,
      value: null
    }
  },
  methods: {
    click(e) {
      let self = this
      this.triggerEvent('click', e);
    }
  }
})
