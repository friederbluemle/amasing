$(function() {
    $('.change-city select').customStyle();
    $(window).resize(function(){
       var winht = $(window).height()-70;
       $('.dropMenu').css('height',winht); 
    }).resize();

    

    $('.nav .menu').click(function(){
        $('.nav .dropMenu').slideToggle();
        $('.white-bg').toggle();
        $('body').toggleClass('no-overflow');
    });

    

    $('.dropMenu > ul > li > a').click(function(){  
        $(this).next('ul').slideToggle();
        $(this).parent('li').toggleClass('selected');
    });

    

    $('.header .cart').click(function(){
        $('.cart-pop').toggle();
        $('.cartbg').toggle();
    });
    
    $('.cartbg').click(function(){
        $(this).fadeOut();
        $('.cart-pop').fadeOut();
    });

    

  $("#zoom_03").elevateZoom({gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'}); 
  var vals = document.querySelector('.js-step1'); 
  var initVals = new Powerange(vals, { min: 0, max: 200, start: 0 });
  vals.onchange = function() {
    document.getElementById('js-display-decimal1').innerHTML = vals.value;
    };
    
  var valss = document.querySelector('.js-step2'); 
  var initValss = new Powerange(valss, { min: 16, max: 256, start: 128 }); 
  valss.onchange = function() {
    document.getElementById('js-display-decimal2').innerHTML = valss.value;
    };
});


/*Rate*/
$(function() {
  $.fn.raty.defaults.path = 'js/lib/img';
  $('#default-demo').raty();
});


/*Tab*/
$(document).ready(function() {
	//When page loads...
	$(".tabC").hide(); //Hide all content
	$("ul.sizeTab li:first").addClass("active").show(); //Activate first tab
	$(".tabC:first").show(); //Show first tab content

	//On Click Event
	$("ul.sizeTab li").click(function() {
	$("ul.sizeTab li").removeClass("active"); //Remove any "active" class
	$(this).addClass("active"); //Add "active" class to selected tab
	$(".tabC").hide(); //Hide all tab content

	var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
	$(activeTab).fadeIn(); //Fade in the active ID content
	return false;
});
});





