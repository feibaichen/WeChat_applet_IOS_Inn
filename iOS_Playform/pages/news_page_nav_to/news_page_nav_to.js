/*comment.js */

var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ward:{
      message:'',
      news_title:'',
      news_image:'',
      news_artcle_image1:'',
      news_artcle_image2: '',
      news_artcle_image3: '',
      news_artcle_image4: '',
      news_artcle_image5: '',
      news_artcle_image6: '',
      news_artcle_image7: '',
      news_artcle_image8: '',
      news_artcle_image9: '',
      news_artcle_image10: '',


      first_p:'',
      sec_p: '',
      three_p: '',
      four_p: '',
      five_p: '',
      six_p: '',
      seven_p: '',
      eight_p: '',
      night_p: '',
      ten_p: '',


    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.nav_str_to);
  let bj= JSON.parse(options.nav_str_to);
   bj.news_image = '../index/' + bj.news_image;
   bj.news_artcle_image1 = '../index/' + bj.news_artcle_image1;
   bj.news_artcle_image2 = '../index/' + bj.news_artcle_image2;
   bj.news_artcle_image3 = '../index/' + bj.news_artcle_image3;
   bj.news_artcle_image4 = '../index/' + bj.news_artcle_image4;
   bj.news_artcle_image5 = '../index/' + bj.news_artcle_image5;
   bj.news_artcle_image6 = '../index/' + bj.news_artcle_image6;
   bj.news_artcle_image7 = '../index/' + bj.news_artcle_image7;
   bj.news_artcle_image8 = '../index/' + bj.news_artcle_image8;
   bj.news_artcle_image9 = '../index/' + bj.news_artcle_image9;
   bj.news_artcle_image10 = '../index/' + bj.news_artcle_image10;
    console.log(bj);
    this.setData({
      'message': bj.message,
      'news_title': bj.news_title,
      'news_image':bj.news_image,
      'news_artcle_image1':bj.news_artcle_image1,
      'news_artcle_image2': bj.news_artcle_image2,
      'news_artcle_image3': bj.news_artcle_image3,
      'news_artcle_image4': bj.news_artcle_image4,
      'news_artcle_image5': bj.news_artcle_image5,
      'news_artcle_image6': bj.news_artcle_image6,
      'news_artcle_image7': bj.news_artcle_image7,
      'news_artcle_image8': bj.news_artcle_image8,
      'news_artcle_image9': bj.news_artcle_image9,
       'news_artcle_image10':bj.news_artcle_image10,



      'first_p': bj.news_first_paragraph,
      'sec_p': bj.news_sec_paragraph,
      'three_p': bj.news_three_paragraph,
      'four_p': bj.news_four_paragraph,
      'five_p': bj.news_five_paragraph,
      'six_p': bj.news_six_paragraph,
      'seven_p': bj.news_seven_paragraph,
      'eight_p': bj.news_eight_paragraph,
      'night_p': bj.news_night_paragraph,
      'ten_p': bj.news_ten_paragraph,
    });
    /**this.data.ward.news_image = 'pages/index/' + this.data.ward.news_image;
     **/
    console.log(this.data.ward);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }
  
  },
  click_to_index:function () {
    wx.reLaunch({
      url: '../index/index',
    })
  }
})