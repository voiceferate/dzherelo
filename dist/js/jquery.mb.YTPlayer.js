function onYouTubePlayerAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}"object"!=typeof ytp&&(ytp={}),function(jQuery,ytp){ytp.isDevice="ontouchstart"in window;var nAgt=navigator.userAgent;if(!jQuery.browser){var nameOffset,verOffset,ix;if(jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10),-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile,jQuery.fn.CSSAnimate=function(c,T,P,f,m){function Y(e,r){return"string"!=typeof e||e.match(/^[\-0-9\.]+$/)?""+e+r:e}return jQuery.support.transition=void 0!==(e=(document.body||document.documentElement).style).transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition,this.each(function(){var e=this,r=jQuery(this);e.id=e.id||"CSSA_"+(new Date).getTime();var t=t||{type:"noEvent"};if(e.CSSAIsRunning&&e.eventType==t.type)e.CSSqueue=function(){r.CSSAnimate(c,T,P,f,m)};else if(e.CSSqueue=null,e.eventType=t.type,0!==r.length&&c){if(e.CSSAIsRunning=!0,"function"==typeof T&&(m=T,T=jQuery.fx.speeds._default),"function"==typeof P&&(m=P,P=0),"function"==typeof f&&(m=f,f="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof T)for(var a in jQuery.fx.speeds){if(T==a){T=jQuery.fx.speeds[a];break}T=jQuery.fx.speeds._default}if(T||(T=jQuery.fx.speeds._default),!jQuery.support.transition){for(var o in c)"transform"===o&&delete c[o],"filter"===o&&delete c[o],"transform-origin"===o&&delete c[o],"auto"===c[o]&&delete c[o];return m&&"string"!=typeof m||(m="linear"),void r.animate(c,T,m)}var n={default:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};n[f]&&(f=n[f]);var i="",l="transitionEnd";jQuery.browser.webkit?(i="-webkit-",l="webkitTransitionEnd"):jQuery.browser.mozilla?(i="-moz-",l="transitionend"):jQuery.browser.opera?(i="-o-",l="otransitionend"):jQuery.browser.msie&&(i="-ms-",l="msTransitionEnd");var s=[];for(var o in c){var y=o;"transform"===y&&(c[y=i+"transform"]=c[o],delete c[o]),"filter"===y&&(c[y=i+"filter"]=c[o],delete c[o]),("transform-origin"===y||"origin"===y)&&(c[y=i+"transform-origin"]=c[o],delete c[o]),"x"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" translateX("+Y(c[o],"px")+")",delete c[o]),"y"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" translateY("+Y(c[o],"px")+")",delete c[o]),"z"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" translateZ("+Y(c[o],"px")+")",delete c[o]),"rotate"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" rotate("+Y(c[o],"deg")+")",delete c[o]),"rotateX"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" rotateX("+Y(c[o],"deg")+")",delete c[o]),"rotateY"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" rotateY("+Y(c[o],"deg")+")",delete c[o]),"rotateZ"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" rotateZ("+Y(c[o],"deg")+")",delete c[o]),"scale"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" scale("+Y(c[o],"")+")",delete c[o]),"scaleX"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" scaleX("+Y(c[o],"")+")",delete c[o]),"scaleY"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" scaleY("+Y(c[o],"")+")",delete c[o]),"scaleZ"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" scaleZ("+Y(c[o],"")+")",delete c[o]),"skew"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" skew("+Y(c[o],"deg")+")",delete c[o]),"skewX"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" skewX("+Y(c[o],"deg")+")",delete c[o]),"skewY"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" skewY("+Y(c[o],"deg")+")",delete c[o]),"perspective"===y&&(c[y=i+"transform"]=c[y]||"",c[y]+=" perspective("+Y(c[o],"px")+")",delete c[o]),s.indexOf(y)<0&&s.push(y.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()}))}var u=s.join(","),p=function(){r.off(l+"."+e.id),clearTimeout(e.timeout),r.css(i+"transition",""),"function"==typeof m&&m(r),e.called=!0,e.CSSAIsRunning=!1,"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null)},d={};jQuery.extend(d,c),d[i+"transition-property"]=u,d[i+"transition-duration"]=T+"ms",d[i+"transition-delay"]=P+"ms",d[i+"transition-style"]="preserve-3d",d[i+"transition-timing-function"]=f,setTimeout(function(){r.one(l+"."+e.id,p),r.css(d)},1),e.timeout=setTimeout(function(){return r.called||!m?(r.called=!1,void(e.CSSAIsRunning=!1)):(r.css(i+"transition",""),m(r),e.CSSAIsRunning=!1,void("function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null)))},T+P+100)}});var e},jQuery.fn.css3=function(e){return this.each(function(){jQuery(this).CSSAnimate(e,1,0,null)})},function(c){c.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(e,r){this.defaults.type=e,this.defaults.name=r},get:function(b,f){var d=c.extend({},this.defaults,f);d.single.length||(d.single="metadata");var a=c.data(b,d.single);if(a)return a;if(a="{}","class"==d.type){var e=d.cre.exec(b.className);e&&(a=e[1])}else if("elem"==d.type){if(!b.getElementsByTagName)return;e=b.getElementsByTagName(d.name),e.length&&(a=c.trim(e[0].innerHTML))}else null!=b.getAttribute&&(e=b.getAttribute(d.name))&&(a=e);return a.indexOf("{")<0&&(a="{"+a+"}"),a=eval("("+a+")"),c.data(b,d.single,a),a}}}),c.fn.metadata=function(e){return c.metadata.get(this[0],e)}}(jQuery);var getYTPVideoID=function(e){return"http://youtu.be/"==e.substr(0,16)?e.replace("http://youtu.be/",""):-1<e.indexOf("http")?e.match(/[\\?&]v=([^&#]*)/)[1]:e};jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.6.7",author:"Matteo Bicocchi",defaults:{containment:"body",ratio:"16/9",showYTLogo:!1,videoURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:100,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnClick:!1,realfullscreen:!0,gaTrack:!0,onReady:function(e){},onStateChange:function(e){},onPlaybackQualityChange:function(e){},onError:function(e){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},rasterImg:"images/raster.png",rasterImgRetina:"images/raster@2x.png",locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={};var property={};$YTPlayer.addClass("mb_YTVPlayer"),jQuery.metadata&&(jQuery.metadata.setType("class"),property=$YTPlayer.metadata()),jQuery.isEmptyObject(property)&&(property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property")),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property);var canGoFullscreen=!(jQuery.browser.msie||jQuery.browser.opera||self.location.href!=top.location.href);canGoFullscreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","id_"+(new Date).getTime()),YTPlayer.opt.id=YTPlayer.id,YTPlayer.isAlone=!1,YTPlayer.opt.isBgndMovie&&(YTPlayer.opt.containment="body"),YTPlayer.opt.isBgndMovie&&null!=YTPlayer.opt.isBgndMovie.mute&&(YTPlayer.opt.mute=YTPlayer.opt.isBgndMovie.mute),YTPlayer.opt.videoURL||(YTPlayer.opt.videoURL=$YTPlayer.attr("href"));var playerID="mbYTP_"+YTPlayer.id,videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL):!!$YTPlayer.attr("href")&&getYTPVideoID($YTPlayer.attr("href"));YTPlayer.videoID=videoID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations},canPlayHTML5=!1,v=document.createElement("video");v.canPlayType&&(canPlayHTML5=!0),canPlayHTML5&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.opt.containment="self"==YTPlayer.opt.containment?jQuery(this):jQuery(YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),YTPlayer.opt.containment.is(jQuery(this))?YTPlayer.isPlayer=!0:$YTPlayer.hide(),ytp.isDevice&&YTPlayer.isBackground)$YTPlayer.hide();else{if(YTPlayer.opt.addRaster){var retina=window.retina||1<window.devicePixelRatio;overlay.addClass(retina?"raster retina":"raster")}else overlay.removeClass("raster retina");var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden",opacity:this.opt.opacity}),wrapper.append(playerBox),!YTPlayer.isBackground||!ytp.backgroundIsInited){if(YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({position:"relative",minWidth:"100%",minHeight:"100%",zIndex:1,boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),ytp.isDevice||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){$YTPlayer.find(".mb_YTVPBar").addClass("visible")}).on("mouseleave",function(){$YTPlayer.find(".mb_YTVPBar").removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script><\/script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/player_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head title").after(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&YTPlayer.opt.stopMovieOnClick&&jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer",function(e){var r=jQuery(e.target);(r.is("a")||r.parents().is("a"))&&$YTPlayer.pauseYTP()}),YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID,YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){YTPlayer.isInit||(YTPlayer.isInit=!0,!ytp.isDevice||YTPlayer.isBackground?new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(e){if(YTPlayer.player=e.target,!YTPlayer.isReady){YTPlayer.isReady=!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),YTPlayer.opt.showControls&&jQuery(YTPlayer).buildYTPControls();var r=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;YTPlayer.player.stopVideo(),jQuery.mbYTPlayer.checkForState(YTPlayer),YTPlayer.checkForStartAt=setInterval(function(){YTPlayer.player.seekTo(r,!0),YTPlayer.player.getCurrentTime()>=r&&0<YTPlayer.player.getDuration()&&(clearInterval(YTPlayer.checkForStartAt),"function"==typeof YTPlayer.opt.onReady&&YTPlayer.opt.onReady($YTPlayer),YTPlayer.opt.autoPlay?$YTPlayer.playYTP():$YTPlayer.pauseYTP(),setTimeout(function(){$YTPlayer.css("background-image","none"),YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},2e3)},1e3),jQuery.mbYTPlayer.checkForState(YTPlayer))},100)}},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();"function"==typeof YTPlayer.opt.onStateChange&&YTPlayer.opt.onStateChange($YTPlayer,state);var controls=jQuery("#controlBar_"+YTPlayer.id),data=YTPlayer.opt;if(0==state){if(YTPlayer.state==state)return;YTPlayer.state=state,YTPlayer.player.pauseVideo();var startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;data.loop?(YTPlayer.wrapper.css({opacity:0}),$YTPlayer.playYTP(),YTPlayer.player.seekTo(startAt,!0)):YTPlayer.isBackground||(YTPlayer.player.seekTo(startAt,!0),$YTPlayer.playYTP(),setTimeout(function(){$YTPlayer.pauseYTP()},10)),!data.loop&&YTPlayer.isBackground?YTPlayer.wrapper.CSSAnimate({opacity:0},2e3):data.loop&&(YTPlayer.wrapper.css({opacity:0}),YTPlayer.loop++),controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),jQuery(YTPlayer).trigger("YTPEnd")}if(3==state){if(YTPlayer.state==state)return;YTPlayer.state=state,YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),jQuery(YTPlayer).trigger("YTPBuffering")}if(-1==state){if(YTPlayer.state==state)return;YTPlayer.state=state,YTPlayer.wrapper.css({opacity:0}),jQuery(YTPlayer).trigger("YTPUnstarted")}if(1==state){if(YTPlayer.state==state)return;YTPlayer.state=state,YTPlayer.opt.mute&&($YTPlayer.muteYTPVolume(),YTPlayer.opt.mute=!1),YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause),jQuery(YTPlayer).trigger("YTPStart"),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.title||YTPlayer.videoID.toString()])}if(2==state){if(YTPlayer.state==state)return;YTPlayer.state=state,controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),jQuery(YTPlayer).trigger("YTPPause")}}},onPlaybackQualityChange:function(e){"function"==typeof YTPlayer.opt.onPlaybackQualityChange&&YTPlayer.opt.onPlaybackQualityChange($YTPlayer)},onError:function(e){2==e.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,e)}}}):new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",videoId:YTPlayer.videoID,events:{onReady:function(e){YTPlayer.player=e.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:1}),$YTPlayer.optimizeDisplay()},onStateChange:function(){}}}))}))})}}})},getDataFromFeed:function(e,n){n.videoID=e,jQuery.browser.msie?("auto"==n.opt.ratio?n.opt.ratio="16/9":n.opt.ratio,n.hasData||(n.hasData=!0,setTimeout(function(){jQuery(n).trigger("YTPChanged")},100))):(jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//gdata.youtube.com/feeds/api/videos/"+e+"?v=2&alt=jsonc",function(e,r,t){n.dataReceived=!0;var a=e.data;if(n.title=a.title,n.videoData=a,"auto"==n.opt.ratio&&(a.aspectRatio&&"widescreen"===a.aspectRatio?n.opt.ratio="16/9":n.opt.ratio="4/3"),!n.hasData&&(n.hasData=!0,n.isPlayer)){var o=n.videoData.thumbnail.hqDefault;n.opt.containment.css({background:"rgba(0,0,0,0.5) url("+o+") center center",backgroundSize:"cover"})}jQuery(n).trigger("YTPChanged")}),setTimeout(function(){n.dataReceived||n.hasData||(n.hasData=!0,jQuery(n).trigger("YTPChanged"))},1500))},getVideoID:function(){return this.get(0).videoID||!1},setVideoQuality:function(e){this.get(0).player.setPlaybackQuality(e)},YTPlaylist:function(e,r,t){var a=this.get(0);a.isPlayList=!0,r&&(e=jQuery.shuffle(e)),a.videoID||(a.videos=e,a.videoCounter=0,a.videoLength=e.length,jQuery(a).data("property",e[0]),jQuery(a).mb_YTPlayer()),"function"==typeof t&&jQuery(a).on("YTPChanged",function(){t(a)}),jQuery(a).on("YTPEnd",function(){jQuery(a).playNext()})},playNext:function(){var e=this.get(0);e.videoCounter++,e.videoCounter>=e.videoLength&&(e.videoCounter=0),jQuery(e.playerEl).css({opacity:0}),jQuery(e).changeMovie(e.videos[e.videoCounter])},playPrev:function(){var e=this.get(0);e.videoCounter--,e.videoCounter<0&&(e.videoCounter=e.videoLength-1),jQuery(e.playerEl).css({opacity:0}),jQuery(e).changeMovie(e.videos[e.videoCounter])},changeMovie:function(e){var r=this.get(0);r.opt.startAt=0,r.opt.stopAt=0,e&&jQuery.extend(r.opt,e),r.videoID=getYTPVideoID(r.opt.videoURL),jQuery(r).pauseYTP();var t=jQuery.browser.msie?1e3:0;if(jQuery(r.playerEl).CSSAnimate({opacity:0},t),setTimeout(function(){jQuery(r).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+r.videoID),1,r.opt.quality),jQuery(r).playYTP(),jQuery(r).one("YTPStart",function(){r.wrapper.CSSAnimate({opacity:r.isAlone?1:r.opt.opacity},1e3),jQuery(r.playerEl).CSSAnimate({opacity:1},t),r.opt.startAt&&r.player.seekTo(r.opt.startAt),jQuery.mbYTPlayer.checkForState(r)}),r.opt.mute?jQuery(r).muteYTPVolume():jQuery(r).unmuteYTPVolume()},t),r.opt.addRaster){var a=window.retina||1<window.devicePixelRatio;r.overlay.addClass(a?"raster retina":"raster")}else r.overlay.removeClass("raster"),r.overlay.removeClass("retina");jQuery("#controlBar_"+r.id).remove(),r.opt.showControls&&jQuery(r).buildYTPControls(),jQuery.mbYTPlayer.getDataFromFeed(r.videoID,r),jQuery(r).optimizeDisplay()},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var e=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,e.isInit=!1,e.videoID=null,e.wrapper.remove(),jQuery("#controlBar_"+e.id).remove()},fullscreen:function(real){var YTPlayer=this.get(0);void 0===real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen")?(jQuery(YTPlayer).setVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}if(YTPlayer.isAlone)real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1;else{if(real){var playerState=YTPlayer.player.getPlayerState();videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)}else videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3);fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0}function RunPrefixMethod(e,r){for(var t,a,o=["webkit","moz","ms","o",""],n=0;n<o.length&&!e[t];){if(t=r,""==o[n]&&(t=t.substr(0,1).toLowerCase()+t.substr(1)),"undefined"!=(a=typeof e[t=o[n]+t]))return o=[o[n]],"function"==a?e[t]():e[t];n++}}function launchFullscreen(e){RunPrefixMethod(e,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}},playYTP:function(){var e=this.get(0);void 0!==e.player&&(jQuery("#controlBar_"+e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause),e.player.playVideo(),e.wrapper.CSSAnimate({opacity:e.isAlone?1:e.opt.opacity},2e3),jQuery(e).on("YTPStart",function(){jQuery(e).css("background-image","none")}))},toggleLoops:function(){var e=this.get(0),r=e.opt;1==r.loop?r.loop=0:(r.startAt?e.player.seekTo(r.startAt):e.player.playVideo(),r.loop=1)},stopYTP:function(){var e=this.get(0);jQuery("#controlBar_"+e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),e.player.stopVideo()},pauseYTP:function(){var e=this.get(0);e.opt;jQuery("#controlBar_"+e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),e.player.pauseVideo()},seekToYTP:function(e){this.get(0).player.seekTo(e,!0)},setYTPVolume:function(e){var r=this.get(0);e||r.opt.vol||0!=r.player.getVolume()?!e&&0<r.player.getVolume()||e&&r.player.getVolume()==e?jQuery(r).muteYTPVolume():r.opt.vol=e:jQuery(r).unmuteYTPVolume(),r.player.setVolume(r.opt.vol)},muteYTPVolume:function(){var e=this.get(0);e.opt.vol=e.player.getVolume()||50,e.player.mute(),e.player.setVolume(0),jQuery("#controlBar_"+e.id).find(".mb_YTVPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute),jQuery(e).addClass("isMuted"),jQuery(e).trigger("YTPMuted")},unmuteYTPVolume:function(){var e=this.get(0);e.player.unMute(),e.player.setVolume(e.opt.vol),jQuery("#controlBar_"+e.id).find(".mb_YTVPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute),jQuery(e).removeClass("isMuted"),jQuery(e).trigger("YTPUnmuted")},manageYTPProgress:function(){var e=this.get(0),r=jQuery("#controlBar_"+e.id),t=r.find(".mb_YTVPProgress"),a=r.find(".mb_YTVPLoaded"),o=r.find(".mb_YTVTime"),n=t.outerWidth(),i=Math.floor(e.player.getCurrentTime()),l=Math.floor(e.player.getDuration()),s=i*n/l,y=100*e.player.getVideoLoadedFraction();return a.css({left:0,width:y+"%"}),o.css({left:0,width:s}),{totalTime:l,currentTime:i}},buildYTPControls:function(){var YTPlayer=this.get(0),data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){var controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTVPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide(),buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTVPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).pauseYTP():jQuery(YTPlayer).playYTP()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).unmuteYTPVolume():jQuery(YTPlayer).muteYTPVolume()}),idx=jQuery("<span/>").addClass("mb_YTVPTime"),vURL=data.videoURL;vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).fullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTVPProgress").css("position","absolute").click(function(e){timeBar.css({width:e.clientX-timeBar.offset().left}),YTPlayer.timeW=e.clientX-timeBar.offset().left,controlBar.find(".mb_YTVPLoaded").css({width:0});var r=Math.floor(YTPlayer.player.getDuration());YTPlayer.goto=timeBar.outerWidth()*r/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer.goto),!0),controlBar.find(".mb_YTVPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTVPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTVTime").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(controlBar):(controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(controlBar)),controlBar.fadeIn()}},checkForState:function(i){clearInterval(i.getState),i.getState=setInterval(function(){var e=jQuery(i).manageYTPProgress(),r=jQuery(i),t=jQuery("#controlBar_"+i.id),a=i.opt,o=i.opt.startAt?i.opt.startAt:1,n=i.opt.stopAt>i.opt.startAt?i.opt.stopAt:0;if(n=n<i.player.getDuration()?n:0,0==i.player.getVolume()?r.addClass("isMuted"):r.removeClass("isMuted"),e.totalTime?t.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(e.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(e.totalTime)):t.find(".mb_YTVPTime").html("-- : -- / -- : --"),1==i.player.getPlayerState()&&(parseFloat(i.player.getDuration()-3)<i.player.getCurrentTime()||0<n&&parseFloat(i.player.getCurrentTime())>n)){if(i.isEnded)return;if(i.isEnded=!0,setTimeout(function(){i.isEnded=!1},2e3),i.isPlayList)return clearInterval(i.getState),void jQuery(i).trigger("YTPEnd");a.loop?i.player.seekTo(o,!0):(i.player.pauseVideo(),i.wrapper.CSSAnimate({opacity:0},1e3,function(){if(jQuery(i).trigger("YTPEnd"),i.player.seekTo(o,!0),!i.isBackground){var e=i.videoData.thumbnail.hqDefault;jQuery(i).css({background:"rgba(0,0,0,0.5) url("+e+") center center",backgroundSize:"cover"})}}))}},1)},formatTime:function(e){var r=Math.floor(e/60),t=Math.floor(e-60*r);return(r<=9?"0"+r:r)+" : "+(t<=9?"0"+t:t)}},jQuery.fn.toggleVolume=function(){var e=this.get(0);if(e)return e.player.isMuted()?(jQuery(e).unmuteYTPVolume(),!0):(jQuery(e).muteYTPVolume(),!1)},jQuery.fn.optimizeDisplay=function(){var e=this.get(0),r=e.opt,t=jQuery(e.playerEl),a={},o=e.wrapper;a.width=o.outerWidth(),a.height=o.outerHeight();var n={};n.width=a.width+24*a.width/100,n.height="16/9"==r.ratio?Math.ceil(9*a.width/16):Math.ceil(3*a.width/4),n.marginTop=-(n.height-a.height)/2,n.marginLeft=-12*a.width/100,n.height<a.height&&(n.height=a.height+24*a.height/100,n.width="16/9"==r.ratio?Math.floor(16*a.height/9):Math.floor(4*a.height/3),n.marginTop=-12*a.height/100,n.marginLeft=-(n.width-a.width)/2),n.width+=100,n.height+=100,n.marginTop-=50,n.marginLeft-=50,t.css({width:n.width,height:n.height,marginTop:n.marginTop,marginLeft:n.marginLeft})},jQuery.shuffle=function(e){for(var r=e.slice(),t=r.length,a=t;a--;){var o=parseInt(Math.random()*t),n=r[a];r[a]=r[o],r[o]=n}return r},jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.YTPlaylist,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildYTPControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.playYTP,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stopYTP,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pauseYTP,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekToYTP,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.muteYTPVolume,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmuteYTPVolume,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setYTPVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageYTPProgress}(jQuery,ytp);