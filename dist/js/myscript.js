function calculateScroll(){var a=[],r=[],i=$(window).scrollTop();$(".main_menu").find(".scroll_btn a").each(function(){a.push($($(this).attr("href")).offset().top),r.push($($(this).attr("href")).offset().top+$($(this).attr("href")).height())}),$.each(a,function(e){i>a[e]-200&&i<r[e]-500&&$(".main_menu li").removeClass("active").eq(e).addClass("active")})}function scrolled_menu(){jQuery(window).scrollTop()?jQuery("header").addClass("menu_fixed"):jQuery("header").removeClass("menu_fixed")}function homeHeight(){var e=jQuery(window).height();jQuery(".top_slider, .top_slider .slides li, .top_slider .slides li .container").css("height",e)}window.jQuery=window.$=jQuery,jQuery(document).ready(function(a){a(document).on("click",".gallery__img",function(e){console.dir(this),a(this).attr("src","https://uploads.scratch.mit.edu/users/avatars/1693/5343.png"),a(this).attr("src","images/gallery/4.jpg")})}),jQuery(document).ready(function(){$(window).width()<768&&(jQuery(".main_menu").prepend('<a href="javascript:void(0)" class="menu_toggler"><i class="fa fa-bars"></i></a>'),jQuery("header .main_menu ul").hide(),jQuery(".menu_toggler, .main_menu ul li a").click(function(){jQuery("header .main_menu ul").slideToggle(300)})),$(window).scroll(function(e){calculateScroll()}),$(".main_menu ul li.scroll_btn a, .mobile_menu ul li a").click(function(){return $("html, body").animate({scrollTop:$(this.hash).offset().top-64},1e3),!1});jQuery("header").size()&&setInterval(scrolled_menu,300)}),jQuery(window).load(function(){$(".flexslider.top_slider").flexslider({animation:"slide",slideshowSpeed:1e4,animationSpeed:1500,controlNav:!1,directionNav:!0,pauseOnAction:!1,pauseOnHover:!1,prevText:"",nextText:""}),$(".flexslider .flex-direction-nav a.flex-prev").prepend('<i class="fa fa-angle-left"></i>'),$(".flexslider .flex-direction-nav a.flex-next").prepend('<i class="fa fa-angle-right"></i>')}),jQuery(window).resize(function(){homeHeight()}),jQuery(document).ready(function(){homeHeight()}),jQuery(window).load(function(){1025<jQuery(window).width()&&(jQuery("#team").parallax("0",-.5),jQuery("#contacts").parallax("0",-.5))}),jQuery(document).ready(function(){$("#ajax-contact-form").submit(function(){var e=$(this).serialize();return $.ajax({type:"POST",url:"contact_form/contact_process.php",data:e,success:function(e){"OK"==e?(result='<div class="notification_ok">Your message has been sent. Thank you!</div>',$("#fields").hide()):result=e,$("#note").html(result)}}),!1})}),$(document).ready(function(){$(".excurs").magnificPopup({items:[{src:"images/gallery/excurs_1.jpg"},{src:"images/gallery/excurs_2.jpg"},{src:"images/gallery/excurs_3.jpg"},{src:"images/gallery/excurs_4.jpg"},{src:"images/gallery/excurs_5.jpg"},{src:"images/gallery/excurs_6.jpg"},{src:"images/gallery/excurs_7.jpg"},{src:"images/gallery/excurs_8.jpg"},{src:"images/gallery/excurs_9.jpg"},{src:"images/gallery/excurs_10.jpg"},{src:"images/gallery/excurs_11.jpg"}],gallery:{enabled:!0},type:"image"}),$(".food-rest").magnificPopup({items:[{src:"images/gallery/food_rest_1.jpg"},{src:"images/gallery/food_rest_2.jpg"},{src:"images/gallery/food_rest_3.jpg"},{src:"images/gallery/food_rest_4.jpg"},{src:"images/gallery/food_rest_5.jpg"},{src:"images/gallery/food_rest_6.jpg"},{src:"images/gallery/food_rest_7.jpg"},{src:"images/gallery/food_rest_8.jpg"},{src:"images/gallery/food_rest_9.jpg"},{src:"images/gallery/food_rest_10.jpg"}],gallery:{enabled:!0},type:"image"}),$(".living").magnificPopup({items:[{src:"images/gallery/living_1.jpg"},{src:"images/gallery/living_2.jpg"},{src:"images/gallery/living_3.jpg"},{src:"images/gallery/living_4.jpg"},{src:"images/gallery/living_5.jpg"},{src:"images/gallery/living_6.jpg"},{src:"images/gallery/living_7.jpg"}],gallery:{enabled:!0},type:"image"}),$(".health").magnificPopup({items:[{src:"images/gallery/health_1.jpg"},{src:"images/gallery/health_2.jpg"},{src:"images/gallery/health_3.jpg"},{src:"images/gallery/health_4.jpg"},{src:"images/gallery/health_5.jpg"}],gallery:{enabled:!0},type:"image"})}),jQuery(document).ready(function(){$("iframe").each(function(){var e=$(this).attr("src"),a="wmode=transparent";if(-1!=e.indexOf("?")){var r=e.split("?"),i=r[1],l=r[0];$(this).attr("src",l+"?"+a+"&"+i)}else $(this).attr("src",e+"?"+a)})}),function(n){n.fn.countTo=function(l){l=n.extend({},n.fn.countTo.defaults,l||{});var t=Math.ceil(l.speed/l.refreshInterval),s=(l.to-l.from)/t;return n(this).each(function(){var e=this,a=0,r=l.from,i=setInterval(function(){r+=s,a++,n(e).html(r.toFixed(l.decimals)),"function"==typeof l.onUpdate&&l.onUpdate.call(e,r);t<=a&&(clearInterval(i),r=l.to,"function"==typeof l.onComplete&&l.onComplete.call(e,r))},l.refreshInterval)})},n.fn.countTo.defaults={from:0,to:100,speed:1e3,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null}}(jQuery),function(i){i.fn.appear=function(r,e){var n=i.extend({one:!0},e);return this.each(function(){var t=i(this);if(t.appeared=!1,r){var s=i(window),a=function(){if(t.is(":visible")){var e=s.scrollLeft(),a=s.scrollTop(),r=t.offset(),i=r.left,l=r.top;l+t.height()>=a&&l<=a+s.height()&&i+t.width()>=e&&i<=e+s.width()?t.appeared||t.trigger("appear",n.data):t.appeared=!1}else t.appeared=!1},e=function(){if(t.appeared=!0,n.one){s.unbind("scroll",a);var e=i.inArray(a,i.fn.appear.checks);0<=e&&i.fn.appear.checks.splice(e,1)}r.apply(this,arguments)};n.one?t.one("appear",n.data,e):t.bind("appear",n.data,e),s.scroll(a),i.fn.appear.checks.push(a),a()}else t.trigger("appear",n.data)})},i.extend(i.fn.appear,{checks:[],timeout:null,checkAll:function(){var e=i.fn.appear.checks.length;if(0<e)for(;e--;)i.fn.appear.checks[e]()},run:function(){i.fn.appear.timeout&&clearTimeout(i.fn.appear.timeout),i.fn.appear.timeout=setTimeout(i.fn.appear.checkAll,20)}}),i.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(e,a){var r=i.fn[a];r&&(i.fn[a]=function(){var e=r.apply(this,arguments);return i.fn.appear.run(),e})})}(jQuery);