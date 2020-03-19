Component({
  externalClasses: ['uk-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    checked: {
      type: Boolean,
      value: false,
      observer: function(v, o) {
        if (v != o) {
          this.setData({
            loading: false
          })
        }
      }
    },
    type: {
      value: "circle",
      type: String
    },
    color: {
      type: String,
      value: null
    },
    activeColor: {
      type: String,
      value: null
    },
    size: {
      type: String,
      value: 'default'
    },
    async: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: null
    },
    activeicon: {
      type: String,
      value: null
    },
    label: {
      type: String,
      value: null
    },
    activelabel: {
      type: String,
      value: null
    },
    simple: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change: function() {
      let checked = this.data.checked
      if (!this.data.async) {
        
        this.setData({
          checked: !checked
        })
      } else {
        this.setData({
          loading: true
        })
      }
      this.triggerEvent('change', {
        value: !checked
      });
      console.log(checked)
    }
  }
})
