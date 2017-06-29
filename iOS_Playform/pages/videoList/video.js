/*video.js*/
//article.js
var app = getApp()
Page({
  data: {
    array: [{
      message: 'foo',
      video_title: 'Make A 2D Game？(Desktop,iOS,Android)',
      video_url: 'http://ioslover.club/movie_news/movie_11.mp4'
    }, {
      message: 'bar',
      video_title: 'Use Alamofire for Networking in your Xcode project',
      video_url: 'http://ioslover.club/movie_news/movie_12.mp4'
    }, {
      message: 'bar',
      video_title:'How To Work With JSON In Xcode 8',
      video_url: 'http://ioslover.club/movie_news/movie_13.mp4'
    }, {
      message: 'bar',
      video_title: 'iOS：how to use AutoLayout',
      video_url: 'http://ioslover.club/movie_news/movie_14.mp4'
    }, {
      message: 'bar',
      video_title: 'CocoaPods：install and setup Cocoa Pods for Xcode',
      video_url: 'http://ioslover.club/movie_news/movie_15.mp4'
    }, {
      message: 'bar',
      video_title: 'SwiftyJSON Tutorial - Cocoapod install',
      video_url: 'http://ioslover.club/movie_news/movie_16.mp4'

    }]
  },
  onShareAppMessage: function () {
    return {
      title: 'iOS技术小栈',
      desc: '最具人气的小程序开发小栈!',
      path: '/page/user?id=123'
    }
  }
  ,
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
