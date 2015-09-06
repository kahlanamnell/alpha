/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Contains: iepp
 * Enable HTML5 elements / Don't modify this file, it's the only file included in header, keep it lightweight
 */
;window.Modernizr=function(a,b,c){function w(a,b){return!!~(""+a).indexOf(b)}function v(a,b){return typeof a===b}function u(a,b){return t(prefixes.join(a+";")+(b||""))}function t(a){j.cssText=a}var d="2.0.6",e={},f=b.documentElement,g=b.head||b.getElementsByTagName("head")[0],h="modernizr",i=b.createElement(h),j=i.style,k,l=Object.prototype.toString,m={},n={},o={},p=[],q,r={}.hasOwnProperty,s;!v(r,c)&&!v(r.call,c)?s=function(a,b){return r.call(a,b)}:s=function(a,b){return b in a&&v(a.constructor.prototype[b],c)};for(var x in m)s(m,x)&&(q=x.toLowerCase(),e[q]=m[x](),p.push((e[q]?"":"no-")+q));t(""),i=k=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d;return e}(this,this.document);
/*! http://mths.be/placeholder v2.0.3 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){return this.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder').end()};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;e.call(m)}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder')}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

jQuery(function( $ ) {

     $(function() {
        var _scroll = {
            delay: 1000,
            easing: 'linear',
            items: 1,
            duration: 0.07,
            timeoutDuration: 0,
            pauseOnHover: 'immediate'
        };
        $('#ticker').carouFredSel({
            width: 1000,
            align: false,
            items: {
                width: 'variable',
                height: 35,
                visible: 1
            },
            scroll: _scroll
        });
      
        $('.caroufredsel_wrapper').css('width', '100%');
     
         
    });

 
   $('#toggle-top').click(function() {
        $('#topmenu-wrap').slideToggle(400);
        $(this).toggleClass("active");
 
        return false;
 
    });

    $('#toggle-main').click(function() {
        $('#menu-wrap').slideToggle(400);
        $(this).toggleClass("active");
 
        return false;
 
    });

 
    /*
    function mobileadjust() {
        
        var windowWidth = $(window).width();

        if( typeof window.orientation === 'undefined' ) {
            $('#menu-wrap').removeAttr('style');
            $('#topmenu-wrap').removeAttr('style');
        }

        if( windowWidth < 769 ) {
            $('#menu-wrap').addClass('mobile-menu');
            $('#topmenu-wrap').addClass('mobile-menu');
            $('.column-2').css("left", "");
        } else {
            $('.column-2').css("left", "200px");
        }
 
    }
    
    mobileadjust();

    $(window).resize(function() {
        mobileadjust();
    });

 */
 
 
	if ( $('#respond input, #respond textarea').length > 0 && 'placeholder' in $('#respond input, #respond textarea')[0] ) {
		$('#respond').find('div p label').hide();
	}

 
}); 

var fp_vimeoPlayers = [],fp_youtubeIDs = [], fp_youtubePlayers = [];
var vimeoPlayers = [], youtubeIDs = [], youtubePlayers = [];
jQuery(document).ready(function($) {
              
    $('#recent-videos').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true,
        animationLoop: false,
        useCSS: false,
        video: true,
        smoothHeight: true,
        slideshow: false,
        before: $.fn.stopDontMove
    });
    
    $("h3.title:empty").remove();

    $('input, textarea').placeholder();
   
});

function onYouTubePlayerAPIReady() {
    jQuery(document).ready(function($) {
        $(youtubeIDs).each(function(index, value) {
            youtubePlayers.push(new YT.Player(value));
        });

        $(fp_youtubeIDs).each(function(index, value) {
            fp_youtubePlayers.push(new YT.Player(value));
        });
    });
}

(function($) {
    $.fn.stopDontMove = function() {
        $(vimeoPlayers).each(function(i, el) {
            if ($(el).attr('src') != '') {
                $f(el).api('pause');
            }
        });

        $(youtubePlayers).each(function() {
            if ($.isFunction(this.stopVideo)) {
                this.stopVideo();
            }
        });
    }
})(jQuery);

jQuery(document).ready(function($) {
    var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']"
    ];

    $('#recent-videos').find(selectors.join(',')).each(function() {
        var $this = $(this);
        var src = $this.prop('src');

        if (!$this.attr('id')) {
            $this.attr('id', 'ai' + Math.floor(Math.random() * 999999));
        }

        if (src.indexOf('vimeo') !== -1) {
            $(this).prop('src', src + '&api=1&player_id=' + $.prop('id'));
            vimeoPlayers.push($this.get(0));
        }

        if (src.indexOf('youtube') !== -1) {
            $(this).prop('src', src + '&enablejsapi=1');
            youtubeIDs.push($this.prop('id'));
        }
    });

    $('#slider').find(selectors.join(',')).each(function() {
        var $this = $(this);
        var src = $this.prop('src');

        if (!$this.attr('id')) {
            $this.attr('id', 'ai' + Math.floor(Math.random() * 999999));
        }

        if (src.indexOf('vimeo') !== -1) {
            $(this).prop('src', src + '&api=1&player_id=' + $.prop('id'));
            fp_vimeoPlayers.push($this.get(0));
        }

        if (src.indexOf('youtube') !== -1) {
            $(this).prop('src', src + '&enablejsapi=1');
            fp_youtubeIDs.push($this.prop('id'));
        }
    });
});

jQuery(document).ready(function($) {

  $('#search-tip').show();
  
  $('#search-tip a').click(function() {
  
      $('#search-tip').hide();
 
  });
  
  if ( $.cookie('cookie-accepted') != '1' ) {
   
    $('.cookies').show();
    
  }
  
  $('.actions > li').click(function( event ) {
  
    event.preventDefault();
    $('.cookies').hide();
    $.cookie('cookie-accepted', '1', { expires: 365 });
    
  });
  
  function mobileadjust() {
        
        var windowWidth = $(window).width();

        if( typeof window.orientation === 'undefined' ) {
            $('#search-tip').show();
        }

        if( windowWidth < 1100 ) {
            $('#search-tip').hide();
        } else {
            $('#search-tip').show();
        }
 
	}
	
	$(window).resize(function() {
        mobileadjust();
  });
  
  mobileadjust();

});
