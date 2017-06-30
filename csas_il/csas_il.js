(function ($) {
    Drupal.behaviors.csasIl = {
        attach: function (context, settings) {
            function csasIl() {
                var botWinY = $(window).scrollTop() + $(window).height();
                $('img.csas-il[data-src]:not(.acsas-img-not-loa):visible', context).each(function () {
                    if ($(this).offset().top <= botWinY) {
                        var thisSrc = $(this).attr('data-src');
                        $(this).removeAttr('data-src');
                        $(this).bind('load', function () {
                            $(this).addClass('csas-il-ldd');
                        });
                        $(this).attr('src', thisSrc);
                    }
                });
                //$('body').removeClass('csas-il-process');
            }

            function csasIlEv(tCon) {

                $('img.acsas-img-not-loa.csas-il[data-src]:visible', tCon).each(function () {

                    var thisSrc = $(this).attr('data-src');
                    $(this).removeAttr('data-src');
                    //$(this).bind('load', function () {
                    $(this).addClass('csas-il-ldd');
                    //});
                    $(this).attr('src', thisSrc);

                });

                //$('body').removeClass('csas-il-process');
            }


            function csasIlEvVis(tCon) {

                $('img.csas-il[data-src]', tCon).each(function () {

                    var thisSrc = $(this).attr('data-src');
                    $(this).removeAttr('data-src');
                    //$(this).bind('load', function () {
                    $(this).addClass('csas-il-ldd');
                    //});
                    $(this).attr('src', thisSrc);

                });

                //$('body').removeClass('csas-il-process');
            }

            $(window).load(function () {
                csasIl();
                $(document).scroll(function () {
                    csasIl();
                });
            });

            $(window).resize(function () {
                if ($('img[data-src]', document).length) {
                    csasIl();
                }
            });

            csasIl();

            $(document).on('documentChange DOMNodeInserted', function () {

                if ($('img[data-src]', document).length) {

                    csasIl();
                }
            });

            $(document).on('acsasDivDisplay', function (e) {
                csasIlEv($(e.target));
            });

            $(document).on('acsasVisibled', function (e) {
                csasIlEvVis($(e.target));
            });
        }
    };


})(jQuery);