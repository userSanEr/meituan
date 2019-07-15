
$(function () {
    $('.header').load('./header.html')
    $('.footer').load('./footer.html')




    function getUrlParams(name) {
        var re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(re)
        console.log(window.location.search.substr(1).match(re))
        if (r == null) {
            return;
        } else {
            return r[2];
        }
    }
    var name = getUrlParams('myobj');
    console.log(name)
    var data = myobj[name]
    $('.content_header').children('span').eq(0).html(data.header_span1)
    $('.content_header').children('span').eq(1).html(data.header_span2)
    $('.content_header').children('span').eq(2).html(data.header_span3)
    $(".name").html(data.name)
    $('.address').children('p').eq(0).html(data.dizhi)
    $('.address').children('p').eq(1).html(data.dianhua)
    $('.address').children('p').eq(2).html(data.time)
    $('.img_big img').attr('src', data.imgbig)
    $('.img_small').children('img').eq(0).attr('src', data.imgsmalll)
    $('.img_small').children('img').eq(1).attr('src', data.imgsmall2)
    $('.shop_left h4').html(data.shop_lefth4)
    var list = data.list_arr;


    function gediaodata() {
        if (!list || !list.length) {//=====>进行异常处理
            //不存在的话
            $('#shop_left').html('您请求的数据不存在');
        } else {
            // console.log(111);
            //存在数据
            //1、获取模板
            for (var i = 0; i < list.length; i++) {
                var htmlModel = $('#html').html();
                htmlModel = htmlModel.replace('$articleId$', list[i].articleId)
                htmlModel = htmlModel.replace("http://p0.meituan.net/208.126/deal/029a1fa62438c4464aa855cf09fcb1ad118715.jpg@100w_100h_1e_1c", list[i].list_pic)
                htmlModel = htmlModel.replace('$list_qianggou$', list[i].list_qianggou)
                htmlModel = htmlModel.replace('$list_name$', list[i].list_name)
                htmlModel = htmlModel.replace('$list_xiaoliang$', list[i].list_xiaoliang)
                htmlModel = htmlModel.replace('$list_jiagefuhao$', list[i].$list_jiagefuhao$)
                htmlModel = htmlModel.replace('$list_jiagenum$', list[i].list_jiagenum)
                htmlModel = htmlModel.replace('$list_mendianjiage$', list[i].list_mendianjiage)
                htmlModel = htmlModel.replace('http://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png', list[i].list_xtb)
                $("#shop_left").append(htmlModel)
            }
        }
    }
    gediaodata()


    //判断是否登录
    function loginU() {
        var loginUser = getCookie('user');
        // console.log(loginUser)
        if (!(getCookie('user') == '')) {
            $('.tg-onload').css('display','none');
            $('#shop_left').css('display','block');
            $('.buy').click(function () {
                // -------------------获取当前点击的内容------------------------
                var getIndex = $(this).parents().parents().parents().attr('articleId');
                console.log(getIndex)
                var getTitle = $($('.shop_info_name span').eq(getIndex - 1)).html();
                console.log(getTitle);
                var getPrice = $($('.shop_info_jiage s').eq(getIndex - 1)).html();
                console.log(getPrice);
                setCookie('Title', getTitle, 14)
                setCookie('price', getPrice, 14);


                //yu    -----存入cookie 加购物车----
                window.index = 0;
                if (getCookie('index') != '') {
                    index = 1 + Number(getCookie('index'));
                }
                // console.log(index)
                var shop_name = $(this).siblings('.shop_info_name').children('span').text()
                // console.log(shop_name)
                var shop_pic = $(this).parent('').siblings('img').attr('src')
                // console.log(shop_pic)
                setCookie("shop_name" + index, shop_name)
                setCookie("shop_pic" + index, shop_pic)
                setCookie('index', index)
                index++
                // console.log(index)
                location.href = 'order.html'
            })
        } else {
            $('.tg-onload').css('display','block');
            $('#shop_left').css('display','none');
            $('.liji-onload').click(function () {
                alert('请您登录账号');
                location.href = 'login.html'
            })
        }
    }
    loginU()
})