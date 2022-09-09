/*
 * @Author: 孙大大
 * @Date: 2022-01-30 01:51:10
 * @LastEditTime: 2022-01-30 16:41:00
 * @FilePath: \bilibili\js\index.js
 */
$(function () {
    var flag = true
    toggleTool()
    $(window).on('scroll', function () {
        toggleTool()
    })

    $('.floor').on('click', 'li', function () {
        flag = false
        $(this).addClass('current').siblings().removeClass('current')

        var top1 = $('.newPerson').offset().top
        var top2 = $('.tuijian').offset().top
        var top3 = $('.hot').offset().top
        var top4 = $('.city').offset().top
        var top4 = $('.magic').offset().top

        var top = null

        if ($(this).index() === 0) {
            top = top1
        } else if ($(this).index() === 1) {
            top = top2
        } else if ($(this).index() === 2) {
            top = top3
        } else if ($(this).index() === 3) {
            top = top4
        }

        console.log(top)

        $('body,html')
            .stop()
            .animate(
                {
                    scrollTop: top,
                },
                function () {
                    flag = true
                }
            )
    })

    function toggleTool() {
        if (flag) {
            // $(window).on('scroll', function () {
            if ($(window).scrollTop() < 450) {
                $('.floor').css({
                    position: 'absolute',
                    top: 520 + 'px',
                    right: 45 + 'px',
                })
                $('.ul li').removeClass('current')
            } else if ($(window).scrollTop() >= 450 && $(window).scrollTop() < 616) {
                $('.floor').css({
                    position: 'fixed',
                    top: 65 + 'px',
                    right: 45 + 'px',
                })
                $('#aaa').addClass('current').siblings().removeClass('current')
            } else if ($(window).scrollTop() >= 616 && $(window).scrollTop() < 1385) {
                $('#bbb').addClass('current').siblings().removeClass('current')
            } else if ($(window).scrollTop() >= 1385 && $(window).scrollTop() < 1955) {
                $('#ccc').addClass('current').siblings().removeClass('current')
            } else if ($(window).scrollTop() >= 1955) {
                $('#ddd').addClass('current').siblings().removeClass('current')
            }
            // })
        }
    }
})
