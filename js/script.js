$(document).ready(function () {
    $("#previous-post-errand").click(function () {
        $(".post-location").addClass('d-none');
        $(".post-errand-display").removeClass('d-none');
        $(".post-errand-details").addClass('d-none');
        $(".preview-pane").addClass('d-none');
        $("#all-errands").removeClass('active');
        $("#post-errand").addClass('active');

    })
    $("#all-errands").click(function () {
        $(".errands-display").removeClass('d-none');
        $(".post-errand-display").addClass('d-none');
        $(".post-location").addClass('d-none');
        $(".preview-pane").addClass('d-none');
        $(".post-errand-details").addClass('d-none');
        $("#all-errands").addClass('active');
        $("#post-errand").removeClass('active');
    });
    $(".card-item, #previous-to-location").click(function (e) {
        e.preventDefault();
        $(".post-location").removeClass('d-none');
        $(".errands-display").addClass('d-none');
        $(".preview-pane").addClass('d-none');
        $(".post-errand-display").addClass('d-none');
        $(".post-errand-details").addClass('d-none')

    });
    $('#next-to-post-errand-details').click(function () {
        $(".post-errand-details").removeClass('d-none')
        $(".post-location").addClass('d-none');
        $(".errands-display").addClass('d-none');
        $(".post-errand-display").addClass('d-none');
        $(".preview-pane").addClass('d-none');
    })
    $('#preview-btn').click(function () {
        $(".preview-pane").removeClass('d-none');
        $(".post-location").addClass('d-none');
        $(".errands-display").addClass('d-none');
        $(".post-errand-display").addClass('d-none');
        $(".post-errand-details").addClass('d-none');
    })
    $(".email-signup").hide();
    $("#register-box-link").click(function () {
        $(".email-login").fadeOut(100);
        $(".email-signup").delay(100).fadeIn(100);
        $("#login-box-link").removeClass("active");
        $("#register-box-link").addClass("active");
    });
    $("#login-box-link").click(function () {
        $(".email-login").delay(100).fadeIn(100);;
        $(".email-signup").fadeOut(100);
        $("#login-box-link").addClass("active");
        $("#register-box-link").removeClass("active");
    });
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            define(['exports'], factory);
        } else if (typeof exports !== 'undefined') {
            factory(exports);
        } else {
            factory((root.dragscroll = {}));
        }
    }(this, function (exports) {
        var _window = window;
        var _document = document;
        var mousemove = 'mousemove';
        var mouseup = 'mouseup';
        var mousedown = 'mousedown';
        var EventListener = 'EventListener';
        var addEventListener = 'add' + EventListener;
        var removeEventListener = 'remove' + EventListener;
        var newScrollX, newScrollY;

        var dragged = [];
        var reset = function (i, el) {
            for (i = 0; i < dragged.length;) {
                el = dragged[i++];
                el = el.container || el;
                el[removeEventListener](mousedown, el.md, 0);
                _window[removeEventListener](mouseup, el.mu, 0);
                _window[removeEventListener](mousemove, el.mm, 0);
            }

            // cloning into array since HTMLCollection is updated dynamically
            dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
            for (i = 0; i < dragged.length;) {
                (function (el, lastClientX, lastClientY, pushed, scroller, cont) {
                    (cont = el.container || el)[addEventListener](
                        mousedown,
                        cont.md = function (e) {
                            if (!el.hasAttribute('nochilddrag') ||
                                _document.elementFromPoint(
                                    e.pageX, e.pageY
                                ) == cont
                            ) {
                                pushed = 1;
                                lastClientX = e.clientX;
                                lastClientY = e.clientY;

                                e.preventDefault();
                            }
                        }, 0
                    );

                    _window[addEventListener](
                        mouseup, cont.mu = function () { pushed = 0; }, 0
                    );

                    _window[addEventListener](
                        mousemove,
                        cont.mm = function (e) {
                            if (pushed) {
                                (scroller = el.scroller || el).scrollLeft -=
                                    newScrollX = (- lastClientX + (lastClientX = e.clientX));
                                scroller.scrollTop -=
                                    newScrollY = (- lastClientY + (lastClientY = e.clientY));
                                if (el == _document.body) {
                                    (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                    scroller.scrollTop -= newScrollY;
                                }
                            }
                        }, 0
                    );
                })(dragged[i++]);
            }
        }


        if (_document.readyState == 'complete') {
            reset();
        } else {
            _window[addEventListener]('load', reset, 0);
        }

        exports.reset = reset;
    }));


})
