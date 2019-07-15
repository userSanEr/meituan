$(function () {

    // -----------------------引入动态码--------------
    $('.imageDesktop').load('yzm.html')


    // --------------------选项卡--------------------
    $('#J-mobile-link').click(function () {
        console.log($('.form'))
        $('.form').eq(0).hide();
        $('.form').eq(1).show();
    });
    $('#J-mobile-link1').click(function () {
        console.log($('.form'))
        $('.form').eq(0).show();
        $('.form').eq(1).hide();
    });

    // ---------------------获取焦点---------------------
    // 手机号
    $('.phone-input').focus(function () {
        // console.log(111);
        $('.phone-input-wrapper').css('border-color', '#2bb8aa');
        $('.validate-info').css('visibility', 'hidden');
    }).blur(function () {
        $('.phone-input-wrapper').css('border-color', '#aaa');


    })
    //密码
    $('.pw-input').focus(function () {
        $(this).css('border-color', '#2bb8aa');
        $('.validate-info').css('visibility', 'hidden');
    }).blur(function () {
        $(this).css('border-color', '#aaa');

    })


    //动态码随机数
    function huou() {
        var num = "";
        for (var i = 0; i < 6; i++) {
            num += Math.floor(Math.random() * 10);
        }
        return num;
    }
    var Num = huou();





    console.log(document.cookie)
    //normal登录
    $('.login .btn').eq(0).focus(function () {
        var userName1 = $('.phone-input').eq(0).val();
        var passWord1 = $('.pw-input').eq(0).val();
        console.log(userName1, passWord1)
        getPass = getCookie(userName1);
        console.log(getPass);
        var iphoneReg = /^1[3458]\d{9}$/;
        var iphoneValue = $('.phone-input').eq(0).val();
        //手机 密码为空
        if ($('.phone-input').eq(0).val() == '' && $('.pw-input').eq(0).val() == '') {
            $('.phone-input-wrapper').eq(0).css('border-color', 'red');
            $('.pw-input').eq(0).css('border-color', 'red');
            $('.validate-info').eq(0).css('visibility', 'visible');
            //手机不为空 密码为空
        } else if (!($('.phone-input').eq(0).val() == '') && $('.pw-input').eq(0).val() == '') {
            $('.pw-input').eq(0).css('border-color', 'red');
            $('.validate-info').eq(0).css('visibility', 'visible');
            $('.validate-info').eq(0).html('<i class="tip-status tip-status-opinfo"></i>请输入密码')
            //手机密码都不为空
        } else if (!($('.phone-input').eq(0).val() == '') && !($('.pw-input').eq(0).val() == '')) {
            //手机的书写格式
            // console.log(passWord1)
            if (!(iphoneReg.exec(iphoneValue))) {
                $('.phone-input-wrapper').eq(0).css('border-color', 'red');
                $('.validate-info').eq(0).css('visibility', 'visible');
                $('.validate-info').eq(0).html('<i class="tip-status tip-status-opinfo"></i>请输入正确手机号')
            } else {
                if (passWord1 == getPass) {
                    $('.validate-info').eq(0).css('visibility', 'visible');
                    $('.validate-info').eq(0).html('<i class="tip-status tip-status-opinfo"></i>检测到您的账号存在风险,需要风控验证')
                    $('.mtdp-login-bg').css('display', 'block');
                    $('.yodaVerifyRoot').css('display', 'block');
                    $('#canvas').attr('height', "40")
                    $('#canvas').attr('width', "90")
                    draw(show_num);
                } else {
                    $('.phone-input-wrapper').eq(0).css('border-color', 'red');
                    $('.validate-info').eq(0).css('visibility', 'visible');
                    $('.validate-info').eq(0).html('<i class="tip-status tip-status-opinfo"></i>您登陆的账户未注册或密码错误')
                }
            }
        }
    })


    //iphone登录
    $('.login .btn').eq(1).focus(function () {
        var iphoneReg = /^1[3458]\d{9}$/;
        var dtReg = /^\d{6}$/
        var iphoneValue = $('.phone-input').eq(1).val();
        var dtValue = $('.pw-input').eq(1).val();
        console.log(dtValue)
        //手机 验证码两者为空
        if ($('.phone-input').eq(1).val() == '' && $('.pw-input').eq(1).val() == '') {
            $('.phone-input-wrapper').eq(1).css('border-color', 'red');
            $('.pw-input').eq(1).css('border-color', 'red');
            $('.validate-info').eq(1).css('visibility', 'visible');
            //手机不为空  验证码为空
        } else if (!($('.phone-input').eq(1).val() == '') && $('.pw-input').eq(1).val() == '') {
            $('.pw-input').eq(1).css('border-color', 'red');
            $('.validate-info').eq(1).css('visibility', 'visible');
            $('.validate-info').eq(1).html('<i class="tip-status tip-status-opinfo"></i>请输入动态码并输入正确手机号')
            //两者都不为空
        } else if (!($('.phone-input').eq(1).val() == '') && !($('.pw-input').eq(1).val() == '')) {
            //判断手机号格式
            if (!(iphoneReg.exec(iphoneValue))) {
                $('.pw-input').eq(1).css('border-color', 'red');
                $('.validate-info').eq(1).css('visibility', 'visible');
                $('.validate-info').eq(1).html('<i class="tip-status tip-status-opinfo"></i>请输入正确手机号')
                //手机号格式正确 判断验证码
            } else {
                $('.validate-info').eq(1).css('visibility', 'hidden');
                //验证码格式不正确
                if (!(dtReg.exec(dtValue))) {
                    $('.huoqu').css('display', 'block');
                    //验证码格式正确
                } else {
                    console.log(1);
                    setCookie('user', iphoneValue);
                    console.log(getCookie('user'));
                    location.href = 'index.html'
                }
            }
        }
    })


    //获取动态码
    function key() {
        var iphoneValue;
        $('.phone-input').bind('input', function () {
            iphoneValue = $(this).val()
            var iphoneReg = /^1[3458]\d{9}$/;
            if (iphoneReg.exec(iphoneValue)) {
                var isflag = false;
                $('.mobile-btn').click(function () {
                    //计时器
                    if (!isflag) {
                        isflag = true;
                        $('.pw-input').val(Num);
                        $('.huoqu').css('display', 'block')
                        $('.huoqu').html('已获取，需要重新发送请点击')
                        var count = 60;
                        var timer = setInterval(function () {
                            count--;
                            $('.mobile-btn').val('重新获取(' + count + ')s')
                            if (count == 0) {
                                clearInterval(timer);
                                $('.mobile-btn').val('获取手机动态码')
                            }
                        }, 1000)
                    }
                    setTimeout(function () {
                        isflag = false;
                    }, 60000)
                })
            }
        })
    }
    key();

})
