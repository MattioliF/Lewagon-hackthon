// pages/menu/menu.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    currentUser: null,
    meals: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo
    })
    let Meals = new wx.BaaS.TableObject('meals')
    const self = this 
    Meals.find().then(
      (res) => {
        self.setData({
          meals:res.data.objects
        })
      }
    )

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  createOrder: function(e){
    console.log('create order', e)

    let Orders = new wx.BaaS.TableObject('orders')
    let newOrder = Orders.create()

    newOrder.set({
     meals_id: e.currentTarget.dataset.id,
     count: 1
    })
    newOrder.save().then(
      (res) => {
        wx.showToast({
          title: 'Ordered!',
        })
      }
    )
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  checkout: function(){
    wx.navigateTo({
      url: '/pages/order/confirmation',
    })
  }
})