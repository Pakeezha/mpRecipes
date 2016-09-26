/**
 * Created by maleehafarukh on 9/16/16.
 */

jQuery(function($) {
    var $t = $('.rt-tabs'),
        push = false;
    if($t.length > 0) {
        $('.box', $t).hide();
        $('ul li a', $t).click(function() {
            loadTab($(this));
            return false;
        });

        $(window).on("popstate", function() {
            push = true;
            hashCheck($t);
        });

        function hashCheck($t) {
            var h = (window.location.href.indexOf("#") > -1) ? window.location.href.split("#").pop() : false;
            if(h) {
                $('ul li a[href="#'+h+'"]', $t).click();
            } else {
                $('ul li a:first', $t).click();
            }
        }

        function loadTab(_self) {
            $('ul li', $t).removeClass('active');
            $('.box', $t).hide();

            var hash = _self.prop('hash');

            if(!push)
                history.pushState({}, '', hash);

            var hash = hash.substr(1);
            $('.box[data-id="'+hash+'"]').show();
            _self.parent('li').addClass('active');

            push = false;
        }
    }
});
