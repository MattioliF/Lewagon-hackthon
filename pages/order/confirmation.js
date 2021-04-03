// pages/order/confirmation.js
Page({

  /**
   * Page initial data
   */
  data: {
    order_item: [],
    orders:[],
    price: null,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // this.setData({
    //   currentUser: applicationCache.globalData.userInfo
    // })

    const self= this;

  
    let Orders= new wx.BaaS.TableObject('orders')
    Orders.expand(['meals_id']).find().then(
      (res) => {
        console.log('Orders res working', res);
        self.setData({
          orders: res.data.objects,
        });
        console.log("these are all the orders");
      },
      (err)=> {
        console.log('Order err not working', err)
      }
    )

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

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

})