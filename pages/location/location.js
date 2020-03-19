const QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
let qqmapsdk;
const app = getApp();
Page({
  data: {
    address:"正在获取地址...",
    longitude: 119.29606638,
    latitude: 26.0751389,
    amapPlugin: null,
    key: app.globalData.mapApiKey
  },
  onLoad: function(options) {
    qqmapsdk = new QQMapWX({
      key: this.data.key
    });
    this.currentLocation()
  },
  regionchange(e) {
    // 地图发生变化的时候，获取中间点，也就是cover-image指定的位置
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      this.setData({
        address: "正在获取地址..."
      })
      this.mapCtx = wx.createMapContext("maps");
      this.mapCtx.getCenterLocation({
        type: 'gcj02',
        success: (res) => {
          //console.log(res)
          this.setData({
            latitude: res.latitude,
            longitude: res.longitude
          })
          this.getAddress(res.longitude, res.latitude);
        }
      })
    }
  },
  getAddress:function(lng,lat){
    //根据经纬度获取地址信息
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lng
      },
      success: (res) => {
        console.log(res)
        this.setData({
          address: res.result.formatted_addresses.recommend //res.result.address
        })
      },
      fail: (res) => {
        this.setData({
          address: "获取位置信息失败"
        })
      }
    })
  },
  currentLocation(){
    //当前位置
    const that = this;
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        //that.getAddress(res.longitude, res.latitude);
      }
    })
  }
})