$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".video-container").fitVids();
	
    $('.top_video_slider').bxSlider({  slideMargin: 10, useCSS: false, pager: false, auto: true, autoHover:true, }); 
    $('.footer_sponsers').bxSlider({  slideMargin: 10, useCSS: false, pager: false  }); 
    $('.cat_slider_1').bxSlider({  slideMargin: 10, useCSS: false, pager: true  });
  
    $('#category_slider .nav-tabs a').click(function(){
	var cid = $(this).attr("href");
	$(cid).addClass('clicked_active');
	});

	
/*	
   By default menu open upon click, to open menu on hover remove comment this code
      $('#nav .nav li,#nav .nav li').on({
		mouseenter: function() {
			$(this).children('ul').stop(true, true).slideDown(400);
			$(this).addClass('hover_menu');
		},
		mouseleave: function() {
			$(this).children('ul').slideUp(100);
			$(this).removeClass('hover_menu');
		}
	});
	
	$('#nav .nav li,#nav .nav li').on({
		mouseenter: function() {
			$(this).children('div').stop(true, true).slideDown(400);
			$(this).addClass('hover_menu');
		},
		mouseleave: function() {
			$(this).children('div').slideUp(100);
			$(this).removeClass('hover_menu');
		}
	});
	
	*/
	
	$(".dropdown-toggle").click(function(e) {
		e.preventDefault();
	if($(this).next("div").is(":visible")){
	
	$(this).next("div").fadeOut("fast");
	} else {
	$(".dropdown-menu").fadeOut("fast");
	$(this).next("div").slideToggle("slow");
	}
 	});
	
	$(".dropdown-toggle.list").click(function(e) {
		e.preventDefault();
	if($(this).next("ul").is(":visible")){
	
	$(this).next("ul").fadeOut("fast");
	} else {
	$(".dropdown-menu").fadeOut("fast");
	$(this).next("ul").slideToggle("slow");
	}
 	});

	// DROP DOWN MENU TABS ====================================== //
	$('body').on('click', 'ul.tabs > li > a', function(e) {
	//Get Location of tab's content
	var contentLocation = $(this).attr('href');
	//Let go if not a hashed one
	if(contentLocation.charAt(0)=="#") {
	e.preventDefault();
	//Make Tab Active
	$(this).parent().siblings().children('a').removeClass('active');
	$(this).addClass('active');
	//Show Tab Content & add active class
	$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
	}
	});

    $(".btncont").click(function(){
		$(this).children('ul').addClass('hidden');
	}, function(){
		$(this).children('ul').addClass('show');
	});
	
    $('.select_css').selectbox();
  
	 /* Bootstrap Tooltip */
	$("a[data-rel='tooltip']").tooltip();
	 /* Bootstrap Tooltip */
	 
	$("a[data-gal^='prettyPhoto']").prettyPhoto();
});
/* End of Counter */