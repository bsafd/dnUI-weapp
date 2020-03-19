//注意：自定义组件无法触发form的bindsubmit,bindreset事件
//可以在组件外层嵌套个button按钮，背景设为none，form-type写在外层按钮上(参考登录页面)
Component({
  externalClasses: ['uk-class'],//自定义样式
  properties: {
    // primary, white, danger, warning, green, gray,gd
    type: {
      type: String,
      value: 'gd',
    },
    /** 自定义按钮背景色**/
    bgColor: { 
      value: null, 
      type: String 
    },
    /** 自定义文字颜色**/
    fontColor: { 
      value: null, 
      type: String 
    },
    //是否加阴影 type =primary和 danger有效
    shadow: {
      type: Boolean,
      value: false
    },
    // 按钮宽度 rpx或 %
    width: {
      type: String,
      value: '100%'
    },
    //高度 rpx
    height: {
      type: String,
      value: '94rpx'
    },
    padding: {
      type: Boolean,
      value: false
    },
    //字体大小 rpx
    fontsize: {
      type: Number,
      value: 32
    },
    //形状 circle(圆角), square(默认方形)，radius(平角)
    shape: {
      type: String,
      value: 'square'
    },
    // block, mini, small
    size: {
      type: String,
      value: 'block',
    },
    /** 朴素按钮  默认 false*/
    plain:{
      type: Boolean,
      value: false
    },
    /** 禁用  默认 false*/
    disabled: {
      type: Boolean,
      value: false,
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    /** 加载中  默认 false*/
    loading: {
      type: Boolean,
      value: false,
    },
    /** 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 **/
    formType: {
      type: String,
      value: ''
    },
    /** 按钮开放能力 **/
    openType: {
      type: String,
      value: ''
    },
    /** 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效**/
    appParameter: {
      type: String,
      value: ''
    },
    /** 会话来源，open-type="contact"时有效 **/
    sessionFrom:{
      type: String,
      value: ''
    },
    /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效**/
    showMessageCard: {
      type: Boolean,
      value: false
    },
    /** 会话内消息卡片图片，open-type="contact"时有效**/
    sendMessageImg: {
      type: String,
      value: ''
    },
    /** 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效**/
    sendMessagePath: {
      type: String,
      value: ''
    },
    /** 会话内消息卡片标题，open-type="contact"时有效**/
    sendMessageTitle:{
      type: String,
      value: ''
    },
    /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。*/
    lang: {
      type: String,
      value: 'en'
    },
    hidden:{
      type:Boolean,
      value:false
    }
  },
  data: {
  
  },
  methods: {
    handleClick() {
      if (this.data.disabled) return false;
      this.triggerEvent('click', {});
    },
    bindgetuserinfo({ detail = {} } = {}) {
      this.triggerEvent('getuserinfo', detail);
    },
    bindcontact({ detail = {} } = {}) {
      this.triggerEvent('contact', detail);
    },
    bindgetphonenumber({ detail = {} } = {}) {
      this.triggerEvent('getphonenumber', detail);
    },
    binderror({ detail = {} } = {}) {
      this.triggerEvent('error', detail);
    }
  }
})
