$(function () {
    // 引入头部
    $('#header').load('header.html');
    $('#footer').load('footer.html')


    // --------------------跳转订单页-------------------
    $('.detail').click(function(){
        console.log(111)
        location.href='cart.html'
    })
    

    //-----------------------------判断是否登录----------------------------------
    function loginU(){
        var loginUser=getCookie('user');
        if(getCookie('user')==''){
            $('.weidenglu').show();
            $('.yidenglu').hide();
        }else{
            $('.weidenglu').hide();
            $('.yidenglu').show();
            $('.user-name').eq(1).html(loginUser);
        }
    }
    loginU()
    

    // --------------------------------全部分类里的显示隐藏-----------------
    $('.content-wrap ul .nav-li').hover(function () {
        // $('.detail-wrapper').addClass('active')
        var index = $(this).index();
        $(this).parent().parent().siblings().children().eq(index + 1).addClass('active').siblings().removeClass("active");
    }, function () {
        // $('.detail-wrapper').removeClass('active')
    })

    $('.fenlei-container').hover(function(){
        $('.detail-wrapper').addClass('active')
    },function(){
        $('.detail-wrapper').removeClass('active')
    })


    //---------------------------------下方选项卡-----------------------------
    function tab(nav_item, content) {
        $(nav_item).mouseover(function () {
            // console.log($(this))
            $(this).addClass('active').siblings().removeClass('active');
            // console.log($(content).eq($(this).index()))
            $(content).eq($(this).index() - 1).show().siblings(content).hide()
        })
    }
    tab('.quality-container .nav-item', '.quality-container .quality-content')
    tab('.offer-container .nav-item', '.offer-container .offer-content')
    tab('.maoyan-container .nav-item', '.maoyan-container .scenes-content')
    tab('.zhenguo-container .nav-item', '.zhenguo-container .zhenguo-content')

    // --------------------------------------格调数据获取------------------

    function gediaodata(gediao,quality){
        var list = gediao.list;
        if (!list || !list.length) {//=====>进行异常处理
            //不存在的话
            $(quality).html('您请求的数据不存在');
        } else {
            //存在数据
            //1、获取模板
            for (var i = 0; i < list.length; i++) {
                var repla = $('#people2').html();
                //进行替换
                repla=repla.replace('articleId',list[i].sysId);
				repla=repla.replace("img/indeximg/gediao1.jpg",list[i].coverImg);
				repla=repla.replace('$title$',list[i].title);
				repla=repla.replace('$creatAt$',list[i].creatAt);
				repla=repla.replace('$describe$',list[i].describe);
				repla=repla.replace('$subtitle$',list[i].subtitle);
				repla=repla.replace('$createNum$',list[i].createNum);
				repla=repla.replace('$creatByFullName$',list[i].creatByFullName);
                //添加到页面中 
                $(quality).append(repla)
            }
        }
    }
    var gediao1=gediaoData.gediaoData00.data;
    var quality1='#quality1'
    gediaodata(gediao1,quality1)
    var gediao2=gediaoData.gediaoData01.data;
    var quality2='#quality2'
    gediaodata(gediao2,quality2)
    var gediao3=gediaoData.gediaoData02.data;
    var quality3='#quality3'
    gediaodata(gediao3,quality3)
    var gediao4=gediaoData.gediaoData03.data;
    var quality4='#quality4'
    gediaodata(gediao4,quality4)
    var gediao5=gediaoData.gediaoData04.data;
    var quality5='#quality5'
    gediaodata(gediao5,quality5)


    // ------------------------------很优惠获取----------------------
    
    function pricedata(youhui,offer){
        var list = youhui.list;
        if (!list || !list.length) {//=====>进行异常处理
            //不存在的话
            $(offer).html('您请求的数据不存在');
        } else {
            //存在数据
            //1、获取模板
            for (var i = 0; i < list.length; i++) {
                var repla = $('#people3').html();
                //进行替换
                repla=repla.replace('articleId',list[i].sysId);
				repla=repla.replace("img/indeximg/eat1.jpg",list[i].coverImg);
				repla=repla.replace('$九鼎轩脆毛肚火锅$',list[i].title);
				repla=repla.replace('$¥$',list[i].creatAt);
				repla=repla.replace('$[龙湖天街]100元代金券1张，全场通用$',list[i].subtitle);
				repla=repla.replace('$9.9$',list[i].createNum);
				repla=repla.replace('$美团价¥100$',list[i].creatByFullName);
				repla=repla.replace('$已售1097$',list[i].describe);
                //添加到页面中 
                $(offer).append(repla)
            }
        }
    }
    var youhui1 = eatData.eatData02.data;
    var offer1='#offer1';
    var youhui2 = eatData.eatData00.data;
    var offer2='#offer2';
    var youhui3 = eatData.eatData01.data;
    var offer3='#offer3';
    pricedata(youhui1,offer1);
    pricedata(youhui2,offer2);
    pricedata(youhui3,offer3);



//    ----------------------------------movie数据获取----------------------
    function shuju(result, slide) {
        var list = result.list;
        if (!list || !list.length) {//=====>进行异常处理
            //不存在的话
            $(slide).html('您请求的数据不存在');
        } else {
            //存在数据
            //1、获取模板
            for (var i = 0; i < list.length; i++) {
                var repla = $('#people').html();
                //进行替换
                repla = repla.replace('articleId', list[i].sysId)
                repla = repla.replace('img/indeximg/movie01.jpg', list[i].coverImg)
                repla = repla.replace('$观众评$', list[i].creatAt)
                repla = repla.replace('$9.5$', list[i].creatByFullName)
                repla = repla.replace('$少年的你$', list[i].title)
                repla = repla.replace('$购票$', list[i].describe)
                //添加到页面中 
                $(slide).append(repla)
            }
        }
    }
    var result = movieData.movieData00.data;
    var result1 = movieData.movieData01.data;
    var slide = '#slide1';
    var slide1 = '#slide2';
    var slide3 = '#slide3';
    var slide4 = '#slide4';
    shuju(result, slide)
    shuju(result1, slide1)
    shuju(result, slide3)
    shuju(result1, slide4)


    // ------------------------------民宿数据获取----------------------
    function minsudata(zhenguo, minsu){
        var list = minsu.list;
        if (!list || !list.length) {//=====>进行异常处理
            //不存在的话
            $(zhenguo).html('您请求的数据不存在');
        } else {
            //存在数据
            //1、获取模板
            for (var i = 0; i < list.length; i++) {
                var repla = $('#people1').html();
                //进行替换
                repla = repla.replace('articleId', list[i].sysId)
                repla = repla.replace('img/indeximg/minsubig01.jpg', list[i].coverImg)
                repla = repla.replace('img/indeximg/minsusmall01.jpg', list[i].Img)
                repla = repla.replace('$空中花园南京路步行街店（粉色格子大床房）$', list[i].creatAt)
                repla = repla.replace('$整套$', list[i].sub_title1)
                repla = repla.replace('$可住$', list[i].sub_title2)
                repla = repla.replace('$￥$', list[i].price_icon)
                repla = repla.replace('$228$', list[i].creatByFullName)
                repla = repla.replace('$人民广场/外滩$', list[i].sub_title3)
                //添加到页面中 
                $(zhenguo).append(repla)
            }
        }
    }
    var minsu1 = minsuData.minsuData00.data;
    var zhenguo1='#zhenguo-content0';
    minsudata(zhenguo1,minsu1)
    var minsu2 = minsuData.minsuData01.data;
    var zhenguo2='#zhenguo-content1';
    minsudata(zhenguo2,minsu2)
    var minsu3 = minsuData.minsuData02.data;
    var zhenguo3='#zhenguo-content2';
    minsudata(zhenguo3,minsu3)
    var minsu4 = minsuData.minsuData03.data;
    var zhenguo4='#zhenguo-content3';
    minsudata(zhenguo4,minsu4)
    var minsu5 = minsuData.minsuData04.data;
    var zhenguo5='#zhenguo-content4';
    minsudata(zhenguo5,minsu5)
    var minsu6 = minsuData.minsuData05.data;
    var zhenguo6='#zhenguo-content5';
    minsudata(zhenguo6,minsu6)
    var minsu7 = minsuData.minsuData06.data;
    var zhenguo7='#zhenguo-content6';
    minsudata(zhenguo7,minsu7)
    var minsu8 = minsuData.minsuData07.data;
    var zhenguo8='#zhenguo-content7';
    minsudata(zhenguo8,minsu8)
    var minsu9 = minsuData.minsuData08.data;
    var zhenguo9='#zhenguo-content8';
    minsudata(zhenguo9,minsu9)
    var minsu10 = minsuData.minsuData09.data;
    var zhenguo10='#zhenguo-content9';
    minsudata(zhenguo10,minsu10)

    // --------------------------猜你喜欢数据-----------------------------
    function loadArticleList() {
        //请求数据
        var result = listData.listData00;
        var list = result.data.list;
        //判断数据存不存在
        if (!list || !list.length) {
            //不存在的话
            $('.love_bottom').html("请求数据不存在");
        } else {
            //存在数据
            //1 获取模板
            for (var i = 0; i < list.length; i++) {
                var htmlModel = $("#itemloveHtml").html();
                htmlModel = htmlModel.replace("$title$", list[i].title)
                htmlModel = htmlModel.replace("img/indeximg/e3f61992caf9efaf93750bfc7fd88b7e33151.jpg@214w_120h_1e_1c", list[i].img)
                htmlModel = htmlModel.replace("width: 84px", 'width: '+list[i].star+'px')
                htmlModel = htmlModel.replace("$pingjia$", list[i].pingjia)
                htmlModel = htmlModel.replace("$地址$", list[i].dizhi)
                htmlModel = htmlModel.replace("$jiage$", list[i].jiage)
                //进行替换
                // 添加到页面中 Dom append
                $(".love_bottom").append(htmlModel)

            }
        }
    }
    loadArticleList()


    // -------------------页面跳转----------------------
    $(".quality-img").click(function(){
        //接收当前点击图片的title
        var sumbitIndex=$(this).parents().attr('articleId');
        console.log(sumbitIndex);
        var sumbitImg=$($('.con2-title').eq(sumbitIndex-1)).html();
        console.log(sumbitImg);
        setCookie('sumbitTitle',sumbitImg,14);
        console.log(getCookie('sumbitTitle'));
        //进行跳转
        location.href="detail.html?myobj="+"myobj0"+$(this).parents().attr('articleId')
    })

})