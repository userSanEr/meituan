$(function(){

    // ------------------------头部引入--------------
    $('.header').load('./header.html')
    $('.footer').load('./footer.html')

    // -----------------------接收cookie--------------------
    //获取title名
    var totalTiltle=getCookie('Title');
    var sumbitTitle=getCookie('sumbitTitle')
    $('.shipin a').html(sumbitTitle+":"+totalTiltle)
    //获取价格
    var sumbitPrice=getCookie('price')
    $('.danjia').html('￥'+sumbitPrice);
    $('.zongjia').html('￥'+sumbitPrice);
    $('.yingfu').html('￥'+sumbitPrice)

    // -------------------------价格变化-----------------
    //减少
    var index=1;
    $('.minus-btn').click(function(){
        if(index==1){
            $(this).css('opacity','0.3')
            return false;
        }
        index--;
        // $('.total-price span').html($('.danjia span').text()*index)
        $('.zongjia').html('￥'+sumbitPrice*index)
        $('.yingfu').html('￥'+sumbitPrice*index);
        $('.input').val(index)
        return false;
    })
    //增加
    $('.plus-btn').click(function(){
        index++;
        $('.minus-btn').css('opacity',1)
        $('.zongjia').html('￥'+sumbitPrice*index);
        $('.yingfu').html('￥'+sumbitPrice*index);
        $('.input').val(index)
        return false;
    })


    //手机号保密
    var loginUser=getCookie('user');//得到手机号
    var stringUser=loginUser.split('');//转化为数组
    var UserNum=stringUser.splice('3',4,'****')//替换成*
    var ArrayUser=stringUser.join('')//转化为字符串
    $('.mobile-info s').html('将发送美团券密码至手机号：'+ArrayUser);//改变html

    //提交订单点击
    $('.btn').click(function(){
        console.log($('.yingfu').html())
        //存储cookie
        setCookie('payfor',$('.yingfu').html());
        // $('.input').val(1)

       

        // -----------------------
        var shop_num=$('.input').val()
        console.log(shop_num)
        var index1=getCookie('index')
        setCookie('shop_num'+index1,shop_num)



        location.href='payfor.html'
    })


    

})