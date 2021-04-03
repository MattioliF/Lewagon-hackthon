// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    currentUser: null,
    restaurant: null,
  },

  onLoad: function (options) {
    console.log(app.globalData)
    this.setData({
      currentUser: app.globalData.userInfo
    })
    const self = this
    let Restaurant = new wx.BaaS.TableObject("restaurant_marie")
    Restaurant.get("60681b6de6368733b390d1ed").then(
      (res) => {
        self.setData({
          restaurant:res.data,
        })
      }
    )
  },

  userInfoHandler: function(data) {
    const self = this
    wx.BaaS.auth.loginWithWechat(data).then(
      (res) => {
        console.log('results',res)
        self.setData ({
          currentUser:res
        }),
        wx.setStorageSync('userInfo', res)
        getApp().globalData.userInfo = res
      },
      (err) => {
      },
    )
  },

  startOrder: function() {
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  }
})
