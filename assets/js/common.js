$(document).ready(function () {

    var $gnb = $('#GNB');
    $('#HAMBURGER').on('click', function () {
        if ($(this).hasClass('activate')) {
            $gnb.stop().animate({
                right : '-50vw',
                opacity : 0
            }, 500, 'easeInOutQuint', function () {
                $(this).css({
                    visibility: 'hidden'
                })
            });
            $gnb.prev().stop().animate({opacity : 0}, 1000, function () {
                $(this).css({visibility: 'hidden'})
            });

            $(this).removeClass('activate').find('.sr-only').text('메뉴 열기');

        } else {
            $(this).addClass('activate').find('sr-only').text('메뉴 닫기');

            var $first = $gnb.find('[data-link="first"]');
            var $last = $gnb.find('[data-link="last"]');

            $gnb.css({
                visibility: 'visible'
            }).stop().animate({
                right : 0,
                opacity : 1
            }, 500, 'easeInOutQuart', function () {
                $first.focus();
            });
            $gnb.prev().css({visibility: 'visible'}).stop().animate({opacity : 0.8}, 1000);

            $first.on('keydown', function (e) {
                console.log(e.keyCode);
                if (e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $last.focus();
                }
            });

            $last.on('keydown', function (e) {
                if (!e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $('#HAMBURGER').focus();
                }
            });
        };
    });
});