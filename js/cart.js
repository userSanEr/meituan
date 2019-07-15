$(function () {
    // -------------引入头部底部----------
    $('#header').load('header.html');
    $('#footer').load('footer.html');

    // ------------全部订单选项卡-----------
    $('.orders-ul li').click(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        // $(this).parent().parent().next().children().eq(index).show().siblings().hide()
        $('.orders-body').eq(index).show().siblings().hide();
    })


    $('.link-ul').eq(0).children().click(function () {
        var index = $(this).index();
        $('.orders-body').eq(index).show().siblings().hide();
        $('.orders-ul li').eq(index).addClass('active').siblings().removeClass('active');
    })




    
    // -----------------yu 购物车存入------------------
    var html = "";
    var index = getCookie('index')
    $('.orders-body').html('')
    
    //付款个数
    var shibai=0;
    var chenggong=0;
    
    for (let i = 0; i <= index; i++) {
        // console.log(i)
        if (getCookie('index') != '') {
            var shop_name = getCookie('shop_name' + i)
            var shop_pic = getCookie('shop_pic' + i)
            var shop_num = getCookie('shop_num' + i)
            var success = getCookie('shop_success')
            var fail = getCookie('shop_fail' + i)
            console.log(fail)
            //html导入内部模板
            html = `<div>
            <div class="order-item clearfix">
                <div class="order-img"><a href="javascript:;"
                        class="link">
                        <div><img class="shop_pic"
                                src="${shop_pic}"
                                class="image"></div>
                    </a></div>
                <div class="order-info">
                    <div class="info-box"><a href="javascript:;"
                            class="link">
                            <p class="order-title">${shop_name}</p>
                        </a>
                        <p class="info">数量：${shop_num}</p>
                    </div>
                </div>
                <div class="order-price">总价: ￥268</div>
                <div class="order-status">待付款</div>
                <div class="order-btn"></div>
            </div>
        </div>`
            if(fail!=''){
                $('.orders-body').eq(1).append(html)
                shibai++;
                $('.fukuan').html(shibai)
                console.log($('.order-status'))
            }
            else{
                $('.orders-body').eq(3).append(html)
                chenggong++;
                $('.orders-ul .num').eq(3).html(chenggong)
                console.log($('.order-status'))
            } 
            $('.orders-body').eq(0).append(html)
            console.log($('.order-status'))
        }

    }

   



})