/**
 * Created by Administrator on 2017/6/18.
 */
var mainMusic = $('#musicfx');
// 返回地图按钮点击事件
$('.backBtn').on('touchend', function () {
    //主页面音乐暂停
    mainMusic.get(0).play();
    //所有全景消失
    $('.item3').hide();
    $('.item3').html('');
    $('.item4').hide();
    $('.item4').html('');
    $('.item5').hide();
    $('.item5').html('');
    $('.item6').hide();
    $('.item6').html('');
    $('.item7').hide();
    $('.item7').html('');
    $('.item8').hide();
    $('.item8').html('');
    $('.item9').hide();
    $('.item9').html('');
    $('.item99').hide();
     for(var i = 1;i<8;i++){
         $('.item9'+i).hide();
         $('.item9'+i).html('');
     }
    $('.item11').hide();
    $('.item12').hide();

    //去除食堂人物动画 以便可以再次查看
    $('.canvas-img2').removeClass('enter10');
    $('.shitangWoman').removeClass('enterWoman');
    //去除招办人物动画 以便可以再次查看
    $('.canvas-img3').removeClass('enter11');
    $('.shitangMan').removeClass('enterMan');

    $('.shitangWoman15').removeClass('enterWoman15');


    // for(var i = 3;i<10;i++){
    //     $('.item'+i).hide();
    // }
    $('.item2').show();
    $('.backBtn').hide();
});
$('.backBtn2').on('touchend', function () {
    //主页面音乐暂停
    mainMusic.get(0).play();
    //所有全景消失
    $('.item3').hide();
    $('.item3').html('');
    $('.item4').hide();
    $('.item4').html('');
    $('.item5').hide();
    $('.item5').html('');
    $('.item6').hide();
    $('.item6').html('');
    $('.item7').hide();
    $('.item7').html('');
    $('.item8').hide();
    $('.item8').html('');
    $('.item9').hide();
    $('.item9').html('');
    $('.item99').hide();
    for(var i = 1;i<8;i++){
        $('.item9'+i).hide();
        $('.item9'+i).html('');
    }
    $('.item11').hide();
    $('.item12').hide();

    //去除食堂人物动画 以便可以再次查看
    $('.canvas-img2').removeClass('enter10');
    $('.shitangWoman').removeClass('enterWoman');
    //去除招办人物动画 以便可以再次查看
    $('.canvas-img3').removeClass('enter11');
    $('.shitangMan').removeClass('enterMan');

    $('.shitangWoman15').removeClass('enterWoman15');


    // for(var i = 3;i<10;i++){
    //     $('.item'+i).hide();
    // }
    $('.item2').show();
    $('.backBtn').hide();
});

var fobiddenClick = function () {
    $(".suhe").hide();
    $(".quanjing").hide();
    $(".jianshen").hide();
    $(".shitang").hide();
    $(".fating").hide();
    $(".tushu").hide();
    $(".zhaoban").hide();
    $(".erji").hide();
}
var canClick = function () {
    $(".suhe").show();
    $(".quanjing").show();
    $(".jianshen").show();
    $(".shitang").show();
    $(".fating").show();
    $(".tushu").show();
    $(".zhaoban").show();
    $(".erji").show();
}

//初始化小人位置
var personPosition = function () {
    $(".person").snabbt({
        position: [205, -216, 0],
        duration: 1
    }).snabbt({
        position: [0, 0, 0],
        duration: 1
    })
}
//===============       宿舍        ===========
$('.sushe').on('touchend', function () {
    $('.item3').html(
        '<p class="sxtitle" >一级公寓</p><iframe src="../VR/3d/ss/ss.html" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>'
    );
    //禁止用户点击其他场景
    fobiddenClick();
    $(".person").snabbt({
        position: [0, -600, 0],
        duration: 1500
    }).snabbt({
        position: [-100, -600, 0],
        duration: 1000
    })
    setTimeout(function () {
        //主页面音乐暂停
        //mainMusic.get(0).pause();
        $('.item3').show()
            .siblings()
            .hide();
        // 黑色遮罩层出现
        setTimeout(function () {
            $('.item10').show();
            $('.backBtn').hide();
        }, 500);
        ////小人运动进入画面
        //setTimeout(function () {
        //    $('.canvas-img2').addClass('enter10');
        //}, 1000);
        //食堂阿姨进入画面
        setTimeout(function () {
            $('.shitangWoman').addClass('enterWoman');
        }, 1500);
        //食堂阿姨运动完毕后执行对话
        $('.shitangWoman').on('webkitTransitionEnd', function () {
            setTimeout(function () {
                $('.itemTalk101').show();
            }, 1000);
            setTimeout(function () {
                $('.itemTalk101').hide();
                $('.item10').hide();
                $('.backBtn').show();
            }, 3000);
        });

        // 恢复其他场景的点击事件
        canClick();
        //初始化小人在地图中的位置
        personPosition();
        $(".blackBg").hide();

    }, 2500)
})

//============  关闭场景  ==============
var closeWang = function (which, num1, num2, sex) {
    //食堂动画页面关闭按钮
    $(which).on('touchend', function () {
        //去除食堂人物动画 以便可以再次查看
        $('.canvas-img' + num1).removeClass('enter' + num2);
        $('.shitang' + sex).removeClass('enter' + sex);
        $('.item' + num2).hide();
        $('.backBtn').show();
    });
}
closeWang('.close1', 2, 10, 'Woman');
closeWang('.close15', 0,15, 'Woman15');

//=================     学校全景 ===========================
$('.quanjing').on('touchend', function () {


    //$('.item5').html(
    //    '<iframe src="https://720yun.com/t/2bc22jpOc1a?from=singlemessage&pano_id=264367" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>'
    //);
    //
    $(".person").snabbt({
        position: [0, -845, 0],
        duration: 1500
    }).snabbt({
        position: [-100, -845, 0],
        duration: 1000
    })
    setTimeout(function(){
        window.location.href="https://720yun.com/t/2bc22jpOc1a?from=singlemessage&pano_id=264367";
    },2800);
    //setTimeout(function () {
    //    //主页面音乐暂停
    //    mainMusic.get(0).pause();
    //    $('.item8').show()
    //        .siblings()
    //        .hide();
    //    $('.backBtn').show();
    //    // 恢复其他场景的点击事件
    //    canClick();
    //    //初始化小人在地图中的位置
    //    personPosition();
    //    $(".blackBg").hide();
    //}, 3000);

})

//===============     游泳池          ===========
$('.jianshen').on('touchend', function () {
    $('.item7').html(
        '<iframe src="../VR/3d/yyc/yyc.html" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>'
    );
    $(".person").snabbt({
        position: [0, -400, 0],
        duration: 1500
    }).snabbt({
        position: [-100, -400, 0],
        duration: 1000
    })
    setTimeout(function () {
        //主页面音乐暂停
        //mainMusic.get(0).pause();
        $('.item7').show()
            .siblings()
            .hide();
        // 黑色遮罩层出现,动画层面
        setTimeout(function () {
            $('.item14').show();
            $('.backBtn').hide();
        }, 1000);

        //招办人物进入画面
        setTimeout(function () {
            $('.shitang14').addClass('enter14');
        }, 1500);
        //招办人物运动完毕后执行对话
        $('.shitang14').on('webkitTransitionEnd', function () {
            setTimeout(function () {
                $('.itemTalk141').show();
            }, 1000);
            setTimeout(function () {
                $('.shitang14').removeClass('enter14');
                $('.itemTalk141').hide();
                $('.item14').hide();
                $(".backBtn").show();
            }, 2500);
        });
        // 恢复其他场景的点击事件
        canClick();
        //初始化小人在地图中的位置
        personPosition();

    }, 3900);

})

//=================      二级学院         ===================
$('.erji').on('touchend', function () {
       $(".person").snabbt({
        position: [0, -180, 0],
        duration: 1500
    }).snabbt({
        position: [-100, -180, 0],
        duration: 1000
    })

    setTimeout(function(){
        $('.item99').show().siblings().hide();
        //$('.backBtn').show();
        //恢复其他场景的点击事件
        canClick();
        //初始化小人在地图中的位置
        personPosition();

    },3000)

})


//==============     饭堂       =======================
$('.shitang').on('touchend', function () {
    $('.item4').html(
        '<iframe src="../VR/3d/ft/ft1.html" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>'
    );

    //禁止用户点击其他场景
    fobiddenClick();
    $(".person").snabbt({
        position: [0, -750, 0],
        duration: 1500
    }).snabbt({
        position: [100, -750, 0],
        duration: 1000
    });

    setTimeout(function () {
        //主页面音乐暂停
        //mainMusic.get(0).pause();
        $('.item4').show()
            .siblings()
            .hide();
        // 黑色遮罩层出现
        setTimeout(function () {
            $('.item15').show();
            $('.backBtn').hide();
        }, 500);
        //食堂阿姨进入画面
        setTimeout(function () {
            $('.shitangWoman15').addClass('enterWoman15');
        }, 1000);
        //食堂阿姨运动完毕后执行对话
        $('.shitangWoman15').on('webkitTransitionEnd', function () {
            setTimeout(function () {
                $('.itemTalk151').show();
            }, 1000);
            setTimeout(function () {
                $('.itemTalk151').hide();
                $('.item15').hide();
                $('.backBtn').show();
            }, 3000);
        });

        // 恢复其他场景的点击事件
        canClick();
        //初始化小人在地图中的位置
        personPosition();

    }, 3000)
})
//===============      图书馆         ===========
$('.tushu').on('touchend', function () {
    $('.item6').html(
        '<iframe src="../VR/3d/tsg/tsg.html" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>'
    );

    $(".person").snabbt({
        position: [0, -530, 0],
        duration: 1500
    }).snabbt({
        position: [100, -530, 0],
        duration: 1000
    })
    setTimeout(function () {
        //主页面音乐暂停
        //mainMusic.get(0).pause();
        $('.item6').show()
            .siblings()
            .hide();
        // 黑色遮罩层出现
        setTimeout(function () {
            $('.item12').show();
            $('.backBtn').hide();
        }, 500);
        //食堂阿姨进入画面
        setTimeout(function () {
            $('.shitang12').addClass('enter12');
        }, 1000);
        //食堂阿姨运动完毕后执行对话
        $('.shitang12').on('webkitTransitionEnd', function () {
            setTimeout(function () {
                $('.itemTalk121').show();
            }, 1000);
            setTimeout(function () {
                $('.shitang12').removeClass('enter12');
                $('.itemTalk121').hide();
                $('.item12').hide();
                $('.backBtn').show();
            }, 2000);
        });

        // 恢复其他场景的点击事件
        canClick();
        //初始化小人在地图中的位置
        personPosition();

    }, 3000)
})

//===============       教室        ===========
$('.fating').on('touchend', function () {
    $('.item8').html(
        '<iframe src="../VR/3d/dmt/dmt.html" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>'
    );
    $(".person").snabbt({
        position: [0, -320, 0],
        duration: 1500
    }).snabbt({
        position: [100, -320, 0],
        duration: 1000
    })
    setTimeout(function () {
        //主页面音乐暂停
        //mainMusic.get(0).pause();
        $('.item8').show()
            .siblings()
            .hide();
        // 黑色遮罩层出现,动画层面
        setTimeout(function () {
            $('.item13').show();
            $('.backBtn').hide();
        }, 500);

        //招办人物进入画面
        setTimeout(function () {
            $('.shitang13').addClass('enter13');
        }, 1000);
        //招办人物运动完毕后执行对话
        $('.shitang13').on('webkitTransitionEnd', function () {
            setTimeout(function () {
                $('.itemTalk131').show();
            }, 1000);
            setTimeout(function () {
                $('.shitang13').removeClass('enter13');
                $('.itemTalk131').hide();
                $('.item13').hide();
                $(".backBtn").show();
            }, 2500);
        });
        // 恢复其他场景的点击事件
        canClick();
        //初始化小人在地图中的位置
        personPosition();

    }, 2800);

})

//==================     招生办     =========================
$('.zhaoban').on('touchend', function () {
    $('.item9').html(
        ' <img src="img/zsbbg.png">'
    );
    $(".person").snabbt({
        position: [0, -100, 0],
        duration: 1500
    }).snabbt({
        position: [100, -100, 0],
        duration: 1000
    })

    setTimeout(function () {
        //主页面音乐暂停
        //mainMusic.get(0).pause();
        $('.item9').show()
            .siblings()
            .hide();
        // 黑色遮罩层出现
        setTimeout(function () {
            $('.item11').show();
            $('.backBtn').hide();
        }, 500);
        ////小人运动进入画面
        //setTimeout(function () {
        //    $('.canvas-img3').addClass('enter11');
        //}, 1000);
        //招办人物进入画面
        setTimeout(function () {
            $('.shitangMan').addClass('enterMan');
        }, 1000);
        //招办人物运动完毕后执行对话
        $('.shitangMan').on('webkitTransitionEnd', function () {
            setTimeout(function () {
                $('.itemTalk111').show();
            }, 1000);
            setTimeout(function () {
                $('.itemTalk111').hide();
                $('.item11').hide();
                $(".backBtn").show();
            }, 2500);
        });
        // 恢复其他场景的点击事件
        canClick();
        //初始化小人在地图中的位置
        personPosition();

    }, 2800);

})