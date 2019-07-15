$(function () {
    //---------------- 头部尾部引入------------
    $('#header').load('header.html');
    $('#footer').load('footer.html')

    // ------------支付方式的选项卡---------
    $('.pay-menu li').eq(0).click(function () {
        $('.pay-list').eq(0).show();
        $('.pay-list').eq(1).hide()
    })
    $('.pay-menu li').eq(1).click(function () {
        $('.pay-list').eq(1).show();
        $('.pay-list').eq(0).hide();
    })



    // ----------支付帮助------------
    $('.pay-dropdown').hover(function () {
        $('.pay-dropdown-menu').show();
    }, function () {
        $('.pay-dropdown-menu').hide()
    })
    $('.pay-collapse-arrow').click(function () {
        $(this).parent().parent().toggleClass('pay-collapse-open').siblings().removeClass("pay-collapse-open");
    })


    // ------------------------获取cookie------------------
    var danPrice=getCookie('price')
    var totalTiltle = getCookie('Title');
    console.log(totalTiltle)
    var sumbitTitle = getCookie('sumbitTitle')
    //标题
    $('.xiangmu-name').html('项目:' + sumbitTitle + ':' + totalTiltle);
    //应付金额
    var payforPrice = getCookie('payfor');
    console.log(payforPrice)
    console.log(payforPrice=='')
    // if(payforPrice==''){
    //     $('.amount-price').html('￥'+danPrice)
    // }else{
        $('.amount-price').html(payforPrice)
    // }
    

    //用于下面进行判断
    var sendPrice = payforPrice.split('');
    sendPrice.splice(0, 1);
    var stringPrice = sendPrice.join('');
    console.log(stringPrice);

    // ------------------------判断cookie-----------------------


    // var totalName=

    // console.log(myobj[0])
    // console.log(myobj.myobj01)
    // for(var i=0;i<myobj.length;i++){
    //     console
    // }
    // console.log(myobj.myobj01.name);



    // ---------------提交订单----------------
    var success=0;
    var fail=0;
    index=getCookie('index')
    $('.btn').click(function () {
        $('.modal').css("display", "block")
        setTimeout(function () {
            var result = prompt('请付款');
            console.log(payforPrice)
            if (result == stringPrice) {
                alert('支付成功')
                setCookie("shop_success" + index, 'success')
                success++;
                location.href = 'cart.html'
            } else {
                alert('支付失败')
                fail++;
                setCookie("shop_fail" + index, 'fail')
                console.log("失败")
                location.href = 'cart.html'
            }
        }, 1000)
        setTimeout(function () {
            $('.modal').css("display", "none")
        }, 5000)
    })
    $('#close').click(function () {
        $('.modal').css("display", "none")
    })




    // ----------------------------时分秒变化-------------------
    function formatSeconds(value) {
        var secondTime = parseInt(value);// 秒
        var minuteTime = 0;// 分
        var hourTime = 0;// 小时
        if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
            //获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            //获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            //如果分钟大于60，将分钟转换成小时
            if (minuteTime > 60) {
                //获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                //获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        //如果转换为秒数小于10
        if (parseInt(secondTime) < 10) {
            //返回0+秒数拼接
            result = ":0" + parseInt(secondTime);
        } else {
            //返回秒数
            result = ":" + parseInt(secondTime);
        }
        //如果分钟数大于0
        if (minuteTime > 0) {
            //小于10 返回0+秒数
            if (minuteTime < 10) {
                result = "0" + parseInt(minuteTime) + result;
            } else {
                //返回秒数
                result = ":" + parseInt(minuteTime) + result;
            }
            //如果分钟数小于0 返回00+秒数
        } else {
            result = "00:" + result;
        }
        //如果小时数大于0
        if (hourTime > 0) {
            //返回字符串拼接之后的结果
            result = "" + parseInt(hourTime) + result;
        }
        //从函数中返回值
        return result;
    }
    //函数传值为要实现倒计时的天数的秒数
    formatSeconds(86400)
    //24小时内支付
    //24*60*60=86400
    var time = 86400;

    //计时器
    setInterval(function () {
        //时间秒数每减1 输出一次值
        time -= 1;
        $('.chaoshi-time').html(formatSeconds(time))
    }, 100)
})