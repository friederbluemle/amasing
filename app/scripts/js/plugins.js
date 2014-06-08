// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function($){
    $.fn.extend({
    customStyle : function(options) {
        //if(!$.browser.msie || ($.browser.msie&&$.browser.version>6)) {
            return this.each(function() {
                var currentSelected = $(this).find(':selected');
                $(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">'+currentSelected.text()+'</span></span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
                var selectBoxSpan = $(this).next();
                var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) -parseInt(selectBoxSpan.css('padding-right'));            
                var selectBoxSpanInner = selectBoxSpan.find(':first-child');
                selectBoxSpan.css({display:'inline-block'});
                selectBoxSpanInner.css({width:selectBoxWidth, display:'inline-block'});
                var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
                $(this).height(selectBoxHeight).change(function() {
                    selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
                });
         });
        //}
    }
    });
})(jQuery);
