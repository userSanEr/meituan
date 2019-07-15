$(function () {

    //引入头和尾
    $('#header').load('header.html');
    $('#footer').load('footer.html');


    //将城市存入数组
    // var ii = 0;
    // var z = $('.cities').length;

    // for (let i = 0; i < z; i++) {
    //     var arr = 'arr'
    //     var arr1 = arr + i
    //     var arr1 = [];

    //     for (var j = 0; j < $('.cities').eq(i).children('a').length; j++) {
    //         arr1.push($('.cities').eq(i).children('a').eq(j).text())
    //     }
    // }


    //实时获取input框的事件
    var arrquan2 = null;
    var text;
    var textarr = [];
    $('.textipt').on('input', function () {
        $('.chengshixiala').html('')
        text = $(this).val();
        textarr = text.split('')
        for (var m = 0; m < textarr.length; m++) {
            if (textarr[m] == "'") {
                textarr.splice(m, 1)
            }
        }

        text = textarr;
        text = text.join('')
        if (text == '') {
            $('.chengshixiala').hide()
            $('.chengshixiala').html('')
        } else {
            $('.chengshixiala').show()
            bijiao()
        }


    })


    //判断输入框与js文件是否匹配
    function bijiao() {
        for (let z = 0; z < quancheng.length; z++) {
            // a = quancheng[z].indexOf(text)
            // if(a!=-1){
            //     console.log(quancheng[z])
            // }

            var lgh = text.length;
            if (text == quancheng[z].slice(0, lgh)) {
                // console.log(hanzi[z])
                var cityname = hanzi[z];
                var html = `
    <a href="javascript:;" class="link city">${cityname}</a>
    `
                $('.chengshixiala').append(html)
            }
            else if (text == suoxie[z].slice(0, lgh)) {
                // console.log(hanzi[z])
                var cityname = hanzi[z]
                var html = `
    <a href="javascript:;" class="link city">${cityname}</a>
    `
                $('.chengshixiala').append(html)
            } else if (text == hanzi[z].slice(0, lgh)) {
                // console.log(hanzi[z])
                var cityname = hanzi[z]
                var html = `
    <a href="javascript:;" class="link city">${cityname}</a>
    `
                $('.chengshixiala').prepend(html)

            }
        }
    }


    //当添加的城市框点击时 
     $('.chengshixiala').on('click','a',function(){
        window.location.href='index.html';
        var cityname1 = $(this).html()
         var htmla=`
         <a href="javascript:;" class="link city">${cityname1}</a>
         `
        setCookie('city'+cityname1,cityname1)
        setCookie('zhu',cityname1);
         $('.zuijinfangwen').prepend(htmla)
     })
     var oCookie=document.cookie.split('; ');
     console.log(oCookie)
     for(var i=0;i<oCookie.length;i++){
        var zz=oCookie[i].split('=')
        console.log(zz)
        if(zz[0].slice(0,4)=='city'){
            var cityname2=zz[0].slice(4);
            var htmla=`
         <a href="javascript:;" class="link city">${cityname2}</a>
         `
            $('.zuijinfangwen').prepend(htmla)
        }
     }

     console.log(getCookie('zhu'))
    //将js文件中的数组分别放入的单独的数组中
    var quancheng = [];
    var suoxie = [];
    var hanzi = [];
    for (let z = 0; z < cityData.length; z++) {
        arrquan2 = cityData[z].split('|');
        //全拼拼音
        quancheng.push(arrquan2[1]);
        //缩写拼音
        suoxie.push(arrquan2[2]);
        //汉字
        hanzi.push(arrquan2[0]);
    }

    //设置开关
    var csqrrinx=true;
    //省份
    $('.province-col span').click(function(){
        tianchengshi($(this).index('.mt-province'))
        $('.div1ipt1 b').html($(this).text())
        $('.shengfenul1').hide();
        csqrrinx=false;
    })
    //三角
    $('.div1ipt1 i').click(function(){
        $('.shengfenul1').show()
    })
    //城市三角
    $('.div1ipt2 i').click(function(){
        if(csqrrinx==false){
            $('.shengfenul1').hide()
            $('.shengfenul2').show()
        }
        
    })
    //城市
    $('.shengfenul2').on('click','span',function(){
        window.location.href="index.html"
    })
    function tianchengshi(aa){
        var arr=cityshanxi;
        for(var i=0;i<arr.length;i++){
            var cityname3=arr[i];
            var html=`<span href="" class="">${cityname3}</sapn>`;
            $('.chengshilist').append(html)
        }
    }


})


