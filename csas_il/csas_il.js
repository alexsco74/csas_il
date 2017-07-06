(function ($) {
    Drupal.behaviors.csasIl = {
        attach: function (context, settings) {
            function csasIl() {
                var useVis = Drupal.settings.csas_il.useVis;
                var botWinY = $(window).scrollTop() + $(window).height();
                var imgSel = 'img.csas-il[data-src]:not(.acsas-img-not-loa)';
                if (useVis) {
                    imgSel = 'img.csas-il[data-src]:not(.acsas-img-not-loa):visible';
                }
                $(imgSel).each(function () {
                    if ($(this).offset().top <= botWinY) {
                        var thisSrc = $(this).attr('data-src');
                        $(this).removeAttr('data-src');
                        $(this).bind('load', function () {
                            $(this).addClass('csas-il-ldd');
                        });
                        $(this).attr('src', thisSrc);
                    }
                });
            }

            function csasIlEv(tCon) {
                $('img.acsas-img-not-loa.csas-il[data-src]:visible', tCon).each(function () {
                    var thisSrc = $(this).attr('data-src');
                    $(this).removeAttr('data-src');
                    $(this).addClass('csas-il-ldd');
                    $(this).attr('src', thisSrc);

                });
            }

            function csasIlEvVis(tCon) {
                $('img.csas-il[data-src]', tCon).each(function () {
                    var thisSrc = $(this).attr('data-src');
                    $(this).removeAttr('data-src');
                    $(this).addClass('csas-il-ldd');
                    $(this).attr('src', thisSrc);
                });
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
            // csasIl();
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