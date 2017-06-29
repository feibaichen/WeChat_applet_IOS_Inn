//article.js
var app = getApp()
Page({
  data: {
    array: [{
      message: 'foo',
      title:'Xcode：将iOS官方技术文档打包成PDF格式下载到本地',
      detail_title:'在Xcode中将文档下载打印，快速获取官方文档',
      image_one:'images/one/1.jpg',
      image_two: 'images/one/2.jpg',
      image_three: 'images/one/3.jpg',
      image_four: 'images/one/4.jpg',
      image_five: 'images/one/5.jpg',
      image_six: 'images/one/6.jpg',
      image_seven: 'images/one/7.jpg',
      image_eight: 'images/one/8.jpg',
      image_night: 'images/one/9.jpg',
      image_ten: 'images/one/10.png',
      news_first_paragraph: 'Xcode将iOS官方技术文档打包成PDF格式下载到本地的步骤\n\n第一步，打开Xcode开发工具，点击上方菜单栏的“window”选项，选择“Documentation and API Reference”。然后进入了文档界面。',
      news_sec_paragraph: '第二步，选中左边列表栏目，选择你要打包的一个栏目，鼠标选中，右边会显示内容',
      news_three_paragraph: '第三步，点击菜单栏“Editor”，下拉选择“Reveal in Navigator”。',
      news_four_paragraph: '第四步，选择菜单栏“File”中下拉栏中的“Print”。',
      news_five_paragraph: '第五步，弹出打印页面后，点击下方“PDF”字样的下拉小尖头，选择“Save as PDF”。',
      news_six_paragraph: '第六步，弹出如下页面，可以修改名称、保存位置等等内容，然后点击“Save”保存。然后就可以在本地看得到你保存的技术文档了。你还可以通过其他软件，将PDF格式转换成word等格式。',
    }, {
      message: 'bar',
      title: 'iOS开发：九宫格的制作和封装',
      detail_title: '常用的九宫格的封装和自由使用',
      image_one: 'images/two/1.png',
      image_two: 'images/two/2.png',
      image_three: 'images/two/3.png',
      image_four: 'images/two/4.jpg',
      image_five: 'images/two/5.jpg',
      image_six: 'images/two/6.jpg',
      image_seven: 'images/two/7.jpg',
      image_eight: 'images/two/8.jpg',
      image_night: 'images/two/9.jpg',
      image_ten: 'images/two/10.jpg',
      news_first_paragraph: '我们经常会用到一些九宫格来放置一些button或者view里来显示一些内容。但是我们不愿去用collectionview来替代。这时候九宫格就很方便和很快捷。\n\n下面是具体的九宫格的封装和制作。代码量很少，可快速引用。\n\n一、项目示例的GitHub地址：https://github.com/feibaichen/Squared_Up\n\n二、实现的功能有：\n\n1.自定义具体的九宫格的格子数量\n\n2.自定义每一行的格子数量\n\n3.自定义每一行格子的行距以及每一列的格子行距\n\n4.自定义格子的宽和高\n\n5.格子横向和垂直方向居中\n\n三、代码说明：\n\n以下是view controller的具体每一行代码：',
      news_sec_paragraph: '',
      news_three_paragraph: '',
      news_four_paragraph: '效果图：',
      news_five_paragraph: '',
      news_six_paragraph: '',
    }, {
      message: 'bar',
      title: 'Xcode9 beta：AR开发、多模拟器、无线调试',
      detail_title: '苹果macOS sierra10.12.4安装CocoaPods库工具环境',
      image_one: 'images/three/1.jpg',
      image_two: 'images/three/2.jpg',
      image_three: 'images/three/3.jpg',
      image_four: 'images/three/4.jpg',
      image_five: 'images/three/5.jpg',
      image_six: 'images/three/6.jpg',
      image_seven: 'images/three/7.jpg',
      image_eight: 'images/three/8.jpg',
      image_night: 'images/three/9.jpg',
      image_ten: 'images/three/10.png',
      news_first_paragraph: '今年苹果的WWDC开发者大会，对于广大苹果开发者而言，有惊喜也有些小小失望。其中一个重磅内容是ARkit的介绍，很多人开始预言苹果将会成为虚拟现实的重大赢家和潜力开发平台。\n\n一、关于iOS11、macOS hight sirra 10.13、Xcode 9 beta\n\n据知，关于ARkit开发的一些教程很少，还处于认知阶段。iOS11测试版还是有些bug, 苹果macOS hight sirra 10.13也有些许问题。Xcode 9 beta 测试版也已经在开发中心可以下载。\n\n本人已对iOS11、macOS hight sirra 10.13、Xcode 9 beta饥渴难耐，将设备全部进行了更新升级。第一时间对这些测试版进行了体验。\n\n至于iOS11，这里就不多说了，大家可能已经升级了。但是iOS11中，支持ARkit运行虚拟现实应用程序是一个重磅功能，很值得期待，因为后期将会有很多的AR应用出现在App Store之中。\n\n在这里主要介绍Xcode 9 beta测试版的一些内容。目前我的电脑版本是macOS hight sirra10.13。之前我装的10.12.4 macOS sirra，当时开机内存（8G）内存占用只有22%;升级到macOS hight sirra 10.13，内存（8G）占用达到44%。如果你的电脑内存低于8G估计会很卡。',
      news_sec_paragraph: '桌面版App Store目前无法直接升级Xcode到Xcode9，需要在苹果开发者网站(https://developer.apple.com/xcode/download/)进行下载。\n\n二、Xcode 9 beta 新增AR开发、多模拟器同时运行、手机无线调试功能\n\n1. Xcode 9 （5个G大小）下载（https://developer.apple.com/xcode/download/）',
      news_three_paragraph: '2. Xcode 9新增AR开发\n\n打开Xcode 9 ，新建应用会发现多了一个模块，如图：',
      news_four_paragraph: '3.苹果手机真机无线调试功能（开发者可以无需数据线联机，直接无线调试）',
      news_five_paragraph: '4.多模拟器同时运行（之前只能打开一种，现在可以直接开启5s6s7多个，直接运行,但是有点吃内存）。模拟器也更加漂亮和放大拖拽操作，外观跟实体机几乎一摸一样，home键也可鼠标点按。外观似乎只有黑色可选。各个操作互不影响。但是会有点卡。',
      news_six_paragraph: '应用开发调试工具',
    }, {
      message: 'bar',
      title: 'iOS接口API数据开发：服务器端PHP接口返回JSON数据源代码',
      detail_title: '在网络获取数据时服务器返回json或者xml数据，解析数据',
      image_one: 'images/four/1.jpg',
      image_two: 'images/four/2.jpg',
      image_three: 'images/four/3.jpg',
      image_four: 'images/four/4.jpg',
      image_five: 'images/four/5.jpg',
      image_six: 'images/four/6.jpg',
      image_seven: 'images/four/7.jpg',
      image_eight: 'images/four/8.jpg',
      image_night: 'images/four/9.jpg',
      image_ten: 'images/four/10.png',
      news_first_paragraph: 'iOS开发过程中，在网络获取数据时，需要服务器返回json或者xml数据，解析数据。本篇讲解在服务器端如何运行的。\n\n一、XAMPP测试环境PHP源码\n\n本次PHP源码实在MacBook Pro上搭建XAMPP环境进行测试的。具体如何使用XAMPP软件，可以去搜索了解一下具体内容。',
      news_sec_paragraph: 'XAMPP根目录下"htdocs"文件夹下的文件有三个，分别是boxjson.php，testjson.php，testxml.php：',
      news_three_paragraph: '二、PHP源码\n\nboxjson.php代码：',
      news_four_paragraph: 'testjson.php代码：',
      news_five_paragraph: 'testxml.php代码：',
      news_six_paragraph: '三、返回json数据在浏览器中输入localhost／testjson.php，即可显示返回json数据:',
    }, {
      message: 'bar',
      title: '多种TableViewCells混排在一个TableView里面',
      detail_title: '多种TableViewCells混排在一个TableView里面',
      image_one: 'images/five/1.jpg',
      image_two: 'images/five/2.jpg',
      image_three: 'images/five/3.jpg',
      image_four: 'images/five/4.jpg',
      image_five: 'images/five/5.jpg',
      image_six: 'images/five/10.png',
      image_seven: 'images/five/10.png',
      image_eight: 'images/five/10.png',
      image_night: 'images/five/10.png',
      image_ten: 'images/five/10.png',
       news_first_paragraph: 'Two And More TableViewCell display in one tableView\n\n多种TableViewCells混排在一个TableView里面\n\n可以添加无数多个自定义的TableViewCell，可以在接口数据传递指定位置，随时改变每种TableViewCel混编的顺序',
      news_sec_paragraph: '',
      news_three_paragraph: '',
      news_four_paragraph: '',
      news_five_paragraph: '',
      news_six_paragraph: '',
    }, {
      message: 'bar',
      title: 'iOS中__block 关键字的底层实现原理',
      detail_title: 'Block不允许修改外部变量的值Apple这样设计，应该是考虑到了block的特殊性',
      image_one: 'images/six/1.jpg',
      image_two: 'images/six/2.jpg',
      image_three: 'images/six/3.jpg',
      image_four: 'images/six/4.jpg',
      image_five: 'images/six/5.jpg',
      image_six: 'images/six/6.jpg',
      image_seven: 'images/six/end.jpg',
      image_eight: 'images/six/10.png',
      image_night: 'images/six/10.png',
      image_ten: 'images/six/10.png',
      news_first_paragraph: '默认情况下，在block中访问的外部变量是复制过去的，即：写操作不对原变量生效。但是你可以加上 __block 来让其写操作生效，示例代码如下:',
      news_sec_paragraph: '我们都知道：Block不允许修改外部变量的值，这里所说的外部变量的值，指的是栈中指针的内存地址。__block 所起到的作用就是只要观察到该变量被 block 所持有，就将“外部变量”在栈中的内存地址放到了堆中。进而在block内部也可以修改外部变量的值。',
      news_three_paragraph: 'Block不允许修改外部变量的值Apple这样设计，应该是考虑到了block的特殊性，block也属于“函数”的范畴，变量进入block，实际就是已经改变了作用域。在几个作用域之间进行切换时，如果不加上这样的限制，变量的可维护性将大大降低。又比如我想在block内声明了一个与外部同名的变量，此时是允许呢还是不允许呢？只有加上了这样的限制，这样的情景才能实现。',
      news_four_paragraph: '“定义后”和“block内部”两者的内存地址是一样的，我们都知道 block 内部的变量会被 copy 到堆区，“block内部”打印的是堆地址，因而也就可以知道，“定义后”打印的也是堆的地址。\n\n那么如何证明“block内部”打印的是堆地址？\n\n把三个16进制的内存地址转成10进制就是：\n\n定义后前：6171559672\n\block内部：5732708296\n\n定义后后：5732708296\n\n中间相差438851376个字节，也就是 418.5M 的空间，因为堆地址要小于栈地址，又因为iOS中一个进程的栈区内存只有1M，Mac也只有8M，显然a已经是在堆区了。\n\n这也证实了：a 在定义前是栈区，但只要进入了 block 区域，就变成了堆区。这才是 __block 关键字的真正作用。\n\n理解到这是因为堆栈地址的变更，而非所谓的“写操作生效”，这一点至关重要，要不然你如何解释下面这个现象：\n\n以下代码编译可以通过，并且在block中成功将a的从Tom修改为Jerry。',
      news_five_paragraph: '这里的a已经由基本数据类型，变成了对象类型。对象类型，block会对对象类型的指针进行copy，copy到堆中，但并不会改变该指针所指向的堆中的地址，所以在上面的示例代码中，block体内修改的实际是a指向的堆中的内容。\n\n但如果我们尝试像上面图片中的65行那样做，结果会编译不通过，那是因为此时你在修改的就不是堆中的内容，而是栈中的内容。\n\n上文已经说过：Block不允许修改外部变量的值，这里所说的外部变量的值，指的是栈中指针的内存地址。',
      news_six_paragraph: '',
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
  click_to_startup: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var nav_array = this.data.array[index];
    console.log(nav_array);
    let str = JSON.stringify(nav_array);
    console.log(str);
    wx.navigateTo({
      url: '../article_page_nav_to/article_page_nav_to?nav_str_to=' + str,
    })
  }
  ,
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
