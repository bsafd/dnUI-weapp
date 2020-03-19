Component({
  externalClasses: ['uk-class'], //自定义样式
  properties: {
    //是否有箭头
    arrow: {
      type: Boolean,
      value: false 
    },
    //是否下划线效果
    border: {
      type: Boolean,
      value: true 
    },
    //是否有点击效果
    hover: {
      type: Boolean,
      value: true 
    },
    //最后一条数据隐藏线条
    last: {
      type: Boolean,
      value: false 
    },
    padding: {
      type: String,
      value: "20rpx 30rpx"
    },
    //背景颜色
    bgclass:{
      type: String,
      value: "bg-white" 
    },
    //对齐方式
    align: {
      type: Boolean,
      value: true 
    },
    hoverClass: {
      type: String,
      value: 'ukhover'
    },
    lineLeft: {
      type: Boolean,
      value: false
    },
    lineRight: {
      type: Boolean,
      value: false
    },
    //下边线缩进量
    indent: {
      type: String,
      value: "" 
    },
    //字体大小
    size:{
      type: Number,
      value: 32
    },
    //字体颜色
    color: {
      type: String,
      value: "#333" 
    },
  },
  data: {

  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {});
    }
  }
})