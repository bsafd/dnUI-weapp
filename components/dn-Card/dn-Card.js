Component({
  externalClasses: ['uk-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    //是否铺满
    full: {
      type: Boolean,
      value: false
    },
    avatar: {
      type: String,
      value:''
    },
    avatarclass: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    titleclass: {
      type: String,
      value: ''
    },
    sidetitle: {
      type: String,
      value: ''
    },
    subtitle: {
      type: String,
      value: ''
    },
    headerclass: {
      type: String,
      value: false
    },
    round: {
      type: Boolean,
      value: false
    },
    slotbody: {
      type: Boolean,
      value: false
    },
    slotfooter: {
      type: Boolean,
      value: false
    },
    slotcontent: {
      type: Boolean,
      value: false
    },
    background: {
      type: String,
      value: ''
    },
    image: {
      type: String,
      value: ''
    },
    imagetype: {
      type: String,
      value: ''
    },
    imageheight: {
      type: String,
      value: ''
    },
    header: {
      type: Object,
      value: {
        bgcolor: "#fff", //背景颜色
        line: false //是否去掉底部线条
      }
    },
    hoverClass: {
      type: String,
      value: 'ukhover' //是否有点击效果
    },
    hoverstime: {
      type: Number,
      value: 0 
    },
    hoveretime: {
      type: Number,
      value: 0 //是否有点击效果
    },
    //是否设置外边框
    border: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    handleClick() {
      this.triggerEvent('click', {});
    },
    longTap() {
      this.triggerEvent('longclick', {});
    }
  }
})