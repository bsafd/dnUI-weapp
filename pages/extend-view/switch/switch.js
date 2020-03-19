Page({
  data: {
    value: false
  },
  bindChange: function(e) {
    this.setData({
      value: e.detail.value
    })
  },

  bindAsyncChange: function(e) {
    let self = this
    setTimeout(function() {
      self.setData({
        value: e.detail.value
      })
    }, 2000)
  }
});
