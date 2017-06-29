//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array: [{
      message: '2017-07-20   author: ios小卒',
      news_image:'images/ios11.jpg',
      news_artcle_image1: 'images/first_artcle/1.jpg',
      news_artcle_image2: 'images/first_artcle/2.jpg',
      news_artcle_image3: 'images/first_artcle/3.jpg',
      news_artcle_image4: 'images/first_artcle/4.jpg',
      news_artcle_image5:'images/first_artcle/5.jpg',
      news_artcle_image6:'images/first_artcle/6.jpg',
      news_artcle_image7:'images/first_artcle/7.jpg',
      news_artcle_image8: 'images/first_artcle/8.jpg',
      news_artcle_image9: 'images/first_artcle/9.jpg',
      news_artcle_image10: 'images/first_artcle/10.jpg',

      news_title: 'iOS11和iOS10有什么区别 ？对比图让你一目了然',
      news_small_title: '在WWDC大会上，苹果于向我们展示了ios11系统，其中包括新增数据网络快捷开关、自带录屏、新增文件管理等',
      news_first_paragraph:'在这次wwdc大会上，苹果终于向我们展示了ios11系统，这次系统更新跨度还是很大的，其中包括新增数据网络快捷开关、自带录屏功能、新增文件管理功能等，跟着一起来看下ios11和ios10的区别以及它们的对比分析。',
      news_sec_paragraph: '首先看下ios更新的亮点：\n1、数据网络快捷开关，再也不用进入设置里面折腾了；\n2、自带录屏功能，游戏党的福音；\n3、系统相册查看 gif 图片，表情党斗图都起来；\n4、Apple ID 即手机号，安全小白用户的福音；\n5、文件管理系统，同时支持各类云盘软件；\n6、系统相机可以直接扫描识别二维码，不需要打开微xin；\n7、系统相机自带各种滤镜，再也不用美颜相机（虽然我知道你们还是会用）；\n8、系统相机自带长曝光，拍瀑布拍夜景车流更带感；\n9、垃圾短信识别屏蔽，澳门赌场再见；\n10、Siri 支持翻译，并支持上海话。',
      news_three_paragraph: '至于新的iOS 11系统究竟能否让大家满意，还得需要时间来检验。而目前我们唯一能做的就是通过截图对比这种最直观的方式来为大家呈现出iOS 11与iOS 10相比有哪些变化，至于好不好，大家各自感受吧（以下截图左侧为iOS 11系统，而右侧为iOS 10）。',
      news_four_paragraph: '我们看到，在主屏幕上最明显的变化就是信号格的图标从原来的圆点又恢复成了渐变的梯形，同时底部Dock里的图标取消了文件名的布局。另外iOS 11的电池状态图标也缩小了一点，字体也变得更清晰，更容易阅读。',
      news_five_paragraph: 'iOS 11的通知中心背景这次变成了全透明，并且保留了锁屏界面的时间和日期信息，取消了快速搜索框的设计。而iOS 10的通知中心则是我们熟悉的模糊半透明设计。',
      news_six_paragraph: '控制中心可能是iOS 11最大的变化之一。新的控制中心完全是可定制化的设计，想要显示什么完全根据自己的需要切换。比如3D Touch可以用来切换和音乐控制，并且亮度和音量控制条也变得耳目一新。所有的设置和微调都可以由着自己的兴趣来，不像iOS 10那么死板。',
      news_seven_paragraph: '在控制中心的设置界面中，可定制化的元素变得更多。相比之下，iOS 10只有少得可怜的两项内容。',
      news_eight_paragraph:'原来的App Store已经消失，这一次新设计的App Store变化更加大胆，更注重设计感，并且看起来更艺术。而App们也被自动分成了许多类别，包括游戏和应用。同时更新选项和搜索选项依然被保留。',
      news_night_paragraph:'新的App Store在应用详情展示页面变成了全屏的风格，贯穿屏幕的图片以及文字介绍罗列，与原来表格化的布局相比，也有了明显的区别。',
      news_ten_paragraph:'日历的月份、日期字母和数字同样变大变粗，从红色变成了黑色，当月依然是红色，显示强调的作用。' ,

    }, {
      message: '2017-07-12   author: ios小卒',
      news_image: 'images/imessage.jpg',
      news_artcle_image1: 'images/sec_artcle/1.jpg',
      news_artcle_image2: 'images/sec_artcle/2.jpg',
      news_artcle_image3: 'images/sec_artcle/end.jpg',
      news_artcle_image4: 'images/sec_artcle/4.png',
      news_artcle_image5: 'images/sec_artcle/4.png',
      news_artcle_image6: 'images/sec_artcle/4.png',
      news_artcle_image7: 'images/sec_artcle/4.png',
      news_artcle_image8: 'images/sec_artcle/4.png',
      news_artcle_image9: 'images/sec_artcle/4.png',
      news_artcle_image10: 'images/sec_artcle/4.png',

      news_title: '苹果在iOS 11开发预览版中推出业务聊天功能',
      news_small_title: '在WWDC开发者预览版中公布了有关iMessage业务聊天。在iOS 11中可以让真正的客户服务代表直接与用户沟通',

      news_first_paragraph: '\n苹果周五在WWDC开发者预览版中公布了有关iMessage新业务聊天功能更多细节。在iOS 11中，业务聊天功能，可以让真正的客户服务代表直接与用户沟通。用户通过点击Spotlight搜索，Siri和Maps中企业名称旁边的消息图标，或者使用手机相机扫描相关的QR码，发送第一条消息以开始业务聊天对话。',
      news_sec_paragraph: '\n这些操作将它们切换到消息应用程序，这项功能可以提供销售产品，提供约会调度选项，并向相关聊天线程中的客户以及其他服务发送通知。除了将用户连接到业务之外，消息图标或QR码可以携带将用户与特定地理位置或相关产品或服务链接的特定信息，甚至可以向客户服务代表提供用户的第一语言以及任何现有客户帐户的详细信息，包括过去的订单和安全问题.',
      news_three_paragraph: '\n为了进一步的交谈，Siri在屏幕键盘上方的预测文本栏可以提供个人信息，如电话号码或地址给用户，方便他们与业务代表共享信息。在其他方面，这项功能附带了全新时间选择器功能，使客户可以轻松地选择约会时间，而列表选择器可让用户选择销售物品，如衣服或杂货，随身携带的Apple Pay作为便捷的付款方式。\n\n商业聊天将与Facebook Messenger，WhatsApp，Twitter和Skype等类似的服务相提并论，苹果将其作为iOS 11中本机功能的明显优势，最终将在秋季提供给新设备用户和数百万的现有用户。',
      news_four_paragraph: '',
      news_five_paragraph: '',
      news_six_paragraph: '',
      news_seven_paragraph: '',
      news_eight_paragraph: '',
      news_night_paragraph: '',
      news_ten_paragraph: '',

      }, {
        message: '2017-06-20   author: ios小卒',
        news_image: 'images/head2.jpg',
        news_artcle_image1: 'images/three_artcle/1.jpg',
        news_artcle_image2: 'images/three_artcle/2.jpg',
        news_artcle_image3: 'images/three_artcle/end.jpg',
        news_artcle_image4: 'images/three_artcle/4.png',
        news_artcle_image5: 'images/three_artcle/4.png',
        news_artcle_image6: 'images/three_artcle/4.png',
        news_artcle_image7: 'images/three_artcle/4.png',
        news_artcle_image8: 'images/three_artcle/4.png',
        news_artcle_image9: 'images/three_artcle/4.png',
        news_artcle_image10: 'images/three_artcle/4.png',

        news_title: '打赏必须抽三成 苹果正式更新App Store条款',
        news_small_title: '苹果更新了App Store的政策条款，其中使用虚拟货币完成的打赏将被视为应用内购，收取30%的费用',

        news_first_paragraph: '苹果公司本周更新了 App Store 的政策条款，其中指出，使用虚拟货币完成的打赏将被视为应用内购，苹果会收取 30% 的费用。与此同时，评分弹出窗口现在必须使用苹果官方的 API。\n\n苹果这一 App Store 政策改动将打赏功能从灰色地带中移出来，更多的应用开发商可能会选择利用打赏的虚拟货币来代替广告收入。长期以来，中国市场的直播 App 都在使用打赏功能主播通过观众打赏的虚拟礼物获取收入，而国外的直播应用则没有类似的功能，Facebook 允许主播在直播的时候播放广告，并保留 55% 的收入。\n',
        news_sec_paragraph: '\n上个月，苹果公司开始严厉打击非正式的打赏功能，部分公司称打赏不是购买，从而规避了 30% 的应用内购分成。据《华尔街日报》报道，苹果公司已经告知微信和其他中国社交应用禁用打赏功能，否则将会被“踢出”App Store。\n\n此前，苹果对于打赏是如何分类的并没有给出明确规定，而现在，苹果已经发布了正式声明。作为 App Store 政策更新的一部分，苹果在 iOS 11 开发者版本中写道：“应用程序可以使用内购货币，让用户在应用程序中打赏数字内容提供商。”\n\n这意味着开发商可以在应用中加入打赏功能，而不需要担心苹果的反对，当然，前提是他们愿意支付 30% 的打赏分成。另外，开发商还需要决定是否将剩余的 70% 打赏全部交给数字内容提供商，或者自己抽取部分分成。',
        news_three_paragraph: '另一方面，苹果已经明确表示不再支持自定义的评分提示，应用开发商需要使用 iOS 10.3 引入的标准 API。据了解，这个标准化的评分弹出窗口每年只能出现 3 次，也就是说，如果你已经递交了评分，这个窗口一年之内都不会再出现。\n\n在 iOS 11 系统中，用户可以通过 iOS 设置应用中的“iTunes Store 与 App Store”选项中完全关闭评分提示窗口。开发商通常会依靠评分和评论来提高他们的产品在 App Store 中的形象。但是到目前为止，一些应用变得非常烦人，因为这种评分弹出窗口每个月都会出现很多次，这给用户带来了困扰。',
        news_four_paragraph: '---（文章）结束',
        news_five_paragraph: '',
        news_seven_paragraph: '',
        news_eight_paragraph: '',
        news_night_paragraph: '',
        news_ten_paragraph: '',
    }, {
      message: '2017-05-20   author: ios小卒',
      news_image: 'images/hightsirra.jpg',
      news_artcle_image1: 'images/four_artcle/1.jpg',
      news_artcle_image2: 'images/four_artcle/2.jpg',
      news_artcle_image3: 'images/four_artcle/3.jpg',
      news_artcle_image4: 'images/four_artcle/4.jpg',
      news_artcle_image5: 'images/four_artcle/5.jpg',
      news_artcle_image6: 'images/four_artcle/6.jpg',
      news_artcle_image7: 'images/four_artcle/end.jpg',
      news_artcle_image8: 'images/four_artcle/8.png',
      news_artcle_image9: 'images/four_artcle/8.png',
      news_artcle_image10: 'images/four_artcle/8.png',

      news_title: '苹果WWDC发布全新MacOS——High Sirra',
      news_small_title: '6月6日凌晨1点，苹果举办召开一年一度的开发者大会发布了全新的Mac OS High Sierra',
      news_first_paragraph: '北京时间6月6日凌晨1点，苹果在加州圣何塞举办召开一年一度的开发者大会，并发布了全新的Mac OS，命名为High Sierra，你没有听错，这帮苹果员工在Sierra山旁边又发现了一座更高的山，所以新名字也由此命名。',
      news_sec_paragraph: '在新的Mac OS版本中改进了Safari、Mail、Photo以及更新了更多的功能，在全新的系统中还采用了全新的文件系统APFS。',
      news_three_paragraph: 'Safari是MacOS中的浏览器，使用了KDE的KHTML作为运算核心，更新后Safari的运行速度更快，同时加强了浏览器的安全。支持拦截视频广告、自动保护隐私等功能，在与Chrome浏览器的较量中，以80%的优势保持领先。',
      news_four_paragraph: 'Email 功能支持分屏显示 更加节约存储空间',
      news_five_paragraph: 'Photo更加智能的分类 人脸识别、时间识别、关键词识别分类',
      news_six_paragraph: 'APFS 文件处理提升，复制大文件速度更快',
      news_seven_paragraph: 'H.265 相较于H.264 减少40%的视频压缩 优化4K视频的播放 支持硬件加速.今天用户将可以使用开发者beta版，今年秋天可免费升级正式版。',
      news_eight_paragraph: '',
      news_night_paragraph: '',
      news_ten_paragraph: '',
      }, {
        message: '2017-08-20   author: ios小卒',
        news_image: 'images/i8.jpg',
        news_artcle_image1: 'images/five_artcle/1.jpg',
        news_artcle_image2: 'images/five_artcle/2.jpg',
        news_artcle_image3: 'images/five_artcle/3.jpg',
        news_artcle_image4: 'images/five_artcle/end.jpg',
        news_artcle_image5: 'images/five_artcle/5.png',
        news_artcle_image6: 'images/five_artcle/5.png',
        news_artcle_image7: 'images/five_artcle/5.png',
        news_artcle_image8: 'images/five_artcle/5.png',
        news_artcle_image9: 'images/five_artcle/5.png',
        news_artcle_image10: 'images/five_artcle/5.png',

        news_title: 'iPhone 8最新渲染图曝光 全面屏太耀眼 是真的吗？',
        news_small_title: 'iPhone 8的外形或许包括圆角全面屏、超高屏占比、屏下指纹以及屏幕内的听筒、前置摄像头等等。',

        news_first_paragraph: 'iOS 11加持 iPhone 8最新渲染图曝光：买！此前，AppleiDesigner团队曾根据传闻制作了不少iPhone 8的渲染图，看起来非常靠谱。\n\n在iOS 11发布之后，比较严谨的他们立即更新了渲染图，让界面风格变得跟iOS 11保持一致。\n\n从渲染图来看，iPhone 8的外形和此前的渲染图没什么区别，包括圆角全面屏、超高屏占比、屏下指纹以及屏幕内的听筒、前置摄像头等等。\n\n背部依然是双摄设计，但后置双摄从横向排列变成了竖向排列，一上一下分布在闪光灯旁边。\n\n至于界面风格也比较严谨，参考了刚刚发布的iOS 11，信号图标已经得到了更新。\n\n这样的iPhone 8，喜欢吗？',
        news_sec_paragraph: '',
        news_three_paragraph: '',
        news_four_paragraph: '',
        news_five_paragraph: '',
        news_six_paragraph: '',
        news_seven_paragraph: '',
        news_eight_paragraph: '',
        news_night_paragraph: '',
        news_ten_paragraph: '',

    }, {
      message: '2017-06-25   author: ios小卒',
      news_image: 'images/ipadpro.jpg',
      news_artcle_image1: 'images/six_artcle/1.jpg',
      news_artcle_image2: 'images/six_artcle/2.jpg',
      news_artcle_image3: 'images/six_artcle/3.jpg',
      news_artcle_image4: 'images/six_artcle/4.jpg',
      news_artcle_image5: 'images/six_artcle/5.jpg',
      news_artcle_image6: 'images/six_artcle/6.jpg',
      news_artcle_image7: 'images/six_artcle/7.jpg',
      news_artcle_image8: 'images/six_artcle/8.jpg',
      news_artcle_image9: 'images/six_artcle/9.jpg',
      news_artcle_image10: 'images/six_artcle/10.jpg',

      news_title: '外媒这样评价iPad Pro 你又有什么评价？',
      news_small_title: '屏幕更大更好，芯片更强更快，RAM升级，还有变大了的Smart Keyboard，比上一代更适合用于工作',

      news_first_paragraph: '苹果开售10.5英寸iPad Pro。你可是你还没有想好要买不买这款新的产品。那不妨里看看外媒已经体验过这台设备的用户如何评价它，然后你再做决定吧。',
      news_sec_paragraph: '它的屏幕更大更好，芯片更强更快，RAM升级，还有变大了的Smart Keyboard都让它看起来比上一代更适合用于工作。它可能还是无法让你将iPad和“专业”联系起来，但是它足以取代9.7英寸平板。',
      news_three_paragraph: 'ArsTechnica的评测认为iOS 11会让它成为最像电脑的iPad：\n\n如果你已经认为 iPad和“专业”没什么关系，那新的硬件大概还是无法改变你这种印象，可是今年秋季 iOS 11正式上线时，这些平板会更有电脑的味道，比它们这7 年以来任何时候都更像电脑。这台平板上有些任务还是无法执行的，软件开发就是其中之一，但对于作家、艺术家乃至视频编辑师来说，这台设备的软件和硬件结合的程度大大增加了它的可靠性。',
      news_four_paragraph: 'Business Insider 则认为随着10.5 英寸 iPad Pro 的推出，iPad 的价值变得越来越清晰：',
      news_five_paragraph: 'iPad Pro 是一台很不错的设备，等更新到 iOS 11 之后它还会有更大的潜力和希望。这些年里 iPad 迟迟找不到自己的目标，可是如今苹果对这款产品的目标已经越来越明确了。从 Surface 到三星 Galaxy Book，市面上还有很多与 iPad Pro 的专业级平板电脑产品。可是即使现在 iPad Pro 有什么不足，它仍然是这类平板中最优秀的一款。\n\n不过 Business Insider 认为 Smart Keyboard 还是会有点让人失望。',
      news_six_paragraph: 'Smart Keyboard 可能还是无法让在提高生产力方面满足你的期待。它没有功能键，没有亮度或音量控制键。最让人失望的就是没有 Home 键帮助用户快速切回Home屏幕。而且这个键盘并不宽，在这样的键盘上打字并不舒服，它也不会老老实实待在你的腿上，视角也之一一个角度。我希望苹果能够在未来的版本上加爵这些问题，它应该是 iPad Pro 最大的败笔。',
      news_seven_paragraph: 'The Loop 则认为这款 iPad 是一款刚刚好（Goldilocks）的 iPad。',
      news_eight_paragraph: '这款 10.5 英寸 iPad 对于我来说真的是一款刚刚好的 iPad。它不大不小，性能又恰好可以处理任何它能处理的任务。我是高度推荐这款产品',
      news_night_paragraph: '新款 iPad Pro 提供了一个叫做 ProMotion 的屏幕刷新率自动调节功能，它能够根据用户不同场景使用模式调整屏幕的刷新率，从而使得画面显示达到最佳程度，最高可以达到 120Hz，以往产品这个刷新率只有 60Hz。更高的刷新率意味着画面的滚动有更优秀的流畅感受。不管是游戏还是在 Safari 中滚动页面，都能够感觉到一切变得更流畅。你或许会觉得这没什么了不起的，可是等到你自己亲自上手操作你就会明白了。ProMotion 也能够根据视频帧率进行调整，所以视频观看体验也会更优秀。',
      news_ten_paragraph: '我对 Smart Keyboard 上按键的大小也颇有微词。我非常喜欢苹果 MacBook 和 MacBook Pro 键盘以及它们的大按键。这个键盘的按键看起来还是可以更大一点，但苹果没有这样设计。如果键盘按键大小比较一致的话，那从 Mac 转移到 iPad 用户应该也能更快适应吧。',
    }]
  },
 
  click_to_startup: function (e) {
    var index=parseInt(e.currentTarget.dataset.index);
    var nav_array=this.data.array[index];
    console.log(nav_array);
    let str=JSON.stringify(nav_array);
    console.log(str);
    wx.navigateTo({
      url: '../news_page_nav_to/news_page_nav_to?nav_str_to='+str,
    })
  }
  ,
  onShareAppMessage: function () {
    return {
      title: 'iOS技术小栈',
      desc: '最具人气的小程序开发小栈!',
      path: '/page/user?id=123'
    }
  }
  ,
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
