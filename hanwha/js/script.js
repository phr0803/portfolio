$(document).ready(function () {

    var ww = $(window).width();
    var wh = $(window).height();

    $('#top_but').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500);

    });

    if (navigator.userAgent.match(/Trident\/7\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();

            var wheelDelta = event.wheelDelta;

            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });

        $('body').keydown(function (e) {
            e.preventDefault(); // prevent the default action (scroll / move caret)
            var currentScrollPosition = window.pageYOffset;

            switch (e.which) {

                case 38: // up
                    window.scrollTo(0, currentScrollPosition - 120);
                    break;

                case 40: // down
                    window.scrollTo(0, currentScrollPosition + 120);
                    break;

                default:
                    return; // exit this handler for other keys
            }
        });
    }

    $(window).resize(function () {
        ww = $(window).width();
        wh = $(window).height();
    });

}); //end
