
/*
* Title                   : Thumbnail Scroller (WP NextGEN Gallery Template)
* Version                 : 1.3
* File                    : jquery.dop.NextGENThumbnailScroller.js
* File Version            : 1.3
* Created / Last Modified : 05 May 2013
* Author                  : Dot on Paper
* Copyright               : © 2012 Dot on Paper
* Website                 : http://www.dotonpaper.net
* Description             : Thumbnail Scroller jQuery Plugin.
*/

(function($){
    $.fn.DOPNextGENThumbnailScroller = function(options){
        var Container = this,
        ID = '0',
        
        Width = 900,
        Height = 128,     
        BgColor = 'ffffff',
        BgAlpha = 100,
        BgBorderSize = 1,
        BgBorderColor = 'e0e0e0',
        ThumbnailsOrder = 'random',
        ResponsiveEnabled = 'true',
        UltraResponsiveEnabled = 'false',
        
        ThumbnailsPosition = 'horizontal',
        ThumbnailsBgColor = 'ffffff',
        ThumbnailsBgAlpha = 0,
        ThumbnailsBorderSize = 0,
        ThumbnailsBorderColor = 'e0e0e0',
        ThumbnailsSpacing = 10,
        ThumbnailsMarginTop = 10,
        ThumbnailsMarginRight = 0,
        ThumbnailsMarginBottom = 10,
        ThumbnailsMarginLeft = 0,
        ThumbnailsPaddingTop = 0,
        ThumbnailsPaddingRight = 0,
        ThumbnailsPaddingBottom = 0,
        ThumbnailsPaddingLeft = 0,
        ThumbnailsInfo = 'label',        
        
        ThumbnailsNavigationEasing = 'linear',
        ThumbnailsNavigationLoop = 'false',
                
        ThumbnailsNavigationMouseEnabled = 'false',
        
        ThumbnailsNavigationScrollEnabled = 'false',
        ThumbnailsScrollPosition = 'bottom/right',
        ThumbnailsScrollSize = 5,
        ThumbnailsScrollScrubColor = '808080',
        ThumbnailsScrollBarColor = 'e0e0e0',                     
        
        ThumbnailsNavigationArrowsEnabled = 'true',
        ThumbnailsNavigationArrowsNoItemsSlide = 1,
        ThumbnailsNavigationArrowsSpeed = 600,
        ThumbnailsNavigationPrev = 'assets/gui/images/ThumbnailsPrev.png',
        ThumbnailsNavigationPrevHover = 'assets/gui/images/ThumbnailsPrevHover.png',
        ThumbnailsNavigationPrevDisabled = 'assets/gui/images/ThumbnailsPrevDisabled.png',
        ThumbnailsNavigationNext = 'assets/gui/images/ThumbnailsNext.png',
        ThumbnailsNavigationNextHover = 'assets/gui/images/ThumbnailsNextHover.png',
        ThumbnailsNavigationNextDisabled = 'assets/gui/images/ThumbnailsNextDisabled.png',
        
        ThumbnailLoader = 'assets/gui/images/ThumbnailLoader.gif',
        ThumbnailWidth = 100,
        ThumbnailHeight = 100,
        ThumbnailAlpha = 100,
        ThumbnailAlphaHover = 100,
        ThumbnailBgColor = 'f1f1f1',
        ThumbnailBgColorHover = 'f1f1f1',
        ThumbnailBorderSize = 1,
        ThumbnailBorderColor = 'd0d0d0',
        ThumbnailBorderColorHover = '303030',
        ThumbnailPaddingTop = 2,
        ThumbnailPaddingRight = 2,
        ThumbnailPaddingBottom = 2,
        ThumbnailPaddingLeft = 2, 
        
        LightboxEnabled = 'true',
        LightboxDisplayTime = 600,
        LightboxWindowColor = 'ffffff',
        LightboxWindowAlpha = 80,
        LightboxLoader = 'assets/gui/images/LightboxLoader.gif',
        LightboxBgColor = 'ffffff',
        LightboxBgAlpha = 100,
        LightboxBorderSize = 1,
        LightboxBorderColor = 'e0e0e0',        
        LightboxCaptionTextColor = '999999',
        LightboxMarginTop = 30,
        LightboxMarginRight = 30,
        LightboxMarginBottom = 30,
        LightboxMarginLeft = 30,
        LightboxPaddingTop = 10,
        LightboxPaddingRight = 10,
        LightboxPaddingBottom = 10,
        LightboxPaddingLeft = 10,
        
        LightboxNavigationPrev = 'assets/gui/images/LightboxPrev.png',
        LightboxNavigationPrevHover = 'assets/gui/images/LightboxPrevHover.png',
        LightboxNavigationNext = 'assets/gui/images/LightboxNext.png',
        LightboxNavigationNextHover = 'assets/gui/images/LightboxNextHover.png',
        LightboxNavigationClose = 'assets/gui/images/LightboxClose.png',
        LightboxNavigationCloseHover = 'assets/gui/images/LightboxCloseHover.png',
        LightboxNavigationInfoBgColor = 'ffffff',
        LightboxNavigationInfoTextColor = 'c0c0c0',
        LightboxNavigationDisplayTime = 600,
        LightboxNavigationTouchDeviceSwipeEnabled = 'true',
        
        SocialShareEnabled = 'false',
        SocialShareLightbox = 'assets/gui/images/SocialShareLightbox.png',
        
        TooltipBgColor = 'ffffff',
        TooltipStrokeColor = '000000',
        TooltipTextColor = '000000',
                                    
        LabelPosition = 'bottom',
        LabelAlwaysVisible = 'false',
        LabelUnderHeight = 50,
        LabelBgColor = '000000',
        LabelBgAlpha = 80,
        LabelTextColor = 'ffffff',    
        
        SlideshowEnabled = 'false',
        SlideshowTime = 5000,
        SlideshowLoop = 'false',
                
        Images = new Array(),
        Thumbs = new Array(),
        ThumbsLoaded = new Array(),
        Title = new Array(),
        Caption = new Array(),
        Media = new Array(),
        LightboxMedia = new Array(),
        Link = new Array(),
        Target = new Array(),
        noThumbs = 0,
        totalNoThumbs = 0,
        
        startScrollerID = 0,
        startWith = 0,
        
        initialWidth = Width,
        initialHeight = Height,
        initialThumbnailWidth = ThumbnailWidth,
        initialThumbnailHeight = ThumbnailHeight,
        
        currentX = 0,
        currentY = 0,
        movePrev = false,
        moveNext = false,
        
        arrowsClicked = false,
        
        lightboxCurrentImage  = 0,
        lightboxImageWidth = 0,
        lightboxImageHeight = 0,
        lightboxImageLoaded = false,

        SlideshowID,
        SlideshowStatus = 'pause',
        SlideshowLastImage = false,
        
        socialShareInterval,

        methods = {
                    init:function(){// Init Plugin.
                        return this.each(function(){
                            if (options){
                                $.extend(Data, options);
                            }
                            
                            if (!$(Container).hasClass('dopts-initialized')){
                                $(Container).addClass('dopts-initialized');
                             
                                methods.parseSettings();
                                $(window).bind('resize.DOPNextGENThumbnailScroller', methods.initRP);
                                $(window).bind('scroll.DOPNextGENThumbnailScroller', methods.initRPScroll);
                            }
                        });
                    },
                    parseSettings:function(){// Parse Settings.                        
                        ID = $(Container).attr('id').split('DOPNextGENThumbnailScroller')[1];
                        Settings = eval('DOPNextGENThumbnailScrollerSettings'+ID);
                            
                        Width = parseInt(Settings['Width']);
                        Height = parseInt(Settings['Height']);
                        BgColor = Settings['BgColor'];
                        BgAlpha = parseInt(Settings['BgAlpha']);
                        BgBorderSize = parseInt(Settings['BgBorderSize']);
                        BgBorderColor = Settings['BgBorderColor'];
                        ThumbnailsOrder = Settings['ThumbnailsOrder'];
                        ResponsiveEnabled = Settings['ResponsiveEnabled'];
                        UltraResponsiveEnabled = Settings['UltraResponsiveEnabled'];

                        ThumbnailsPosition = Settings['ThumbnailsPosition'];
                        ThumbnailsBgColor = Settings['ThumbnailsBgColor'];
                        ThumbnailsBgAlpha = parseInt(Settings['ThumbnailsBgAlpha']);
                        ThumbnailsBorderSize = parseInt(Settings['ThumbnailsBorderSize']);
                        ThumbnailsBorderColor = Settings['ThumbnailsBorderColor'];
                        ThumbnailsSpacing = parseInt(Settings['ThumbnailsSpacing']);
                        ThumbnailsMarginTop = parseInt(Settings['ThumbnailsMarginTop']);
                        ThumbnailsMarginRight = parseInt(Settings['ThumbnailsMarginRight']);
                        ThumbnailsMarginBottom = parseInt(Settings['ThumbnailsMarginBottom']);
                        ThumbnailsMarginLeft = parseInt(Settings['ThumbnailsMarginLeft']);
                        ThumbnailsPaddingTop = parseInt(Settings['ThumbnailsPaddingTop']);
                        ThumbnailsPaddingRight = parseInt(Settings['ThumbnailsPaddingRight']);
                        ThumbnailsPaddingBottom = parseInt(Settings['ThumbnailsPaddingBottom']);
                        ThumbnailsPaddingLeft = parseInt(Settings['ThumbnailsPaddingLeft']);
                        ThumbnailsInfo = Settings['ThumbnailsInfo'];

                        ThumbnailsNavigationEasing = Settings['ThumbnailsNavigationEasing'];
                        ThumbnailsNavigationLoop = Settings['ThumbnailsNavigationLoop'];

                        ThumbnailsNavigationMouseEnabled = Settings['ThumbnailsNavigationMouseEnabled'];

                        ThumbnailsNavigationScrollEnabled = Settings['ThumbnailsNavigationScrollEnabled'];
                        ThumbnailsScrollPosition = Settings['ThumbnailsScrollPosition'];
                        ThumbnailsScrollSize = parseInt(Settings['ThumbnailsScrollSize']);
                        ThumbnailsScrollScrubColor = Settings['ThumbnailsScrollScrubColor'];
                        ThumbnailsScrollBarColor = Settings['ThumbnailsScrollBarColor'];

                        ThumbnailsNavigationArrowsEnabled = Settings['ThumbnailsNavigationArrowsEnabled'];
                        ThumbnailsNavigationArrowsNoItemsSlide = parseInt(Settings['ThumbnailsNavigationArrowsNoItemsSlide']);
                        ThumbnailsNavigationArrowsSpeed = parseInt(Settings['ThumbnailsNavigationArrowsSpeed']);
                        ThumbnailsNavigationPrev = Settings['ThumbnailsNavigationPrev'];
                        ThumbnailsNavigationPrevHover = Settings['ThumbnailsNavigationPrevHover'];
                        ThumbnailsNavigationPrevDisabled = Settings['ThumbnailsNavigationPrevDisabled'];
                        ThumbnailsNavigationNext = Settings['ThumbnailsNavigationNext'];
                        ThumbnailsNavigationNextHover = Settings['ThumbnailsNavigationNextHover'];
                        ThumbnailsNavigationNextDisabled = Settings['ThumbnailsNavigationNextDisabled'];

                        ThumbnailLoader = Settings['ThumbnailLoader'];
                        ThumbnailWidth = parseInt(Settings['ThumbnailWidth']);
                        ThumbnailHeight = parseInt(Settings['ThumbnailHeight']);
                        ThumbnailAlpha = parseInt(Settings['ThumbnailAlpha']);
                        ThumbnailAlphaHover = parseInt(Settings['ThumbnailAlphaHover']);
                        ThumbnailBgColor = Settings['ThumbnailBgColor'];
                        ThumbnailBgColorHover = Settings['ThumbnailBgColorHover'];
                        ThumbnailBorderSize = parseInt(Settings['ThumbnailBorderSize']);
                        ThumbnailBorderColor = Settings['ThumbnailBorderColor'];
                        ThumbnailBorderColorHover = Settings['ThumbnailBorderColorHover'];
                        ThumbnailPaddingTop = parseInt(Settings['ThumbnailPaddingTop']);
                        ThumbnailPaddingRight = parseInt(Settings['ThumbnailPaddingRight']);
                        ThumbnailPaddingBottom = parseInt(Settings['ThumbnailPaddingBottom']);
                        ThumbnailPaddingLeft = parseInt(Settings['ThumbnailPaddingLeft']);

                        LightboxEnabled = Settings['LightboxEnabled'];
                        LightboxDisplayTime = parseInt(Settings['LightboxDisplayTime']);
                        LightboxWindowColor = Settings['LightboxWindowColor'];
                        LightboxWindowAlpha = parseInt(Settings['LightboxWindowAlpha']);
                        LightboxLoader = Settings['LightboxLoader'];
                        LightboxBgColor = Settings['LightboxBgColor'];
                        LightboxBgAlpha = parseInt(Settings['LightboxBgAlpha']);
                        LightboxBorderSize = parseInt(Settings['LightboxBorderSize']);
                        LightboxBorderColor = Settings['LightboxBorderColor'];        
                        LightboxCaptionTextColor = Settings['LightboxCaptionTextColor'];
                        LightboxMarginTop = parseInt(Settings['LightboxMarginTop']);
                        LightboxMarginRight = parseInt(Settings['LightboxMarginRight']);
                        LightboxMarginBottom = parseInt(Settings['LightboxMarginBottom']);
                        LightboxMarginLeft = parseInt(Settings['LightboxMarginLeft']);
                        LightboxPaddingTop = parseInt(Settings['LightboxPaddingTop']);
                        LightboxPaddingRight = parseInt(Settings['LightboxPaddingRight']);
                        LightboxPaddingBottom = parseInt(Settings['LightboxPaddingBottom']);
                        LightboxPaddingLeft = parseInt(Settings['LightboxPaddingLeft']);

                        LightboxNavigationPrev = Settings['LightboxNavigationPrev'];
                        LightboxNavigationPrevHover = Settings['LightboxNavigationPrevHover'];
                        LightboxNavigationNext = Settings['LightboxNavigationNext'];
                        LightboxNavigationNextHover = Settings['LightboxNavigationNextHover'];
                        LightboxNavigationClose = Settings['LightboxNavigationClose'];
                        LightboxNavigationCloseHover = Settings['LightboxNavigationCloseHover'];
                        LightboxNavigationInfoBgColor = Settings['LightboxNavigationInfoBgColor'];
                        LightboxNavigationInfoTextColor = Settings['LightboxNavigationInfoTextColor'];
                        LightboxNavigationDisplayTime = parseInt(Settings['LightboxNavigationDisplayTime']);
                        LightboxNavigationTouchDeviceSwipeEnabled = Settings['LightboxNavigationTouchDeviceSwipeEnabled'];
                        
                        SocialShareEnabled = Settings['SocialShareEnabled'];
                        SocialShareLightbox = Settings['SocialShareLightbox'];

                        TooltipBgColor = Settings['TooltipBgColor'];
                        TooltipStrokeColor = Settings['TooltipStrokeColor'];
                        TooltipTextColor = Settings['TooltipTextColor'];

                        LabelPosition = Settings['LabelPosition'];
                        LabelAlwaysVisible = Settings['LabelAlwaysVisible'];
                        LabelUnderHeight = parseInt(Settings['LabelUnderHeight']);
                        LabelBgColor = Settings['LabelBgColor'];
                        LabelBgAlpha = parseInt(Settings['LabelBgAlpha']);
                        LabelTextColor = Settings['LabelTextColor'];

                        SlideshowEnabled = Settings['SlideshowEnabled'];
                        SlideshowTime = Settings['SlideshowTime'];
                        SlideshowLoop = Settings['SlideshowLoop'];

                        methods.parseContent();
                    },
                    parseContent:function(){// Parse Content.
                        var i;
                        
                        Content = eval('DOPNextGENThumbnailScrollerContent'+ID);
                        
                        $.each(Content, function(index){
                            $.each(Content[index], function(key){
                                switch (key){
                                    case 'Image':
                                        Images.push(prototypes.acaoBuster(Content[index][key]));break;
                                    case 'Thumb':
                                        Thumbs.push(prototypes.acaoBuster(Content[index][key]));break;
                                    case 'Title':
                                        Title.push(Content[index][key]);break;
                                    case 'Caption':
                                        Caption.push(Content[index][key]);break;
                                    case 'Media':
                                        Media.push(Content[index][key]);break;
                                    case 'LightboxMedia':
                                        LightboxMedia.push(Content[index][key]);break;
                                    case 'Link':
                                        Link.push(Content[index][key]);break;
                                    case 'Target':
                                        Target.push(Content[index][key]);break;
                                }
                            });
                        });
                            
                        noThumbs = Thumbs.length;                                      
                        initialWidth = Width;
                        initialHeight = Height;
                        initialThumbnailWidth = ThumbnailWidth;
                        initialThumbnailHeight = ThumbnailHeight;

                        if (ThumbnailsOrder == 'random'){
                            methods.randomizeThumbnails();
                        }                               

                        if (ThumbnailsNavigationLoop == 'true'){             
                            totalNoThumbs = noThumbs+(noThumbs*methods.initLoop(1)); 
                        }
                        else{
                            totalNoThumbs = noThumbs;
                        }

                        if (ResponsiveEnabled == 'true'){  
                            methods.rpResponsive();   
                        }

                        methods.initScroller();
                    },
                    randomizeThumbnails:function(){
                        var indexes = new Array(), i,
                        auxImages = new Array(),
                        auxThumbs = new Array(),
                        auxTitle = new Array(),
                        auxCaption = new Array(),
                        auxMedia = new Array(),
                        auxLightboxMedia = new Array(),
                        auxLink = new Array(),
                        auxTarget = new Array();
                        
                        for (i=0; i<noThumbs; i++){
                            indexes[i] = i;
                            auxImages[i] = Images[i];
                            auxThumbs[i] = Thumbs[i];
                            auxTitle[i] = Title[i];
                            auxCaption[i] = Caption[i];
                            auxMedia[i] = Media[i];
                            auxLightboxMedia[i] = LightboxMedia[i];
                            auxLink[i] = Link[i];
                            auxTarget[i] = Target[i];
                        }
                        
                        indexes =  prototypes.randomize(indexes);
                        
                        for (i=0; i<noThumbs; i++){
                            Images[i] = auxImages[indexes[i]];
                            Thumbs[i] = auxThumbs[indexes[i]];
                            Title[i] = auxTitle[indexes[i]];
                            Caption[i] = auxCaption[indexes[i]];
                            Media[i] = auxMedia[indexes[i]];
                            LightboxMedia[i] = auxLightboxMedia[indexes[i]];
                            Link[i] = auxLink[indexes[i]];
                            Target[i] = auxTarget[indexes[i]];
                        }
                    },
                    initScroller:function(){// Init the Scroller
                        var HTML = new Array(),
                        LightboxHTML = new Array();

                        HTML.push('<div class="DOP_NextGENThumbnailScroller_Container">');

                        HTML.push('   <div class="DOP_NextGENThumbnailScroller_Background"></div>');

                        HTML.push('   <div class="DOP_NextGENThumbnailScroller_ThumbnailsContainer">');
                        HTML.push('       <div class="DOP_NextGENThumbnailScroller_ThumbnailsBg"></div>');
                        if (ThumbnailsNavigationScrollEnabled == 'true'){
                            HTML.push('       <div class="DOP_NextGENThumbnailScroller_ThumbnailsScroll">');
                            HTML.push('           <div class="DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub"></div>');
                            HTML.push('       </div>');   
                        }
                        HTML.push('       <div class="DOP_NextGENThumbnailScroller_ThumbnailsWrapper">');
                        HTML.push('           <div class="DOP_NextGENThumbnailScroller_Thumbnails"></div>');
                        HTML.push('       </div>');   
                        HTML.push('   </div>'); 
                        
                        if (ThumbnailsNavigationArrowsEnabled == 'true'){                            
                            HTML.push('  <div class="DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev">');
                            HTML.push('      <img src="'+ThumbnailsNavigationPrev+'" class="normal" alt="" />');
                            HTML.push('      <img src="'+ThumbnailsNavigationPrevHover+'" class="hover" alt="" />');  
                            HTML.push('      <img src="'+ThumbnailsNavigationPrevDisabled+'" class="disabled" alt="" />');  
                            HTML.push('  </div>');
                            HTML.push('  <div class="DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext">');
                            HTML.push('      <img src="'+ThumbnailsNavigationNext+'" class="normal" alt="" />');
                            HTML.push('      <img src="'+ThumbnailsNavigationNextHover+'" class="hover" alt="" />');  
                            HTML.push('      <img src="'+ThumbnailsNavigationNextDisabled+'" class="disabled" alt="" />');  
                            HTML.push('  </div>');
                        }
                        
                        if (LightboxEnabled == 'true'){
                            LightboxHTML.push('   <div class="DOP_NextGENThumbnailScroller_LightboxWrapper" id="DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+'">');
                            LightboxHTML.push('       <div class="DOP_NextGENThumbnailScroller_LightboxWindow"></div>');
                            LightboxHTML.push('       <div class="DOP_NextGENThumbnailScroller_LightboxLoader"><img src="'+LightboxLoader+'" alt="" /></div>');
                            LightboxHTML.push('       <div class="DOP_NextGENThumbnailScroller_LightboxContainer">');
                            LightboxHTML.push('           <div class="DOP_NextGENThumbnailScroller_LightboxBg"></div>');
                            LightboxHTML.push('           <div class="DOP_NextGENThumbnailScroller_Lightbox"></div>');
                            LightboxHTML.push('           <div class="DOP_NextGENThumbnailScroller_LightboxCaption"></div>');
                            LightboxHTML.push('           <div class="DOP_NextGENThumbnailScroller_LightboxNavigation">');
                            LightboxHTML.push('               <div class="DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn">');
                            LightboxHTML.push('                   <img src="'+LightboxNavigationPrev+'" class="normal" alt="" />');
                            LightboxHTML.push('                   <img src="'+LightboxNavigationPrevHover+'" class="hover" alt="" />');   
                            LightboxHTML.push('               </div>');   
                            LightboxHTML.push('               <div class="DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn">');
                            LightboxHTML.push('                   <img src="'+LightboxNavigationNext+'" class="normal" alt="" />');
                            LightboxHTML.push('                   <img src="'+LightboxNavigationNextHover+'" class="hover" alt="" />');   
                            LightboxHTML.push('               </div>');   
                            LightboxHTML.push('               <div class="DOP_NextGENThumbnailScroller_LightboxNavigation_CloseBtn">');
                            LightboxHTML.push('                   <img src="'+LightboxNavigationClose+'" class="normal" alt="" />');
                            LightboxHTML.push('                   <img src="'+LightboxNavigationCloseHover+'" class="hover" alt="" />');   
                            LightboxHTML.push('               </div>');  
                            
                            if (SocialShareEnabled == 'true'){
                                LightboxHTML.push('                    <div class="DOP_NextGENThumbnailScroller_LightboxNavigation_SocialShareBtn"></div>');
                            } 
                            LightboxHTML.push('               <div class="DOP_NextGENThumbnailScroller_LightboxNavigation_Info">');
                            LightboxHTML.push('                   <span class="current"></span> / '+noThumbs);
                            LightboxHTML.push('               </div>');                                   
                            LightboxHTML.push('           </div>');
                            LightboxHTML.push('       </div>');
                            LightboxHTML.push('   </div>');
                        }
                        
                        if (ThumbnailsInfo == 'tooltip' && !prototypes.isTouchDevice()){
                            HTML.push('   <div class="DOP_NextGENThumbnailScroller_Tooltip"></div>');
                        }

                        HTML.push('</div>');

                        Container.html(HTML.join(''));
                        if (LightboxEnabled == 'true'){
                            $('body').append(LightboxHTML.join(''));
                        }
                        
                        methods.initSettings();
                    },
                    initSettings:function(){// Init Settings
                        methods.initContainer();
                        methods.initBackground();
                        
                        if (noThumbs > 0){
                            methods.initThumbnails();
                            
                            if (ThumbnailsInfo == 'tooltip' && !prototypes.isTouchDevice()){
                                methods.initTooltip();
                            }
                            if (LightboxEnabled == 'true'){
                                methods.initLightbox();
                        
                                if (SocialShareEnabled == 'true'){
                                    methods.initSocialShare();
                                }
                            }
                            if (SlideshowEnabled == 'true'){
                                methods.initSlideshow();
                            }
                        }
                        else{
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css('display', 'none');
                        }
                    },
                    initRP:function(){// Init Resize & Positioning
                        if (ResponsiveEnabled == 'true'){   
                            methods.rpResponsive();                                
                            methods.rpContainer();
                            methods.rpBackground();
                            
                            if (UltraResponsiveEnabled == 'true'){
                                methods.rpUltraResponsiveThumbnails();
                            }
                            else{
                                methods.rpThumbnails();
                            }

                            if (LightboxEnabled == 'true'){
                                if (lightboxCurrentImage != 0){
                                    if (LightboxMedia[lightboxCurrentImage-1] == ''){
                                        methods.rpLightboxImage();
                                    }
                                    else{
                                        methods.rpLightboxMedia();
                                    }
                                }
                            }
                        }
                    },
                    initRPScroll:function(){
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css({'margin-top': ($(window).height()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height())/2+$(window).scrollTop(),
                                                                                                                         'margin-left': ($(window).width()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width())/2+$(window).scrollLeft()});    
                    },
                    rpResponsive:function(){   
                        var hiddenBustedItems = prototypes.doHideBuster($(Container));
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            if ($(Container).width() < initialWidth){
                                Width = $(Container).width();
                                
                                if (UltraResponsiveEnabled == 'true'){
                                    ThumbnailWidth = Math.round(initialThumbnailWidth*Width/initialWidth);
                                    ThumbnailHeight = ThumbnailWidth*initialThumbnailHeight/initialThumbnailWidth;
                                    Height = initialHeight-(initialThumbnailHeight-ThumbnailHeight);
                                }
                            }
                            else{
                                Width = initialWidth;
                                
                                if (UltraResponsiveEnabled == 'true'){
                                    Height = initialHeight;
                                    ThumbnailWidth = initialThumbnailWidth;
                                    ThumbnailHeight = initialThumbnailHeight;
                                }
                            }
                        }
                        else{
                            if ($(Container).height() < initialHeight && $(Container).height() != 0){
                                Height = $(Container).height();    
                                
                                if (UltraResponsiveEnabled == 'true'){
                                    ThumbnailHeight = Math.round(initialThumbnailHeight*Height/initialHeight);
                                    ThumbnailWidth = ThumbnailHeight*initialThumbnailWidth/initialThumbnailHeight;
                                    Width = initialWidth-(initialThumbnailWidth-ThumbnailWidth);
                                }                            
                            }
                            else{
                                Height = initialHeight;
                                
                                if (UltraResponsiveEnabled == 'true'){
                                    Width = initialWidth;
                                    ThumbnailHeight = initialThumbnailHeight;
                                    ThumbnailWidth = initialThumbnailWidth;
                                }
                            }                            
                        }
                        
                        prototypes.undoHideBuster(hiddenBustedItems);
                    },
                    initLoop:function(level){
                        var thumbnailWidth = ThumbnailWidth+2*ThumbnailBorderSize+ThumbnailPaddingRight+ThumbnailPaddingLeft,
                        thumbnailHeight = ThumbnailHeight+2*ThumbnailBorderSize+ThumbnailPaddingTop+ThumbnailPaddingBottom,
                        i;
                        
                        for (i=0; i<noThumbs; i++){
                            Images.push(Images[i]);
                            Thumbs.push(Thumbs[i]);
                            Title.push(Title[i]);
                            Caption.push(Caption[i]);
                            Media.push(Media[i]);
                            LightboxMedia.push(LightboxMedia[i]);
                            Link.push(Link[i]);
                            Target.push(Target[i]);
                        }  
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            if (noThumbs*level*(thumbnailWidth+ThumbnailsSpacing) < 2*(initialWidth+thumbnailWidth+ThumbnailsSpacing)){
                                return methods.initLoop(level+1)+1;
                            }
                            else{
                                return 1;
                            }
                        }
                        else{
                            if (noThumbs*level*(thumbnailHeight+ThumbnailsSpacing) < 2*(initialHeight+thumbnailHeight+ThumbnailsSpacing)){
                                return methods.initLoop(level+1)+1;
                            }
                            else{
                                return 1;
                            }                          
                        }
                    },                   

                    initContainer:function(){// Init Scroller Container
                        $('.DOP_NextGENThumbnailScroller_Container', Container).css('display', 'block');
                        methods.rpContainer();
                    },
                    rpContainer:function(){// Resize & Position the Container
                        $('.DOP_NextGENThumbnailScroller_Container', Container).width(Width);
                        $('.DOP_NextGENThumbnailScroller_Container', Container).height(Height);
                    },

                    initBackground:function(){// Init Background
                        $('.DOP_NextGENThumbnailScroller_Background', Container).css({'background-color': '#'+BgColor,
                                                                               'opacity': BgAlpha/100,
                                                                               'border-width': BgBorderSize,
                                                                               'border-color': '#'+BgBorderColor});
                        methods.rpBackground();
                    },
                    rpBackground:function(){// Resize & Position Background
                        $('.DOP_NextGENThumbnailScroller_Background', Container).width(Width-2*BgBorderSize);
                        $('.DOP_NextGENThumbnailScroller_Background', Container).height(Height-2*BgBorderSize);
                    },
                    
                    initThumbnails:function(){// Init Thumbnails
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).css('background-color', '#'+ThumbnailsBgColor);
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).css('opacity', ThumbnailsBgAlpha/100);
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).css('border-color', '#'+ThumbnailsBorderColor);
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).css('border-width', ThumbnailsBorderSize);

                        methods.rpThumbnails();
                             
                        if (prototypes.isTouchDevice()){
                            if (!prototypes.isAndroid() || !prototypes.isChromeMobileBrowser()){
                                methods.touchNavigation($('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailScroller_Thumbnails', Container));
                            }
                        }
                             
                        if (ThumbnailsNavigationMouseEnabled == 'true'){
                            methods.moveThumbnails();
                        }
                        
                        if (ThumbnailsNavigationScrollEnabled == 'true' && ThumbnailsNavigationLoop == 'false'){
                            methods.initThumbnailsScroll();
                            methods.setThumbnailsScroll();
                        }
                        
                        if (ThumbnailsNavigationArrowsEnabled == 'true'){
                            methods.initThumbnailsArrows();
                            methods.setThumbnailsArrows();
                        }
                                                
                        if (Media[0] != ''){
                            methods.loadThumbMedia(1);
                        }
                        else{
                            methods.loadThumb(1);
                        }
                    },
                    loadThumb:function(no){// Load Thumbnail No
                        methods.initThumb(no);
                        var img = new Image();
                        
                        $(img).load(function(){
                            $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).html(this);
                            $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no+' img').attr('alt', Title[no-1]);
                            methods.loadCompleteThumb(no);
                            
                            if (no < totalNoThumbs){
                                if (Media[no] != ''){
                                    methods.loadThumbMedia(no+1);
                                }
                                else{
                                    methods.loadThumb(no+1);
                                }
                            }
                        }).attr('src', Thumbs[no-1]);
                    },
                    loadThumbMedia:function(no){// Load Thumbnail No
                        methods.initThumb(no);
                        $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).html(Media[no-1]);
                        
                        var iframeSRC =  $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().attr('src');
                        
                        if (iframeSRC != null){
                            if (iframeSRC.indexOf('?') != -1){
                                $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().attr('src', iframeSRC+'&wmode=transparent');                                
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().attr('src', iframeSRC+'?wmode=transparent');
                            }
                        }
                        
                        methods.loadCompleteThumb(no);
                            
                        if (no < totalNoThumbs){
                            if (Media[no] != ''){
                                methods.loadThumbMedia(no+1);
                            }
                            else{
                                methods.loadThumb(no+1);
                            }
                        }                        
                    },
                    initThumb:function(no){// Init Thumbnail
                        var ThumbHTML = new Array(),
                        thumbnailWidth = ThumbnailWidth+2*ThumbnailBorderSize+ThumbnailPaddingRight+ThumbnailPaddingLeft,
                        thumbnailWidthNB = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft,
                        thumbnailHeightNB = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+(LabelPosition == 'under' ? LabelUnderHeight:0);
                        
                        ThumbHTML.push('<div class="DOP_NextGENThumbnailScroller_ThumbContainer" id="DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+'">');
                        ThumbHTML.push('   <div class="DOP_NextGENThumbnailScroller_Thumb" id="DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no+'"></div>');
                        
                        if (ThumbnailsInfo == 'label' && (Title[no-1] != '' || LabelPosition == 'under')){
                            ThumbHTML.push('   <div class="label">');
                            ThumbHTML.push('       <div class="bg"></div>');
                            ThumbHTML.push('       <div class="text">'+Title[no-1]+'</div>');
                            ThumbHTML.push('   </div>');
                        }
                        ThumbHTML.push('</div>');
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            if (no == 1){
                                $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()+thumbnailWidth);
                            }
                            else{
                                $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()+thumbnailWidth+ThumbnailsSpacing);
                            }
                        }

                        $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).append(ThumbHTML.join(""));

                        $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no).css({'background-color': '#'+ThumbnailBgColor,
                                                                                   'border-color': '#'+ThumbnailBorderColor,
                                                                                   'border-width': ThumbnailBorderSize,
                                                                                   'height': thumbnailHeightNB,
                                                                                   'opacity': ThumbnailAlpha/100,
                                                                                   'width': thumbnailWidthNB});
                        $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no, Container).css({'margin-top': ThumbnailPaddingTop,
                                                                                     'margin-left': ThumbnailPaddingLeft,
                                                                                     'margin-bottom': ThumbnailPaddingBottom,
                                                                                     'margin-right': ThumbnailPaddingRight});
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no, Container).css('float', 'left');
                        }

                        if (no != '1'){
                            if (ThumbnailsPosition == 'horizontal'){
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no, Container).css('margin-left', ThumbnailsSpacing);
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no, Container).css('margin-top', ThumbnailsSpacing);
                            }
                        }

                        $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no, Container).addClass('DOP_NextGENThumbnailScroller_ThumbLoader');
                        $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+'.DOP_NextGENThumbnailScroller_ThumbLoader', Container).css('background-image', 'url('+ThumbnailLoader+')');

                        if (ThumbnailsPosition == 'horizontal'){
                            if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width() <= $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()){
                                prototypes.hCenterItem($('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailScroller_Thumbnails', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width());
                            }
                            else if (parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left')) >= 0){
                                $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left', 0);
                            }
                        }
                        else{
                            if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height() <= $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()){
                                prototypes.vCenterItem($('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailScroller_Thumbnails', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height());
                            }
                            else if (parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top')) >= 0){
                                $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top', 0);
                            }
                        }
                        
                        ThumbsLoaded[no] = false;
                    },
                    loadCompleteThumb:function(no){// Thumbnail Load complete event
                        var hiddenBustedItems = prototypes.doHideBuster($(Container));
                        
                        ThumbsLoaded[no] = true;
                        
                        $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+'.DOP_NextGENThumbnailScroller_ThumbLoader').css('background-image', 'none');
                        $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no).removeClass('DOP_NextGENThumbnailScroller_ThumbLoader');

                        if (Media[no-1] == ''){
                            prototypes.resizeItem2($('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no), $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children(), ThumbnailWidth, ThumbnailHeight, $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().width(), $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().height(), 'center');
                        }
                        
                        $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().css('opacity', 0);
                        $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().stop(true, true).animate({'opacity':'1'}, 600);
                        
                        methods.rpThumbnails();
                        
                        if (ThumbnailsInfo == 'label' && (Title[no-1] != '' || LabelPosition == 'under')){
                            if (LabelPosition == 'bottom' || LabelPosition == 'under'){
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css({'bottom': 0,
                                                                                                     'margin-left': ThumbnailPaddingLeft,
                                                                                                     'margin-bottom': ThumbnailPaddingBottom});
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css({'margin-left': ThumbnailPaddingLeft,
                                                                                                     'margin-top': ThumbnailPaddingTop,
                                                                                                     'top': 0});
                            }
                            
                            $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css({'display': 'block',
                                                                                                 'width': ThumbnailWidth});
                            if (LabelPosition == 'under'){
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').height(LabelUnderHeight);
                            }                                                                                             
                            $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .bg').css({'background-color': '#'+LabelBgColor,
                                                                                                     'height': LabelPosition == 'under' ? LabelUnderHeight:$('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .text').height()+parseFloat($('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .text').css('padding-top'))+parseFloat($('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .text').css('padding-bottom')),
                                                                                                     'opacity': LabelBgAlpha/100,
                                                                                                     'width': ThumbnailWidth});
                            $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .text').css('color', '#'+LabelTextColor);
                        
                            if (LabelAlwaysVisible == 'true' && ThumbnailsInfo == 'label' && (Title[no-1] != '' || LabelPosition == 'under')){
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css('display', 'block');    
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css('display', 'none');
                            }
                        }
                        
                        if (!prototypes.isTouchDevice()){
                            $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no, Container).hover(function(){
                                $(this).stop(true, true).animate({'opacity':ThumbnailAlphaHover/100}, 300);
                                $(this).css('background-color', '#'+ThumbnailBgColorHover);
                                $(this).css('border-color', '#'+ThumbnailBorderColorHover);

                                if (ThumbnailsInfo == 'tooltip' && !prototypes.isTouchDevice()){
                                    methods.showTooltip(no-1);
                                }

                                if (LabelAlwaysVisible == 'false' && ThumbnailsInfo == 'label' && Title[no-1] != ''){
                                    $('.label', this).stop(true, true).fadeIn(600);
                                }
                            },
                            function(){
                                $(this).stop(true, true).animate({'opacity': ThumbnailAlpha/100}, 300);
                                $(this).css('background-color', '#'+ThumbnailBgColor);
                                $(this).css('border-color', '#'+ThumbnailBorderColor);

                                if (ThumbnailsInfo == 'tooltip' && !prototypes.isTouchDevice()){
                                    $('.DOP_NextGENThumbnailScroller_Tooltip', Container).css('display', 'none');
                                }

                                if (LabelAlwaysVisible == 'false' && ThumbnailsInfo == 'label' && Title[no-1] != ''){
                                    $('.label', this).stop(true, true).fadeOut(600);
                                }
                            });
                        }
                        
                        if (Link[no-1] == 'none'){
                            $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no).css('cursor', 'default');
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no).click(function(){
                                if (Link[no-1] != ''){
                                    prototypes.openLink(Link[no-1], Target[no-1]);
                                }
                                else{
                                    if (LightboxEnabled ==  'true'){
                                        methods.showLightbox(no);
                                    }
                                }
                            });
                        }
                        
                        prototypes.undoHideBuster(hiddenBustedItems);
                    },
                    rpThumbnails:function(){// Resize & Position the Thumbnails
                        var hiddenBustedItems = prototypes.doHideBuster($(Container));
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css({'height': 2*ThumbnailsBorderSize+ThumbnailHeight+(2*ThumbnailBorderSize)+ThumbnailPaddingTop+ThumbnailPaddingBottom+ThumbnailsPaddingTop+ThumbnailsPaddingBottom+(ThumbnailsNavigationScrollEnabled == 'true' ? ThumbnailsSpacing+ThumbnailsScrollSize:0)+(LabelPosition == 'under' ? LabelUnderHeight:0),
                                                                                            'margin-top': ThumbnailsMarginTop+BgBorderSize,
                                                                                            'margin-right': ThumbnailsMarginRight,
                                                                                            'margin-bottom': ThumbnailsMarginBottom+BgBorderSize,
                                                                                            'margin-left': ThumbnailsMarginLeft,
                                                                                            'width': $('.DOP_NextGENThumbnailScroller_Container', Container).width()-ThumbnailsMarginRight-ThumbnailsMarginLeft});
                            
                            if (ThumbnailsNavigationArrowsEnabled == 'true'){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css({'margin-left': $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).width()+ThumbnailsMarginLeft, 
                                                                                                'width': $('.DOP_NextGENThumbnailScroller_Container', Container).width()-ThumbnailsMarginRight-ThumbnailsMarginLeft-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).width()});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css({'display': 'block',
                                                                                                     'margin-left': 0,
                                                                                                     'margin-top': (Height-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).height())/2});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css({'display': 'block',
                                                                                                     'margin-left': Width-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).width(),
                                                                                                     'margin-top': (Height-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).height())/2});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css('display', 'none');
                            }
                            
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).css({'background-color': '#'+ThumbnailsBgColor,
                                                                                     'border-color': ThumbnailsBorderColor,
                                                                                     'border-size': ThumbnailsBorderSize,
                                                                                     'height': $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).height()-2*ThumbnailsBorderSize,
                                                                                     'opacity': '#'+ThumbnailsBgAlpha,
                                                                                     'width': $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).width()-2*ThumbnailsBorderSize});
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).css({'height': $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).height()-ThumbnailsPaddingTop-ThumbnailsPaddingBottom-(ThumbnailsNavigationScrollEnabled == 'true' ? ThumbnailsSpacing+ThumbnailsScrollSize:0),
                                                                                          'margin-top': ThumbnailsPaddingTop+ThumbnailsBorderSize,
                                                                                          'margin-right': ThumbnailsPaddingRight,
                                                                                          'margin-bottom': ThumbnailsPaddingBottom+ThumbnailsBorderSize,
                                                                                          'margin-left': ThumbnailsPaddingLeft,
                                                                                          'width': $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).width()-ThumbnailsPaddingRight-ThumbnailsPaddingLeft});

                            if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width() <= $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()){
                                prototypes.hCenterItem($('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).width());
                                
                                if (ThumbnailsNavigationScrollEnabled == 'true'){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('display', 'none');                                    
                                }
                            }
                            else{   
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css('display', 'block');
                             
                                if (parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left')) >= 0){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left', 0);
                                }
                                
                                if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()+parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left')) < $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left', $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()-$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width());
                                }
                                
                                if (ThumbnailsNavigationScrollEnabled == 'true'){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('display', 'block');                                    
                                }
                            }
                        }
                        else if (ThumbnailsPosition == 'vertical'){    
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css({'height': $('.DOP_NextGENThumbnailScroller_Container', Container).height()-ThumbnailsMarginTop-ThumbnailsMarginBottom,
                                                                                            'margin-top': ThumbnailsMarginTop,
                                                                                            'margin-right': ThumbnailsMarginRight+BgBorderSize,
                                                                                            'margin-bottom': ThumbnailsMarginBottom,
                                                                                            'margin-left': ThumbnailsMarginLeft+BgBorderSize,
                                                                                            'width': 2*ThumbnailsBorderSize+ThumbnailWidth+(2*ThumbnailBorderSize)+ThumbnailPaddingRight+ThumbnailPaddingLeft+ThumbnailsPaddingRight+ThumbnailsPaddingLeft+(ThumbnailsNavigationScrollEnabled == 'true' ? ThumbnailsSpacing+ThumbnailsScrollSize:0)});
                                
                            if (ThumbnailsNavigationArrowsEnabled == 'true'){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css({'margin-top': $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev').height()+ThumbnailsMarginTop, 
                                                                                                'height': $('.DOP_NextGENThumbnailScroller_Container', Container).height()-ThumbnailsMarginTop-ThumbnailsMarginBottom-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev').height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext').height()});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css({'display': 'block',
                                                                                                     'margin-left': (Width-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev').width())/2,
                                                                                                     'margin-top': 0});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css({'display': 'block',
                                                                                                     'margin-left': (Width-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext').width())/2,
                                                                                                     'margin-top': Height-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext').height()});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css('display', 'none');
                            }
                            
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).css({'background-color': '#'+ThumbnailsBgColor,
                                                                                     'border-color': ThumbnailsBorderColor,
                                                                                     'border-size': ThumbnailsBorderSize,
                                                                                     'height': $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).height()-2*ThumbnailsBorderSize,
                                                                                     'opacity': '#'+ThumbnailsBgAlpha,
                                                                                     'width': $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).width()-2*ThumbnailsBorderSize});
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).css({'height': $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).height()-ThumbnailsPaddingTop-ThumbnailsPaddingBottom,
                                                                                          'margin-top': ThumbnailsPaddingTop,
                                                                                          'margin-right': ThumbnailsPaddingRight+ThumbnailsBorderSize,
                                                                                          'margin-bottom': ThumbnailsPaddingBottom,
                                                                                          'margin-left': ThumbnailsPaddingLeft+ThumbnailsBorderSize,
                                                                                          'width': $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).width()-ThumbnailsPaddingRight-ThumbnailsPaddingLeft-(ThumbnailsNavigationScrollEnabled == 'true' ? ThumbnailsSpacing+ThumbnailsScrollSize:0)});

                            if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height() <= $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()){
                                prototypes.vCenterItem($('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).height());
                                
                                if (ThumbnailsNavigationScrollEnabled == 'true'){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('display', 'none');                                    
                                }
                            }
                            else{   
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css('display', 'block');
                             
                                if (parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top')) >= 0){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top', 0);
                                }        
                                
                                if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()+parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top')) < $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top', $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()-$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height());
                                }
                                
                                if (ThumbnailsNavigationScrollEnabled == 'true'){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('display', 'block');                                    
                                }
                            }
                        }
                        
                        
                        if (ThumbnailsNavigationArrowsEnabled == 'true' && ($('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).width() < 2 || $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).width() < 2)){
                            setTimeout(function(){
                                methods.rpThumbnails();
                            }, 100);
                        }
                        
                        if (ThumbnailsNavigationScrollEnabled == 'true'){
                            methods.rpThumbnailsScroll();
                        }
                        
                        prototypes.undoHideBuster(hiddenBustedItems);
                    },
                    rpUltraResponsiveThumbnails:function(){// Resize & Position the Thumbnails
                        var hiddenBustedItems = prototypes.doHideBuster($(Container)), no,
                        thumbnailWidth = ThumbnailWidth+2*ThumbnailBorderSize+ThumbnailPaddingRight+ThumbnailPaddingLeft,
                        thumbnailWidthNB = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft,
                        thumbnailHeightNB = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+(LabelPosition == 'under' ? LabelUnderHeight:0);
                        
                        $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width(0);
                        $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left', 0);
                        
                        for (no=1; no<=noThumbs; no++){
                            if (ThumbnailsPosition == 'horizontal' && ThumbsLoaded[no]){
                                if (no == 1){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()+thumbnailWidth);
                                }
                                else{
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()+thumbnailWidth+ThumbnailsSpacing);
                                }
                            }
                        
                            $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no).css({'height': thumbnailHeightNB,
                                                                                       'width': thumbnailWidthNB});
                                                                               
                            if (Media[no-1] == ''){
                                prototypes.resizeItem2($('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no, Container), $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children(), ThumbnailWidth, ThumbnailHeight, $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().width(), $('#DOP_NextGENThumbnailScroller_Thumb_'+ID+'_'+no).children().height(), 'center');
                            }
                        }
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css({'height': 2*ThumbnailsBorderSize+ThumbnailHeight+(2*ThumbnailBorderSize)+ThumbnailPaddingTop+ThumbnailPaddingBottom+ThumbnailsPaddingTop+ThumbnailsPaddingBottom+(ThumbnailsNavigationScrollEnabled == 'true' ? ThumbnailsSpacing+ThumbnailsScrollSize:0)+(LabelPosition == 'under' ? LabelUnderHeight:0),
                                                                                            'width': $('.DOP_NextGENThumbnailScroller_Container', Container).width()-ThumbnailsMarginRight-ThumbnailsMarginLeft});
                            
                            if (ThumbnailsNavigationArrowsEnabled == 'true'){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css({'margin-left': $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).width()+ThumbnailsMarginLeft, 
                                                                                                'width': $('.DOP_NextGENThumbnailScroller_Container', Container).width()-ThumbnailsMarginRight-ThumbnailsMarginLeft-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).width()});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css({'display': 'block',
                                                                                                     'margin-left': 0,
                                                                                                     'margin-top': (Height-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).height())/2});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css({'display': 'block',
                                                                                                     'margin-left': Width-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).width(),
                                                                                                     'margin-top': (Height-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).height())/2});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css('display', 'none');
                            }
                            
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).css({'height': $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).height()-2*ThumbnailsBorderSize,
                                                                                     'width': $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).width()-2*ThumbnailsBorderSize});
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).css({'height': $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).height()-ThumbnailsPaddingTop-ThumbnailsPaddingBottom-(ThumbnailsNavigationScrollEnabled == 'true' ? ThumbnailsSpacing+ThumbnailsScrollSize:0),
                                                                                          'width': $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).width()-ThumbnailsPaddingRight-ThumbnailsPaddingLeft});

                            if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width() <= $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()){
                                prototypes.hCenterItem($('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).width());
                                
                                if (ThumbnailsNavigationScrollEnabled == 'true'){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('display', 'none');                                    
                                }
                            }
                            else{   
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css('display', 'block');
                             
                                if (parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left')) >= 0){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left', 0);
                                }
                                
                                if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()+parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left')) < $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left', $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()-$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width());
                                }
                                
                                if (ThumbnailsNavigationScrollEnabled == 'true'){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('display', 'block');                                    
                                }
                            }
                        }
                        else if (ThumbnailsPosition == 'vertical'){    
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css({'height': $('.DOP_NextGENThumbnailScroller_Container', Container).height()-ThumbnailsMarginTop-ThumbnailsMarginBottom,
                                                                                            'width': 2*ThumbnailsBorderSize+ThumbnailWidth+(2*ThumbnailBorderSize)+ThumbnailPaddingRight+ThumbnailPaddingLeft+ThumbnailsPaddingRight+ThumbnailsPaddingLeft+(ThumbnailsNavigationScrollEnabled == 'true' ? ThumbnailsSpacing+ThumbnailsScrollSize:0)});
                                
                            if (ThumbnailsNavigationArrowsEnabled == 'true'){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).css({'margin-top': $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev').height()+ThumbnailsMarginTop, 
                                                                                                'height': $('.DOP_NextGENThumbnailScroller_Container', Container).height()-ThumbnailsMarginTop-ThumbnailsMarginBottom-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev').height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext').height()});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css({'display': 'block',
                                                                                                     'margin-left': (Width-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev').width())/2,
                                                                                                     'margin-top': 0});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css({'display': 'block',
                                                                                                     'margin-left': (Width-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext').width())/2,
                                                                                                     'margin-top': Height-$('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext').height()});
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css('display', 'none');
                            }
                            
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).css({'height': $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).height()-2*ThumbnailsBorderSize,
                                                                                     'width': $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).width()-2*ThumbnailsBorderSize});
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).css({'height': $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).height()-ThumbnailsPaddingTop-ThumbnailsPaddingBottom,
                                                                                          'width': $('.DOP_NextGENThumbnailScroller_ThumbnailsBg', Container).width()-ThumbnailsPaddingRight-ThumbnailsPaddingLeft-(ThumbnailsNavigationScrollEnabled == 'true' ? ThumbnailsSpacing+ThumbnailsScrollSize:0)});

                            if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height() <= $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()){
                                prototypes.vCenterItem($('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).height());
                                
                                if (ThumbnailsNavigationScrollEnabled == 'true'){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('display', 'none');                                    
                                }
                            }
                            else{   
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).css('display', 'block');
                             
                                if (parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top')) >= 0){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top', 0);
                                }        
                                
                                if ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()+parseInt($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top')) < $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()){
                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top', $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()-$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height());
                                }
                                
                                if (ThumbnailsNavigationScrollEnabled == 'true'){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('display', 'block');                                    
                                }
                            }
                        }
                        
                        
                        if (ThumbnailsNavigationArrowsEnabled == 'true' && ($('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).width() < 2 || $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).width() < 2)){
                            setTimeout(function(){
                                methods.rpThumbnails();
                            }, 100);
                        }
                        
                        if (ThumbnailsNavigationScrollEnabled == 'true'){
                            methods.rpThumbnailsScroll();
                        }
                        
                        for (no=1; no<=noThumbs; no++){
                            if (ThumbnailsInfo == 'label' && (Title[no-1] != '' || LabelPosition == 'under')){
                                if (LabelPosition == 'bottom' || LabelPosition == 'under'){
                                    $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css({'bottom': 0,
                                                                                                         'margin-left': ThumbnailPaddingLeft,
                                                                                                         'margin-bottom': ThumbnailPaddingBottom});
                                }
                                else{
                                    $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css({'margin-left': ThumbnailPaddingLeft,
                                                                                                         'margin-top': ThumbnailPaddingTop,
                                                                                                         'top': 0});
                                }

                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css({'display': 'block',
                                                                                                     'width': ThumbnailWidth});
                                if (LabelPosition == 'under'){
                                    $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').height(LabelUnderHeight);
                                }                                                                                             
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .bg').css({'height': LabelPosition == 'under' ? LabelUnderHeight:$('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .text').height()+parseFloat($('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .text').css('padding-top'))+parseFloat($('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .text').css('padding-bottom')),
                                                                                                         'width': ThumbnailWidth});
                                $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label .text').css('color', '#'+LabelTextColor);

                                if (LabelAlwaysVisible == 'true' && ThumbnailsInfo == 'label' && (Title[no-1] != '' || LabelPosition == 'under')){
                                    $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css('display', 'block');    
                                }
                                else{
                                    $('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+no+' .label').css('display', 'none');
                                }
                            }
                        }
                        
                        prototypes.undoHideBuster(hiddenBustedItems);
                    },
                    moveThumbnails:function(){// Move Thumbnails
                        if (!prototypes.isTouchDevice()){                                
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).mousemove(function(e){
                                clearInterval(SlideshowID);
                                                                                                    
                                if ((ThumbnailsPosition == 'horizontal') && $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width() > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()){
                                    currentX = e.clientX-$(this).offset().left+parseInt($(this).css('margin-left'))+$(document).scrollLeft();
                                    
                                    if (currentX < $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()/3){
                                        movePrev = true;
                                        moveNext = false;
                                        methods.moveThumbnailsPrev();
                                    }
                                    else if (currentX > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()/3*2+parseInt($('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).css('margin-left'))){
                                        movePrev = false;
                                        moveNext = true;
                                        methods.moveThumbnailsNext();                                        
                                    }
                                    else{
                                        movePrev = false;
                                        moveNext = false;                                        
                                    }
                                }

                                if ((ThumbnailsPosition == 'vertical') && $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height() > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()){
                                    currentY = e.clientY-$(this).offset().top+parseInt($(this).css('margin-top'))+$(document).scrollTop();
                                    
                                    if (currentY < $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()/3){
                                        movePrev = true;
                                        moveNext = false;
                                        methods.moveThumbnailsPrev();
                                    }
                                    else if (currentY > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()/3*2+parseInt($('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).css('margin-top'))){
                                        movePrev = false;
                                        moveNext = true;
                                        methods.moveThumbnailsNext();                                        
                                    }
                                    else{
                                        movePrev = false;
                                        moveNext = false;                                        
                                    }
                                    
                                }
                            });
                            
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).hover(function(){
                                thumbnailsHover = true;       
                            },function(){
                                thumbnailsHover = false;
                                movePrev = false;
                                moveNext = false;
                            });
                        }
                    },
                    initThumbnailsScroll:function(){     
                        var thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize,
                        thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize+(LabelPosition == 'under' ? LabelUnderHeight:0),
                        moveTo, previousScrubPosition =0;
                        
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('background-color', '#'+ThumbnailsScrollBarColor);
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('background-color', '#'+ThumbnailsScrollScrubColor);
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).height(ThumbnailsScrollSize);
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).height(ThumbnailsScrollSize); 
                                                                                    
                            if (ThumbnailsScrollPosition == 'bottom/right'){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('bottom', 0);                                
                            }
                        }
                        else{     
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).width(ThumbnailsScrollSize);
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).width(ThumbnailsScrollSize); 
                            
                            if (ThumbnailsScrollPosition == 'bottom/right'){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).css('right', 0);                                
                            }                     
                        }
                                                   
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).draggable({axis: ThumbnailsPosition == 'horizontal' ? 'x':'y',
                                                                                                containment: $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container),
                                                                                                drag: function(event, ui){
                                                                                                    clearInterval(SlideshowID);
                                                                                                    if (ThumbnailsPosition == 'horizontal'){
                                                                                                        previousScrubPosition = parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'));
                                                                                                        $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left', (-1)*$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()*parseFloat($('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('left'))/$('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).width());
                                                                                                    }
                                                                                                    else{
                                                                                                        previousScrubPosition = parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'));
                                                                                                        $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top', (-1)*$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()*parseFloat($('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('top'))/$('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).height());
                                                                                                    }
                                                                                                },
                                                                                                stop: function(event, ui){
                                                                                                    if (ThumbnailsPosition == 'horizontal'){
                                                                                                        if (parseFloat($('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('left')) > 0){
                                                                                                            if (previousScrubPosition < parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))){
                                                                                                                moveTo = parseInt(parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))/(thumbnailWidth+ThumbnailsSpacing))*(thumbnailWidth+ThumbnailsSpacing);
                                                                                                            }
                                                                                                            else{
                                                                                                                moveTo = (parseInt(parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))/(thumbnailWidth+ThumbnailsSpacing))-1)*(thumbnailWidth+ThumbnailsSpacing);                                                                                                            
                                                                                                            }   
                                                                                                                                                                                                                        
                                                                                                            if (moveTo < (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width())){
                                                                                                                if (SlideshowEnabled == 'true'){
                                                                                                                    SlideshowLastImage = true;                                                                                                                
                                                                                                                }
                                                                                                                moveTo = (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width());
                                                                                                            }
                                                                                                            else{                                            
                                                                                                                if (SlideshowEnabled == 'true'){
                                                                                                                    SlideshowLastImage = false;                                                                                                                
                                                                                                                }
                                                                                                            }
                                                                                                            if (moveTo > 0){
                                                                                                                moveTo = 0;
                                                                                                            }

                                                                                                            arrowsClicked = true;

                                                                                                            $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, false).animate({'margin-left': moveTo}, ThumbnailsNavigationArrowsSpeed, ThumbnailsNavigationEasing, function(){
                                                                                                                arrowsClicked = false;
                                                                                                                methods.slideshow();
                                                                                                            });
                                                                                                        }
                                                                                                    }
                                                                                                    else{  
                                                                                                        if (parseFloat($('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('top')) > 0){
                                                                                                            if (previousScrubPosition < parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))){
                                                                                                                moveTo = parseInt(parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))/(thumbnailHeight+ThumbnailsSpacing))*(thumbnailHeight+ThumbnailsSpacing);
                                                                                                            }
                                                                                                            else{
                                                                                                                moveTo = (parseInt(parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))/(thumbnailHeight+ThumbnailsSpacing))-1)*(thumbnailHeight+ThumbnailsSpacing);                                                                                                            
                                                                                                            }   
                                                                                                            
                                                                                                            if (moveTo < (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height())){                                                                                                                
                                                                                                                if (SlideshowEnabled == 'true'){
                                                                                                                    SlideshowLastImage = true;                                                                                                                
                                                                                                                }
                                                                                                                moveTo = (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height());
                                                                                                            }
                                                                                                            else{                                            
                                                                                                                if (SlideshowEnabled == 'true'){
                                                                                                                    SlideshowLastImage = false;                                                                                                                
                                                                                                                }
                                                                                                            }
                                                                                                            if (moveTo > 0){
                                                                                                                moveTo = 0;
                                                                                                            }

                                                                                                            arrowsClicked = true;

                                                                                                            $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, false).animate({'margin-top': moveTo}, ThumbnailsNavigationArrowsSpeed, ThumbnailsNavigationEasing, function(){
                                                                                                                arrowsClicked = false;
                                                                                                                methods.slideshow();
                                                                                                            });
                                                                                                        }
                                                                                                    }
                                                                                                }});   
                    },
                    setThumbnailsScroll:function(){                         
                        var position;
                        
                        if (ThumbnailsPosition == 'horizontal'){     
                            position = (-1)*$('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).width()*parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))/$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width();
                            
                            if (position != Infinity){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('left', position);
                            }
                            else{
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('left', 0);
                            }
                        }
                        else{
                            position = (-1)*$('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).height()*parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))/$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height();
                            
                            if (position != Infinity){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('top', position);
                            }
                            else{
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).css('top', 0);
                            }
                        }
                        
                        setTimeout(function(){
                            methods.setThumbnailsScroll();
                        }, 50);
                    },
                    rpThumbnailsScroll:function(){
                        if (ThumbnailsPosition == 'horizontal'){
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).width($('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width());
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).width($('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).width()*$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()/$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width());
                        }
                        else{
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).height($('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height());
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsScrollScrub', Container).height($('.DOP_NextGENThumbnailScroller_ThumbnailsScroll', Container).height()*$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()/$('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height());
                        }
                    },
                    initThumbnailsArrows:function(){                        
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).click(function(){
                            methods.moveThumbnailsPrev();
                        });

                        $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).click(function(){
                            methods.moveThumbnailsNext();
                        });
                        
                        if (!prototypes.isTouchDevice()){      
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).hover(function(){
                                if (!$(this).hasClass('disabled')){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev .normal', Container).css('display', 'none');
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev .hover', Container).css('display', 'block');
                                }
                            }, function(){
                                if (!$(this).hasClass('disabled')){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev .normal', Container).css('display', 'block');
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev .hover', Container).css('display', 'none');
                                }
                            });  
                            
                            $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).hover(function(){
                                if (!$(this).hasClass('disabled')){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext .normal', Container).css('display', 'none');
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext .hover', Container).css('display', 'block');
                                }
                            }, function(){
                                if (!$(this).hasClass('disabled')){
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext .normal', Container).css('display', 'block');
                                    $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext .hover', Container).css('display', 'none');
                                }
                            });
                        }
                    },
                    setThumbnailsArrows:function(){     
                        if (ThumbnailsPosition == 'horizontal'){                                
                            if (parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left')) >= 0){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).addClass('disabled');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev .normal', Container).removeAttr('style');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev .hover', Container).removeAttr('style');
                            }
                            else{
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).removeClass('disabled');
                            }
                            
                            if (parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left')) <= (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width())){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).addClass('disabled');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext .normal', Container).removeAttr('style');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext .hover', Container).removeAttr('style');
                            }
                            else{
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).removeClass('disabled');
                            }                            
                        }
                        else if (ThumbnailsPosition == 'vertical'){
                            if (parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top')) >= 0){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).addClass('disabled');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev .normal', Container).removeAttr('style');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev .hover', Container).removeAttr('style');
                            }
                            else{
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationPrev', Container).removeClass('disabled');
                            }
                            
                            if (parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top')) <= (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height())){
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).addClass('disabled');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext .normal', Container).removeAttr('style');
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext .hover', Container).removeAttr('style');
                            }
                            else{
                                $('.DOP_NextGENThumbnailScroller_ThumbnailsNavigationNext', Container).removeClass('disabled');
                            }                        
                        }
                        
                        setTimeout(function(){
                            methods.setThumbnailsArrows();
                        }, 50);
                    },
                    positionThumbnails:function(){// Position thumbnails to be displayed when hidden.
                        var thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize,
                        thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize;
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            if ($('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+lightboxCurrentImage , Container).position().left < (-1)*(parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))+ThumbnailsSpacing)){
                                methods.moveThumbnailsPrev();
                            }
                            else if ($('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+lightboxCurrentImage , Container).position().left+thumbnailWidth > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()+(-1)*parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))){
                                methods.moveThumbnailsNext();
                            }
                        }
                        else{
                            if ($('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+lightboxCurrentImage , Container).position().top < (-1)*(parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))+ThumbnailsSpacing)){
                                methods.moveThumbnailsPrev();
                            }
                            else if ($('#DOP_NextGENThumbnailScroller_ThumbContainer_'+ID+'_'+lightboxCurrentImage , Container).position().top+thumbnailHeight > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()+(-1)*parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))){
                                methods.moveThumbnailsNext();
                            }                            
                        }
                    },
                    moveThumbnailsPrev:function(){      
                        var thumbnailWidth, thumbnailHeight, thumbnailsPosition;

                        if (!arrowsClicked){
                            clearInterval(SlideshowID);
                            arrowsClicked = true;
                            
                            if (ThumbnailsPosition == 'horizontal'){
                                thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize;
                                thumbnailsPosition =  parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))+ThumbnailsNavigationArrowsNoItemsSlide*(thumbnailWidth+ThumbnailsSpacing);

                                if (thumbnailsPosition <= (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width())){
                                    if (SlideshowEnabled == 'true'){
                                        SlideshowLastImage = true;                                                                                                                
                                    }
                                    thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width());
                                }
                                else{
                                    SlideshowLastImage = false;
                                }
                                
                                if (thumbnailsPosition > 0){
                                    thumbnailsPosition = 0;
                                }

                                $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, false).animate({'margin-left': thumbnailsPosition}, ThumbnailsNavigationArrowsSpeed, ThumbnailsNavigationEasing, function(){
                                    arrowsClicked = false;
                                    
                                    if (movePrev){
                                        methods.moveThumbnailsPrev();
                                    }
                                    else{
                                        if (SlideshowStatus == 'play'){
                                            if (SlideshowLastImage){
                                                if (SlideshowLoop == 'true'){
                                                    SlideshowID = setInterval(methods.lastSlideshow, SlideshowTime);
                                                }
                                            }
                                            else{
                                                SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);                                        
                                            }                                       
                                        }
                                    }
                                });
                            }
                            else{
                                thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize+(LabelPosition == 'under' ? LabelUnderHeight:0);
                                thumbnailsPosition =  parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))+ThumbnailsNavigationArrowsNoItemsSlide*(thumbnailHeight+ThumbnailsSpacing);

                                if (thumbnailsPosition <= (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height())){
                                    if (SlideshowEnabled == 'true'){
                                        SlideshowLastImage = true;                                                                                                                
                                    }
                                    thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height());
                                }
                                else{
                                    SlideshowLastImage = false;
                                }
                                
                                if (thumbnailsPosition > 0){
                                    thumbnailsPosition = 0;
                                }

                                $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, false).animate({'margin-top': thumbnailsPosition}, ThumbnailsNavigationArrowsSpeed, ThumbnailsNavigationEasing, function(){
                                    arrowsClicked = false;
                                    
                                    if (movePrev){
                                        methods.moveThumbnailsPrev();
                                    }
                                    else{
                                        if (SlideshowStatus == 'play'){
                                            if (SlideshowLastImage){
                                                if (SlideshowLoop == 'true'){
                                                    SlideshowID = setInterval(methods.lastSlideshow, SlideshowTime);
                                                }
                                            }
                                            else{
                                                SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);                                        
                                            }                                       
                                        }
                                    }
                                });                      
                            }
                        }
                    },
                    moveThumbnailsNext:function(){
                        var thumbnailWidth, thumbnailHeight, thumbnailsPosition;
                        
                        if (!arrowsClicked && 
                            (($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width() > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width() && ThumbnailsPosition == 'horizontal') || 
                            ($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height() > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height() && ThumbnailsPosition == 'vertical'))){
                            clearInterval(SlideshowID);
                            arrowsClicked = true;

                            if (ThumbnailsPosition == 'horizontal'){
                                thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize;
                                thumbnailsPosition = parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))-ThumbnailsNavigationArrowsNoItemsSlide*(thumbnailWidth+ThumbnailsSpacing);

                                if (thumbnailsPosition <= (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width())){
                                    if (SlideshowEnabled == 'true' && ThumbnailsNavigationLoop == 'false'){
                                        SlideshowLastImage = true;                                                                                                                
                                    }
                                    thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width());
                                }
                                else{
                                    SlideshowLastImage = false;
                                }
                                
                                if (thumbnailsPosition > 0){
                                    thumbnailsPosition = 0;
                                }

                                $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, false).animate({'margin-left': thumbnailsPosition}, ThumbnailsNavigationArrowsSpeed, ThumbnailsNavigationEasing, function(){
                                    arrowsClicked = false;
                                                                        
                                    if (ThumbnailsNavigationLoop == 'true'){   
                                        if (thumbnailsPosition <= (-1)*(noThumbs+1)*(thumbnailWidth+ThumbnailsSpacing)){
                                            $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left', (-1)*(thumbnailWidth+ThumbnailsSpacing-(noThumbs+1)*(thumbnailWidth+ThumbnailsSpacing)-parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-left'))));
                                        }
                                    }
                                    
                                    if (moveNext){
                                        if (currentX < $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()/2){
                                            movePrev = true;
                                            moveNext = false;
                                            methods.moveThumbnailsPrev();
                                        }
                                        else{
                                            movePrev = false;
                                            moveNext = true;
                                            methods.moveThumbnailsNext();                                            
                                        }
                                    }
                                    else{
                                        methods.slideshow();
                                    }
                                });
                            }
                            else{
                                thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize+(LabelPosition == 'under' ? LabelUnderHeight:0);
                                thumbnailsPosition = parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))-ThumbnailsNavigationArrowsNoItemsSlide*(thumbnailHeight+ThumbnailsSpacing);

                                if (thumbnailsPosition <= (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height())){
                                    if (SlideshowEnabled == 'true' && ThumbnailsNavigationLoop == 'false'){
                                        SlideshowLastImage = true;                                                                                                                
                                    }
                                    thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height());
                                }
                                else{
                                    SlideshowLastImage = false;
                                }
                                
                                if (thumbnailsPosition > 0){
                                    thumbnailsPosition = 0;
                                }

                                $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, false).animate({'margin-top': thumbnailsPosition}, ThumbnailsNavigationArrowsSpeed, ThumbnailsNavigationEasing, function(){
                                    arrowsClicked = false;
                                                                        
                                    if (ThumbnailsNavigationLoop == 'true'){   
                                        if (thumbnailsPosition <= (-1)*(noThumbs+1)*(thumbnailHeight+ThumbnailsSpacing)){
                                            $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top', (-1)*(thumbnailHeight+ThumbnailsSpacing-(noThumbs+1)*(thumbnailHeight+ThumbnailsSpacing)-parseFloat($('.DOP_NextGENThumbnailScroller_Thumbnails', Container).css('margin-top'))));
                                        }
                                    }
                                    
                                    if (moveNext){
                                        if (currentY < $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()/2){
                                            movePrev = true;
                                            moveNext = false;
                                            methods.moveThumbnailsPrev();
                                        }
                                        else{
                                            movePrev = false;
                                            moveNext = true;
                                            methods.moveThumbnailsNext();                                            
                                        }
                                    }
                                    else{
                                        methods.slideshow();
                                    }
                                });
                            }
                        }
                        else if (SlideshowEnabled == 'true'){
                            clearInterval(SlideshowID);
                            SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);                            
                        }
                    },
                    
                    initLightbox:function(){// Init Lightbox
                        startScrollerID = prototypes.$_GET('dop_thumbnail_scroller_id') != undefined ? parseInt(prototypes.$_GET('dop_thumbnail_scroller_id')):0;
                        startWith = prototypes.$_GET('dop_thumbnail_scroller_share') != undefined && startScrollerID == ID ? parseInt(prototypes.$_GET('dop_thumbnail_scroller_share')):0;
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxWindow').css({'background-color': '#'+LightboxWindowColor,
                                                                                                                                    'opacity': LightboxWindowAlpha/100});
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css({'border-color': '#'+LightboxBorderColor,
                                                                                                                                    'border-width': LightboxBorderSize});
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxBg').css({'background-color': '#'+LightboxBgColor,
                                                                                                                                'opacity': LightboxBgAlpha/100});
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').css({'color': '#'+LightboxCaptionTextColor,
                                                                                                                                     'margin-top': LightboxPaddingBottom,
                                                                                                                                     'margin-right': LightboxPaddingRight,
                                                                                                                                     'margin-bottom': LightboxPaddingBottom,
                                                                                                                                     'margin-left': LightboxPaddingLeft});
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').css({'background-color': '#'+LightboxNavigationInfoBgColor,
                                                                                                                                             'color': '#'+LightboxNavigationInfoTextColor});                                  

                        if (!prototypes.isTouchDevice()){                                                                                                               
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').hover(function(){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation').stop(true, true).animate({'opacity': 1}, LightboxNavigationDisplayTime);
                            }, function(){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation').stop(true, true).animate({'opacity': 0}, LightboxNavigationDisplayTime);
                            });
                        
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');                            
                            });
                        
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');                            
                            });
                        
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_CloseBtn').hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');                            
                            });
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation').css('opacity', 1);
                            
                            if (LightboxNavigationTouchDeviceSwipeEnabled == 'true'){
                                methods.lightboxNavigationSwipe();
                            }
                        }
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').click(function(){
                            methods.previousLightbox();
                        });
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').click(function(){
                            methods.nextLightbox();
                        });
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_CloseBtn').click(function(){
                           methods.hideLightbox();                           
                        });
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxWindow').click(function(){
                           methods.hideLightbox();                           
                        });
                        
                        $(document).keydown(function(e){
                            if (lightboxImageLoaded){
                                switch (e.keyCode){
                                    case 27:
                                        methods.hideLightbox();
                                        break;
                                    case 37:
                                        methods.previousLightbox();
                                        break;
                                    case 39:
                                        methods.nextLightbox();
                                        break;                                    
                                }
                            }
                        });
                        
                        if (startScrollerID == ID){
                            var href = window.location.href,
                            variables = 'dop_thumbnail_scroller_id='+startScrollerID+'&dop_thumbnail_scroller_share='+startWith;

                            if (href.indexOf('?'+variables) != -1){
                                variables = '?'+variables;
                            }
                            else{
                                variables = '&'+variables;
                            }
                                
                            window.location = '#DOPThumbnailScroller'+ID;
                            
                            try{
                                window.history.pushState({'html':'', 'pageTitle':document.title}, '', href.split(variables)[0]);
                            }catch(e){
                                //console.log(e);
                            }
                        }
                        
                        if (startWith != 0){
                            methods.showLightbox(startWith);
                            startWith = 0;
                        }
                    },
                    showLightbox:function(no){// Show Lightbox
                        methods.rpLightbox();
                        
                        if (SlideshowEnabled == 'true'){
                            clearInterval(SlideshowID);
                            SlideshowStatus = 'pause';
                        }
                        
                        if (prototypes.isTouchDevice()){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).css('display', 'block');  
                            
                            if (LightboxMedia[no-1] != ''){
                                methods.loadLightboxMedia(no);      
                            }
                            else{
                                methods.loadLightboxImage(no);
                            }
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).fadeIn(LightboxDisplayTime, function(){  
                                if (LightboxMedia[no-1] != ''){
                                    methods.loadLightboxMedia(no);      
                                }
                                else{
                                    methods.loadLightboxImage(no);
                                }
                            }); 
                        }
                    },
                    hideLightbox:function(){// Hide Lightbox
                        if (lightboxImageLoaded){
                            if (prototypes.isTouchDevice()){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).css('display', 'none');
                                lightboxCurrentImage = 0;
                                lightboxImageLoaded = false;
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('opacity', 0);
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').html('');

                                if (SlideshowEnabled == 'true'){
                                    SlideshowStatus = 'play';

                                    if (SlideshowLastImage){
                                        if (SlideshowLoop == 'true'){
                                            SlideshowID = setInterval(methods.lastSlideshow, SlideshowTime);
                                        }
                                    }
                                    else{
                                        SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);                                        
                                    }                                       
                                }
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).fadeOut(LightboxDisplayTime, function(){
                                    lightboxCurrentImage = 0;
                                    lightboxImageLoaded = false;
                                    $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('opacity', 0);
                                    $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').html('');

                                    if (SlideshowEnabled == 'true'){
                                        SlideshowStatus = 'play';

                                        if (SlideshowLastImage){
                                            if (SlideshowLoop == 'true'){
                                                SlideshowID = setInterval(methods.lastSlideshow, SlideshowTime);
                                            }
                                        }
                                        else{
                                            SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);                                        
                                        }                                       
                                    }
                                });
                            }
                        }
                    },
                    loadLightboxImage:function(no){// Load Lightbox Image
                        var img = new Image();   
                        lightboxImageLoaded = false;                     
                            
                        lightboxCurrentImage = no;
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').css('display', 'block');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info .current').html(no);
                        
                        if (no == 1){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').css('display', 'none');
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').css('display', 'block');
                        }
                        
                        if (no == noThumbs){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').css('display', 'none');
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').css('display', 'block');
                        }
                        
                        $(img).load(function(){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').css('display', 'none');
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').html(this);
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox img').attr('alt', Title[no-1]);
                            
                            if (SocialShareEnabled == 'true'){
                                methods.showSocialShare();
                            }
                            lightboxImageWidth = $(this).width();
                            lightboxImageHeight = $(this).height();
                            lightboxImageLoaded = true;
                            
                            if (Caption[no-1] != ''){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').html(Caption[no-1]);
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').css('display', 'block');                                
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').html('');
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').css('display', 'none');                                
                            }
                            
                            methods.rpLightboxImage();
                            
                            if (prototypes.isTouchDevice()){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('opacity', 1);
                                methods.positionThumbnails();
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').stop(true, true).animate({'opacity': 1}, LightboxDisplayTime, function(){
                                    methods.positionThumbnails();
                                });
                            }
                        }).attr('src', Images[no-1]);
                    },
                    loadLightboxMedia:function(no){// Load Lightbox Media                                
                        lightboxCurrentImage = no;
                        lightboxImageLoaded = false;
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').css('display', 'block');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info .current').html(no);
                        
                        if (no == 1){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').css('display', 'none');
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').css('display', 'block');
                        }
                        
                        if (no == noThumbs){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').css('display', 'none');
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').css('display', 'block');
                        }
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').css('display', 'none');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').html(LightboxMedia[no-1]);
                        
                        var iframeSRC =  $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().attr('src');

                        if (iframeSRC != null){
                            if (iframeSRC.indexOf('?') != -1){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().attr('src', iframeSRC+'&wmode=transparent');                                
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().attr('src', iframeSRC+'?wmode=transparent');
                            }
                        }

                        if ($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().prop("tagName") != undefined && 
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().prop("tagName").toUpperCase() == 'IFRAME'){
                            lightboxImageWidth = parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().attr('width'));
                            lightboxImageHeight = parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().attr('height'));
                        }
                        else{
                            lightboxImageWidth = 0;
                            lightboxImageHeight = 0;
                        }

                        lightboxImageLoaded = true;
                        
                        if (SocialShareEnabled == 'true'){
                            methods.showSocialShare();
                        }
                        
                        if (Caption[no-1] != ''){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').html(Caption[no-1]);
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').css('display', 'block');                                
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').html('');
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').css('display', 'none');                                
                        }
                        
                        methods.rpLightboxMedia();
                        
                        if (prototypes.isTouchDevice()){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('opacity', 1);
                            methods.positionThumbnails();
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').stop(true, true).animate({'opacity': 1}, LightboxDisplayTime, function(){
                                methods.positionThumbnails();
                            });
                        }
                    },
                    previousLightbox:function(){
                        if (lightboxCurrentImage > 1){
                            if (prototypes.isTouchDevice()){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('opacity', 0);
                                
                                if (LightboxMedia[lightboxCurrentImage-2] != ''){
                                    methods.loadLightboxMedia(lightboxCurrentImage-1);
                                }
                                else{
                                    methods.loadLightboxImage(lightboxCurrentImage-1);
                                }
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').stop(true, true).animate({'opacity': 0}, LightboxDisplayTime, function(){
                                    if (LightboxMedia[lightboxCurrentImage-2] != ''){
                                        methods.loadLightboxMedia(lightboxCurrentImage-1);
                                    }
                                    else{
                                        methods.loadLightboxImage(lightboxCurrentImage-1);
                                    }
                                });  
                            }
                        }
                    },
                    nextLightbox:function(){
                        if (lightboxCurrentImage < noThumbs){
                            if (prototypes.isTouchDevice()){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('opacity', 0);

                                if (LightboxMedia[lightboxCurrentImage] != ''){
                                    methods.loadLightboxMedia(lightboxCurrentImage+1);
                                }
                                else{
                                    methods.loadLightboxImage(lightboxCurrentImage+1);
                                }
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').stop(true, true).animate({'opacity': 0}, LightboxDisplayTime, function(){
                                    if (LightboxMedia[lightboxCurrentImage] != ''){
                                        methods.loadLightboxMedia(lightboxCurrentImage+1);
                                    }
                                    else{
                                        methods.loadLightboxImage(lightboxCurrentImage+1);
                                    }
                                }); 
                            }     
                        }
                    },
                    rpLightbox:function(){
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).css('display', 'none');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).width($(document).width()-1);
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).height($(document).height()-1);
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxWindow').width($(document).width()-1);
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxWindow').height($(document).height()-1);
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).css('display', 'block');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').css('display', 'block');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').css({'top': ($(window).height()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').height())/2,
                                                                                                                    'left': ($(window).width()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').width())/2});
                        if (lightboxCurrentImage == 0){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID).css('display', 'none');                         
                        }
                        
                        if (lightboxCurrentImage == 0 || lightboxImageLoaded){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxLoader').css('display', 'none');
                        }
                    },
                    rpLightboxImage:function(){// Resize & Position Lightbox Image
                        var maxWidth = $(window).width()-($(window).width() <= 640 && prototypes.isTouchDevice() ? 1:LightboxMarginRight)-($(window).width() <= 640 && prototypes.isTouchDevice() ? 1:LightboxMarginLeft)-LightboxPaddingRight-LightboxPaddingLeft-2*LightboxBorderSize, 
                        maxHeight = $(window).height()-($(window).width() <= 640 && prototypes.isTouchDevice() ? 1:LightboxMarginTop)-($(window).width() <= 640 && prototypes.isTouchDevice() ? 1:LightboxMarginBottom)-LightboxPaddingTop-LightboxPaddingBottom-2*LightboxBorderSize,
                        currW, currH;
                        
                        methods.rpLightbox();
                        
                        if (lightboxImageLoaded){  
                            if (lightboxImageWidth <= maxWidth && lightboxImageHeight <= maxHeight){
                                currW = lightboxImageWidth;
                                currH = lightboxImageHeight;
                            }
                            else{
                                currH = maxHeight;
                                currW = (lightboxImageWidth*maxHeight)/lightboxImageHeight;

                                if (currW > maxWidth){
                                    currW = maxWidth;
                                    currH = (lightboxImageHeight*maxWidth)/lightboxImageWidth;
                                }
                            }

                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox img').width(currW);
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox img').height(currH);
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox img').css({'margin-top': LightboxPaddingTop,
                                                                                                                        'margin-left': LightboxPaddingLeft});
                            
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width(currW+LightboxPaddingRight+LightboxPaddingLeft);
                            
                            if (Caption[lightboxCurrentImage-1] != ''){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height(currH+LightboxPaddingTop+2*LightboxPaddingBottom+$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').height());
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height(currH+LightboxPaddingTop+LightboxPaddingBottom);
                            }
                            
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxBg').width(currW+LightboxPaddingRight+LightboxPaddingLeft);
                                                        
                            if (Caption[lightboxCurrentImage-1] != ''){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxBg').height(currH+LightboxPaddingTop+2*LightboxPaddingBottom+$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').height());
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxBg').height(currH+LightboxPaddingTop+LightboxPaddingBottom);
                            }
                            
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css({'margin-top': ($(window).height()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height())/2+$(window).scrollTop()-LightboxBorderSize,
                                                                                                                             'margin-left': ($(window).width()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width())/2+$(window).scrollLeft()-LightboxBorderSize});
                            methods.rpLightboxNavigation();
                        }
                    },
                    rpLightboxMedia:function(){// Resize & Position Lightbox Media   
                        var maxWidth = $(window).width()-($(window).width() <= 640 && prototypes.isTouchDevice() ? 1:LightboxMarginRight)-($(window).width() <= 640 && prototypes.isTouchDevice() ? 1:LightboxMarginLeft)-LightboxPaddingRight-LightboxPaddingLeft-2*LightboxBorderSize,
                        maxHeight = $(window).height()-($(window).width() <= 640 && prototypes.isTouchDevice() ? 1:LightboxMarginTop)-($(window).width() <= 640 && prototypes.isTouchDevice() ? 1:LightboxMarginBottom)-LightboxPaddingTop-LightboxPaddingBottom-2*LightboxBorderSize,
                        currW, currH;
                        
                        methods.rpLightbox();
                        
                        if (lightboxImageWidth <= maxWidth && lightboxImageHeight <= maxHeight){
                            currW = lightboxImageWidth;
                            currH = lightboxImageHeight;
                            
                            if (lightboxImageWidth == 0 && lightboxImageHeight == 0){
                                currW = $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().width(),
                                currH = $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().height();
                            }
                        }
                        else{
                            currH = maxHeight;
                            currW = (lightboxImageWidth*maxHeight)/lightboxImageHeight;

                            if (currW > maxWidth){
                                currW = maxWidth;
                                currH = (lightboxImageHeight*maxWidth)/lightboxImageWidth;
                            }
                        }
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().width(currW);
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().height(currH);
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').children().css({'margin-top': LightboxPaddingTop,
                                                                                                                           'margin-left': LightboxPaddingLeft});
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_Lightbox').css({'height': currH,
                                                                                                                'width': currW});

                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width(currW+LightboxPaddingRight+LightboxPaddingLeft);
                        
                        if (Caption[lightboxCurrentImage-1] != ''){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height(currH+LightboxPaddingTop+2*LightboxPaddingBottom+$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').height());
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height(currH+LightboxPaddingTop+LightboxPaddingBottom);
                        }
                            
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxBg').width(currW+LightboxPaddingRight+LightboxPaddingLeft);
                        
                        if (Caption[lightboxCurrentImage-1] != ''){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxBg').height(currH+LightboxPaddingTop+2*LightboxPaddingBottom+$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').height());
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxBg').height(currH+LightboxPaddingTop+LightboxPaddingBottom);
                        }
                        
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css({'margin-top': ($(window).height()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height())/2+$(window).scrollTop()-LightboxBorderSize,
                                                                                                                         'margin-left': ($(window).width()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width())/2+$(window).scrollLeft()-LightboxBorderSize});                                                                                                                                                                                                                                              
                        methods.rpLightboxNavigation();
                    },
                    rpLightboxNavigation:function(){// Resize & Position Lightbox Navigation
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').css('display', 'block');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').css('display', 'block');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_CloseBtn').css('display', 'block');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').css('display', 'block');
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').css({'height': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn img:first-child').height(),
                                                                                                                                  'margin-top': ($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').height())/2,
                                                                                                                                  'margin-left': -20});
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').css({'height': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn img:first-child').height(),
                                                                                                                                  'margin-top': ($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').height())/2,
                                                                                                                                  'margin-left': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width()-LightboxPaddingRight-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').width()+LightboxPaddingRight+20});
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_CloseBtn').css({'height': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_CloseBtn img:first-child').height(),
                                                                                                                                   'margin-top': -20,
                                                                                                                                   'margin-left': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width()-LightboxPaddingRight-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_CloseBtn').width()});                            
                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_SocialShareBtn').css({'height': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_SocialShareBtn img:first-child').height(),
                                                                                                                                         'margin-top': -20,
                                                                                                                                         'margin-left': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width()-LightboxPaddingRight-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_SocialShareBtn').width()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_CloseBtn').width()-10});                            
                        if (Caption[lightboxCurrentImage-1] != ''){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').css({'margin-top': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height()-2*LightboxPaddingBottom-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').height()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxCaption').height(),
                                                                                                                                   'margin-left': ($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width()-($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').width()-parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').css('padding-left'))-parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').css('padding-right'))))/2});                                                
                        }
                        else{
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').css({'margin-top': $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').height()-LightboxPaddingBottom-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').height(),
                                                                                                                                   'margin-left': ($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width()-$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').width()-parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').css('padding-left'))-parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_Info').css('padding-right')))/2});                                                
                        }
                        
                        if (lightboxCurrentImage == 1){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_PrevBtn').css('display', 'none');
                        }
                        
                        if (lightboxCurrentImage == noThumbs){
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_NextBtn').css('display', 'none');
                        }
                    },
                    lightboxNavigationSwipe:function(){
                        var prev, curr, touch, initial, positionX;

                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').bind('touchstart', function(e){
                            touch = e.originalEvent.touches[0];
                            prev = touch.clientX;
                            initial = parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('margin-left')); 
                        });

                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').bind('touchmove', function(e){
                            e.preventDefault();
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation').css('opacity', 0);

                            touch = e.originalEvent.touches[0],
                            curr = touch.clientX,
                            positionX = curr>prev ? parseInt($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('margin-left'))+(curr-prev):parseInt($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('margin-left'))-(prev-curr);

                            prev = curr;
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('margin-left', positionX);
                        });

                        $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').bind('touchend', function(e){
                            if (!prototypes.isChromeMobileBrowser()){
                                e.preventDefault();
                            }
                            
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation').css('opacity', 1);
                                
                            if (parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('margin-left')) < 0 && lightboxCurrentImage < noThumbs){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css({'margin-left': initial, 'opacity': 0});
                                methods.nextLightbox();
                            }
                            else if (parseFloat($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('margin-left'))+$('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').width() > $(window).width() && lightboxCurrentImage > 1){
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css({'margin-left': initial, 'opacity': 0});
                                methods.previousLightbox();
                            }
                            else{
                                $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxContainer').css('margin-left', initial);
                            }
                        });
                    },
                                        
                    initSocialShare:function(){
                        var HTML = new Array();
                        
                        if ($('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_SocialShareBtn').html() == ''){
                            HTML.push('       <div class="addthis_toolbox addthis_default_style">');
                            HTML.push('            <a class="addthis_button" addthis:url="" addthis:title="">');
                            HTML.push('                <img src="'+SocialShareLightbox+'" alt="" />');
                            HTML.push('            </a>');
                            HTML.push('       </div>');
                        
                            $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_SocialShareBtn').html(HTML.join(''));
                        }
                    },
                    showSocialShare:function(){
                        var URL = window.location.href+(window.location.href.indexOf('?') != -1 ? '&':'?')+'dop_thumbnail_scroller_id='+ID+'&dop_thumbnail_scroller_share='+lightboxCurrentImage;
                        
                        if (window.addthis == undefined){
                            $.getScript( 'http://s7.addthis.com/js/250/addthis_widget.js' , function(){
                                if (window.addthis){ 
                                    window.addthis.ost = 0; 
                                    window.addthis.init();

                                    setTimeout(function(){
                                        window.addthis.update('share', 'url', URL);
                                        window.addthis.update('share', 'title', Title[lightboxCurrentImage-1]);
                                    }, 100);

                                    $('#at15s').css('top', parseFloat($('#at15s').css('top'))-$(window).scrollTop());
                                } 
                            }); 
                        }
                        else{
                            setTimeout(function(){
                                window.addthis.update('share', 'url', URL);
                                window.addthis.update('share', 'title', Title[lightboxCurrentImage-1]);
                            }, 100);
                        }
                        
                        clearInterval(socialShareInterval);
                        socialShareInterval = setInterval(methods.rpSocialShare, 100);
                    },
                    rpSocialShare:function(){
                        $('#at15s').css('top', $('#DOP_NextGENThumbnailScroller_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailScroller_LightboxNavigation_SocialShareBtn').offset().top);
                    },
                    
                    initTooltip:function(){// Init Tooltip                        
                        $('.DOP_NextGENThumbnailScroller_ThumbnailsContainer', Container).mousemove(function(e){
                            var mousePositionX = e.clientX-$(this).offset().left+parseInt($(this).css('margin-left'))+$(document).scrollLeft();
                            var mousePositionY = e.clientY-$(this).offset().top+parseInt($(this).css('margin-top'))+$(document).scrollTop();

                            $('.DOP_NextGENThumbnailScroller_Tooltip', Container).css('margin-left', mousePositionX-10);
                            $('.DOP_NextGENThumbnailScroller_Tooltip', Container).css('margin-top', mousePositionY-$('.DOP_NextGENThumbnailScroller_Tooltip', Container).height()-15);
                        });
                    },
                    showTooltip:function(no){// Resize, Position & Display the Tooltip
                        var HTML = new Array();
                        
                        HTML.push(Title[no]);
                        HTML.push('<div class="DOP_NextGENThumbnailScroller_Tooltip_ArrowBorder"></div>');
                        HTML.push('<div class="DOP_NextGENThumbnailScroller_Tooltip_Arrow"></div>');
                        $('.DOP_NextGENThumbnailScroller_Tooltip', Container).html(HTML.join(""));

                        if (TooltipBgColor != 'css'){
                            $('.DOP_NextGENThumbnailScroller_Tooltip', Container).css('background-color', '#'+TooltipBgColor);
                            $('.DOP_NextGENThumbnailScroller_Tooltip_Arrow', Container).css('border-top-color', '#'+TooltipBgColor);
                        }
                        if (TooltipStrokeColor != 'css'){
                            $('.DOP_NextGENThumbnailScroller_Tooltip', Container).css('border-color', '#'+TooltipStrokeColor);
                            $('.DOP_NextGENThumbnailScroller_Tooltip_ArrowBorder', Container).css('border-top-color', '#'+TooltipStrokeColor);
                        }
                        if (TooltipTextColor != 'css'){
                            $('.DOP_NextGENThumbnailScroller_Tooltip', Container).css('color', '#'+TooltipTextColor);
                        }
                        if (Title[no] != '' || prototypes.isTouchDevice()){
                            $('.DOP_NextGENThumbnailScroller_Tooltip', Container).css('display', 'block');
                        }
                    },
                    
                    initSlideshow:function(){
                        SlideshowStatus = 'play';                        
                        SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);
                    },
                    slideshow:function(){                                    
                        if (SlideshowStatus == 'play'){
                            if (SlideshowLastImage){
                                if (SlideshowLoop == 'true'){
                                    SlideshowID = setInterval(methods.lastSlideshow, SlideshowTime);
                                }
                            }
                            else{
                                SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);                                        
                            }                                       
                        }                        
                    },
                    lastSlideshow:function(){
                        arrowsClicked = true;
                        SlideshowLastImage = false;
                        clearInterval(SlideshowID);
                        
                        if (ThumbnailsPosition == 'horizontal'){
                            $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, false).animate({'margin-left': 0}, ThumbnailsNavigationArrowsSpeed, ThumbnailsNavigationEasing, function(){
                                arrowsClicked = false;
                                SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);
                            });
                        }
                        else{
                            $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, false).animate({'margin-top': 0}, ThumbnailsNavigationArrowsSpeed, ThumbnailsNavigationEasing, function(){
                                arrowsClicked = false;
                                SlideshowID = setInterval(methods.moveThumbnailsNext, SlideshowTime);
                            });
                        }                        
                    },
                    
                    touchNavigation:function(parent, child){// One finger Navigation for touchscreen devices
                        var prevX, prevY, currX, currY, lastX, lastY, touch, moveTo, thumbnailsPositionX, thumbnailsPositionY,
                        thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize,
                        thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize;
                            
                        parent.bind('touchstart', function(e){
                            touch = e.originalEvent.touches[0];
                            prevX = touch.clientX;
                            prevY = touch.clientY;
                        });
                            
                        parent.bind('touchmove', function(e){
                            touch = e.originalEvent.touches[0];
                            currX = touch.clientX;
                            currY = touch.clientY;
                            thumbnailsPositionX = currX>prevX ? parseInt(child.css('margin-left'))+(currX-prevX):parseInt(child.css('margin-left'))-(prevX-currX);
                            thumbnailsPositionY = currY>prevY ? parseInt(child.css('margin-top'))+(currY-prevY):parseInt(child.css('margin-top'))-(prevY-currY);

                            if (thumbnailsPositionX < (-1)*(child.width()-parent.width())){
                                thumbnailsPositionX = (-1)*(child.width()-parent.width());
                            }
                            else if (thumbnailsPositionX > 0){
                                thumbnailsPositionX = 0;
                            }
                            else{                                    
                                e.preventDefault();
                            }

                            if (thumbnailsPositionY < (-1)*(child.height()-parent.height())){
                                thumbnailsPositionY = (-1)*(child.height()-parent.height());
                            }
                            else if (thumbnailsPositionY > 0){
                                thumbnailsPositionY = 0;
                            }
                            else{                                    
                                e.preventDefault();
                            }
                            
                            lastX = prevX;
                            lastY = prevY;
                            prevX = currX;
                            prevY = currY;

                            if (parent.width() < child.width()){
                                child.css('margin-left', thumbnailsPositionX);
                            }

                            if (parent.height() < child.height()){
                                child.css('margin-top', thumbnailsPositionY);
                            }
                        });
                            
                        parent.bind('touchend', function(e){
                            if (!prototypes.isChromeMobileBrowser()){
                                e.preventDefault();
                            }

                            if (thumbnailsPositionX%(ThumbnailWidth+ThumbnailsSpacing) != 0){                                    
                                if ((ThumbnailsPosition == 'horizontal') && $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).width() > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).width()){
                                    if (lastX < touch.clientX){
                                        moveTo = parseInt(thumbnailsPositionX/(thumbnailWidth+ThumbnailsSpacing))*(thumbnailWidth+ThumbnailsSpacing);
                                    }
                                    else{
                                        moveTo = (parseInt(thumbnailsPositionX/(thumbnailWidth+ThumbnailsSpacing))-1)*(thumbnailWidth+ThumbnailsSpacing);
                                    }
                                    arrowsClicked = true;

                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, true).animate({'margin-left': moveTo}, ThumbnailsNavigationArrowsSpeed, function(){
                                        arrowsClicked = false;
                                    });
                                }
                            }

                            if (thumbnailsPositionY%(ThumbnailHeight+ThumbnailsSpacing) != 0){   
                                if ((ThumbnailsPosition == 'vertical') && $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).height() > $('.DOP_NextGENThumbnailScroller_ThumbnailsWrapper', Container).height()){
                                    if (lastY < touch.clientY){
                                        moveTo = parseInt(thumbnailsPositionY/(thumbnailHeight+ThumbnailsSpacing))*(thumbnailHeight+ThumbnailsSpacing);
                                    }
                                    else{
                                        moveTo = (parseInt(thumbnailsPositionY/(thumbnailHeight+ThumbnailsSpacing))-1)*(thumbnailHeight+ThumbnailsSpacing);
                                    }
                                    arrowsClicked = true;

                                    $('.DOP_NextGENThumbnailScroller_Thumbnails', Container).stop(true, true).animate({'margin-top': moveTo}, ThumbnailsNavigationArrowsSpeed, function(){
                                        arrowsClicked = false;
                                    });
                                }      
                            }
                        });
                    }
                  },        
                  
        prototypes = {
                        resizeItem:function(parent, child, cw, ch, dw, dh, pos){// Resize & Position an item (the item is 100% visible)
                            var currW = 0, currH = 0;

                            if (dw <= cw && dh <= ch){
                                currW = dw;
                                currH = dh;
                            }
                            else{
                                currH = ch;
                                currW = (dw*ch)/dh;

                                if (currW > cw){
                                    currW = cw;
                                    currH = (dh*cw)/dw;
                                }
                            }

                            child.width(currW);
                            child.height(currH);
                            switch(pos.toLowerCase()){
                                case 'top':
                                    prototypes.topItem(parent, child, ch);
                                    break;
                                case 'bottom':
                                    prototypes.bottomItem(parent, child, ch);
                                    break;
                                case 'left':
                                    prototypes.leftItem(parent, child, cw);
                                    break;
                                case 'right':
                                    prototypes.rightItem(parent, child, cw);
                                    break;
                                case 'horizontal-center':
                                    prototypes.hCenterItem(parent, child, cw);
                                    break;
                                case 'vertical-center':
                                    prototypes.vCenterItem(parent, child, ch);
                                    break;
                                case 'center':
                                    prototypes.centerItem(parent, child, cw, ch);
                                    break;
                                case 'top-left':
                                    prototypes.tlItem(parent, child, cw, ch);
                                    break;
                                case 'top-center':
                                    prototypes.tcItem(parent, child, cw, ch);
                                    break;
                                case 'top-right':
                                    prototypes.trItem(parent, child, cw, ch);
                                    break;
                                case 'middle-left':
                                    prototypes.mlItem(parent, child, cw, ch);
                                    break;
                                case 'middle-right':
                                    prototypes.mrItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-left':
                                    prototypes.blItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-center':
                                    prototypes.bcItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-right':
                                    prototypes.brItem(parent, child, cw, ch);
                                    break;
                            }
                        },
                        resizeItem2:function(parent, child, cw, ch, dw, dh, pos){// Resize & Position an item (the item covers all the container)
                            var currW = 0, currH = 0;

                            currH = ch;
                            currW = (dw*ch)/dh;

                            if (currW < cw){
                                currW = cw;
                                currH = (dh*cw)/dw;
                            }

                            child.width(currW);
                            child.height(currH);

                            switch(pos.toLowerCase()){
                                case 'top':
                                    prototypes.topItem(parent, child, ch);
                                    break;
                                case 'bottom':
                                    prototypes.bottomItem(parent, child, ch);
                                    break;
                                case 'left':
                                    prototypes.leftItem(parent, child, cw);
                                    break;
                                case 'right':
                                    prototypes.rightItem(parent, child, cw);
                                    break;
                                case 'horizontal-center':
                                    prototypes.hCenterItem(parent, child, cw);
                                    break;
                                case 'vertical-center':
                                    prototypes.vCenterItem(parent, child, ch);
                                    break;
                                case 'center':
                                    prototypes.centerItem(parent, child, cw, ch);
                                    break;
                                case 'top-left':
                                    prototypes.tlItem(parent, child, cw, ch);
                                    break;
                                case 'top-center':
                                    prototypes.tcItem(parent, child, cw, ch);
                                    break;
                                case 'top-right':
                                    prototypes.trItem(parent, child, cw, ch);
                                    break;
                                case 'middle-left':
                                    prototypes.mlItem(parent, child, cw, ch);
                                    break;
                                case 'middle-right':
                                    prototypes.mrItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-left':
                                    prototypes.blItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-center':
                                    prototypes.bcItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-right':
                                    prototypes.brItem(parent, child, cw, ch);
                                    break;
                            }
                        },

                        topItem:function(parent, child, ch){// Position item on Top
                            parent.height(ch);
                            child.css('margin-top', 0);
                        },
                        bottomItem:function(parent, child, ch){// Position item on Bottom
                            parent.height(ch);
                            child.css('margin-top', ch-child.height());
                        },
                        leftItem:function(parent, child, cw){// Position item on Left
                            parent.width(cw);
                            child.css('margin-left', 0);
                        },
                        rightItem:function(parent, child, cw){// Position item on Right
                            parent.width(cw);
                            child.css('margin-left', parent.width()-child.width());
                        },
                        hCenterItem:function(parent, child, cw){// Position item on Horizontal Center
                            parent.width(cw);
                            child.css('margin-left', (cw-child.width())/2);
                        },
                        vCenterItem:function(parent, child, ch){// Position item on Vertical Center
                            parent.height(ch);
                            child.css('margin-top', (ch-child.height())/2);
                        },
                        centerItem:function(parent, child, cw, ch){// Position item on Center
                            prototypes.hCenterItem(parent, child, cw);
                            prototypes.vCenterItem(parent, child, ch);
                        },
                        tlItem:function(parent, child, cw, ch){// Position item on Top-Left
                            prototypes.topItem(parent, child, ch);
                            prototypes.leftItem(parent, child, cw);
                        },
                        tcItem:function(parent, child, cw, ch){// Position item on Top-Center
                            prototypes.topItem(parent, child, ch);
                            prototypes.hCenterItem(parent, child, cw);
                        },
                        trItem:function(parent, child, cw, ch){// Position item on Top-Right
                            prototypes.topItem(parent, child, ch);
                            prototypes.rightItem(parent, child, cw);
                        },
                        mlItem:function(parent, child, cw, ch){// Position item on Middle-Left
                            prototypes.vCenterItem(parent, child, ch);
                            prototypes.leftItem(parent, child, cw);
                        },
                        mrItem:function(parent, child, cw, ch){// Position item on Middle-Right
                            prototypes.vCenterItem(parent, child, ch);
                            prototypes.rightItem(parent, child, cw);
                        },
                        blItem:function(parent, child, cw, ch){// Position item on Bottom-Left
                            prototypes.bottomItem(parent, child, ch);
                            prototypes.leftItem(parent, child, cw);
                        },
                        bcItem:function(parent, child, cw, ch){// Position item on Bottom-Center
                            prototypes.bottomItem(parent, child, ch);
                            prototypes.hCenterItem(parent, child, cw);
                        },
                        brItem:function(parent, child, cw, ch){// Position item on Bottom-Right
                            prototypes.bottomItem(parent, child, ch);
                            prototypes.rightItem(parent, child, cw);
                        },
                        
                        touchNavigation:function(parent, child){// One finger navigation for touchscreen devices
                            var prevX, prevY, currX, currY, touch, childX, childY;
                            
                            parent.bind('touchstart', function(e){
                                touch = e.originalEvent.touches[0];
                                prevX = touch.clientX;
                                prevY = touch.clientY;
                            });

                            parent.bind('touchmove', function(e){                                
                                touch = e.originalEvent.touches[0];
                                currX = touch.clientX;
                                currY = touch.clientY;
                                childX = currX>prevX ? parseInt(child.css('margin-left'))+(currX-prevX):parseInt(child.css('margin-left'))-(prevX-currX);
                                childY = currY>prevY ? parseInt(child.css('margin-top'))+(currY-prevY):parseInt(child.css('margin-top'))-(prevY-currY);

                                if (childX < (-1)*(child.width()-parent.width())){
                                    childX = (-1)*(child.width()-parent.width());
                                }
                                else if (childX > 0){
                                    childX = 0;
                                }
                                else{                                    
                                    e.preventDefault();
                                }

                                if (childY < (-1)*(child.height()-parent.height())){
                                    childY = (-1)*(child.height()-parent.height());
                                }
                                else if (childY > 0){
                                    childY = 0;
                                }
                                else{                                    
                                    e.preventDefault();
                                }

                                prevX = currX;
                                prevY = currY;

                                if (parent.width() < child.width()){
                                    child.css('margin-left', childX);
                                }
                                
                                if (parent.height() < child.height()){
                                    child.css('margin-top', childY);
                                }
                            });

                            parent.bind('touchend', function(e){
                                if (!prototypes.isChromeMobileBrowser()){
                                    e.preventDefault();
                                }
                            });
                        },

			rgb2hex:function(rgb){// Convert RGB color to HEX
                            var hexDigits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

                            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                            return (isNaN(rgb[1]) ? '00':hexDigits[(rgb[1]-rgb[1]%16)/16]+hexDigits[rgb[1]%16])+
                                   (isNaN(rgb[2]) ? '00':hexDigits[(rgb[2]-rgb[2]%16)/16]+hexDigits[rgb[2]%16])+
                                   (isNaN(rgb[3]) ? '00':hexDigits[(rgb[3]-rgb[3]%16)/16]+hexDigits[rgb[3]%16]);
			},
			idealTextColor:function(bgColor){// Set text color depending on the background color
			    var rgb = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(bgColor);
    
			    if (rgb != null){
			        return parseInt(rgb[1], 10)+parseInt(rgb[2], 10)+parseInt(rgb[3], 10) < 3*256/2 ? 'white' : 'black';
			    }
			    else{
			        return parseInt(bgColor.substring(0, 2), 16)+parseInt(bgColor.substring(2, 4), 16)+parseInt(bgColor.substring(4, 6), 16) < 3*256/2 ? 'white' : 'black';
			    }
			},

                        dateDiference:function(date1, date2){// Diference between 2 dates
                            var time1 = date1.getTime(),
                            time2 = date2.getTime(),
                            diff = Math.abs(time1-time2),
                            one_day = 1000*60*60*24;
                            
                            return parseInt(diff/(one_day))+1;
                        },
                        previousTime:function(time, size, type){
                            var timePieces = time.split(':'),
                            hours = parseInt(timePieces[0], 10),
                            minutes = timePieces[1] == undefined ? 0:parseInt(timePieces[1], 10),
                            seconds = timePieces[2] == undefined ? 0:parseInt(timePieces[2], 10);
                            
                            switch (type){
                                case 'seconds':
                                    seconds = seconds-size;
                                    
                                    if (seconds < 0){
                                        seconds = 60+seconds;
                                        minutes = minutes-1;
                                        
                                        if (minutes < 0){
                                            minutes = 60+minutes;
                                            hours = hours-1 < 0 ? 0:hours-1;
                                        }
                                    }
                                    break;
                                case 'minutes':
                                        minutes = minutes-size;
                                        
                                        if (minutes < 0){
                                            minutes = 60+minutes;
                                            hours = hours-1 < 0 ? 0:hours-1;
                                        }
                                    break;
                                default:
                                    hours = hours-size < 0 ? 0:hours-size;
                            }
                            
                            return prototypes.timeLongItem(hours)+(timePieces[1] == undefined ? '':':'+prototypes.timeLongItem(minutes)+(timePieces[2] == undefined ? '':':'+prototypes.timeLongItem(seconds)));
                        },
                        noDays:function(date1, date2){// Returns no of days between 2 days
                            var time1 = date1.getTime(),
                            time2 = date2.getTime(),
                            diff = Math.abs(time1-time2),
                            one_day = 1000*60*60*24;
                            
                            return Math.round(diff/(one_day))+1;
                        },
                        timeLongItem:function(item){// Return day/month with 0 in front if smaller then 10
                            if (item < 10){
                                return '0'+item;
                            }
                            else{
                                return item;
                            }
                        },
                        timeToAMPM:function(item){// Returns time in AM/PM format
                            var hour = parseInt(item.split(':')[0], 10),
                            minutes = item.split(':')[1],
                            result = '';
                            
                            if (hour == 0){
                                result = '12';
                            }
                            else if (hour > 12){
                                result = prototypes.timeLongItem(hour-12);
                            }
                            else{
                                result = prototypes.timeLongItem(hour);
                            }
                            
                            result += ':'+minutes+' '+(hour < 12 ? 'AM':'PM');
                            
                            return result;
                        },

                        stripslashes:function(str){// Remove slashes from string
                            return (str + '').replace(/\\(.?)/g, function (s, n1) {
                                switch (n1){
                                    case '\\':
                                        return '\\';
                                    case '0':
                                        return '\u0000';
                                    case '':
                                        return '';
                                    default:
                                        return n1;
                                }
                            });
                        },
                        
                        randomize:function(theArray){// Randomize the items of an array
                            theArray.sort(function(){
                                return 0.5-Math.random();
                            });
                            return theArray;
                        },
                        randomString:function(string_length){// Create a string with random elements
                            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
                            random_string = '';

                            for (var i=0; i<string_length; i++){
                                var rnum = Math.floor(Math.random()*chars.length);
                                random_string += chars.substring(rnum,rnum+1);
                            }
                            return random_string;
                        },

                        isIE8Browser:function(){// Detect the browser IE8
                            var isIE8 = false,
                            agent = navigator.userAgent.toLowerCase();

                            if (agent.indexOf('msie 8') != -1){
                                isIE8 = true;
                            }
                            return isIE8;
                        },
                        isIEBrowser:function(){// Detect the browser IE
                            var isIE = false,
                            agent = navigator.userAgent.toLowerCase();

                            if (agent.indexOf('msie') != -1){
                                isIE = true;
                            }
                            return isIE;
                        },
                        isChromeMobileBrowser:function(){// Detect the browser Mobile Chrome
                            var isChromeMobile = false,
                            agent = navigator.userAgent.toLowerCase();
                            
                            if ((agent.indexOf('chrome') != -1 || agent.indexOf('crios') != -1) && prototypes.isTouchDevice()){
                                isChromeMobile = true;
                            }
                            return isChromeMobile;
                        },
                        isAndroid:function(){// Detect the browser Mobile Chrome
                            var isAndroid = false,
                            agent = navigator.userAgent.toLowerCase();

                            if (agent.indexOf('android') != -1){
                                isAndroid = true;
                            }
                            return isAndroid;
                        },
                        isTouchDevice:function(){// Detect touchscreen devices
                            var os = navigator.platform;
                            
                            if (os.toLowerCase().indexOf('win') != -1){
                                return window.navigator.msMaxTouchPoints;
                            }
                            else {
                                return 'ontouchstart' in document;
                            }
                        },

                        openLink:function(url, target){// Open a link
                            switch (target.toLowerCase()){
                                case '_blank':
                                    window.open(url);
                                    break;
                                case '_top':
                                    top.location.href = url;
                                    break;
                                case '_parent':
                                    parent.location.href = url;
                                    break;
                                default:    
                                    window.location = url;
                            }
                        },

                        validateCharacters:function(str, allowedCharacters){// Verify if a string contains allowed characters
                            var characters = str.split(''), i;

                            for (i=0; i<characters.length; i++){
                                if (allowedCharacters.indexOf(characters[i]) == -1){
                                    return false;
                                }
                            }
                            return true;
                        },
                        cleanInput:function(input, allowedCharacters, firstNotAllowed, min){// Remove characters that aren't allowed from a string
                            var characters = $(input).val().split(''),
                            returnStr = '', i, startIndex = 0;

                            if (characters.length > 1 && characters[0] == firstNotAllowed){
                                startIndex = 1;
                            }
                            
                            for (i=startIndex; i<characters.length; i++){
                                if (allowedCharacters.indexOf(characters[i]) != -1){
                                    returnStr += characters[i];
                                }
                            }
                                
                            if (min > returnStr){
                                returnStr = min;
                            }
                            
                            $(input).val(returnStr);
                        },
                        validEmail:function(email){// Validate email
                            var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                            
                            if (filter.test(email)){
                                return true;
                            }
                            return false;
                        },
                        
                        $_GET:function(variable){// Parse $_GET variables
                            var url = window.location.href.split('?')[1],
                            variables = url != undefined ? url.split('&'):[],
                            i; 
                            
                            for (i=0; i<variables.length; i++){
                                if (variables[i].indexOf(variable) != -1){
                                    return variables[i].split('=')[1];
                                    break;
                                }
                            }
                            
                            return undefined;
                        },
                        acaoBuster:function(dataURL){// Access-Control-Allow-Origin buster
                            var topURL = window.location.href,
                            pathPiece1 = '', pathPiece2 = '';
                            
                            if (prototypes.getDomain(topURL) == prototypes.getDomain(dataURL)){
                                if (dataURL.indexOf('https') != -1 || dataURL.indexOf('http') != -1){
                                    if (topURL.indexOf('http://www.') != -1){
                                        pathPiece1 = 'http://www.';
                                    }
                                    else if (topURL.indexOf('http://') != -1){
                                        pathPiece1 = 'http://';
                                    }
                                    else if (topURL.indexOf('https://www.') != -1){
                                        pathPiece1 = 'https://www.';
                                    }
                                    else if (topURL.indexOf('https://') != -1){
                                        pathPiece1 = 'https://';
                                    }

                                    if (dataURL.indexOf('http://www.') != -1){
                                        pathPiece2 = dataURL.split('http://www.')[1];
                                    }
                                    else if (dataURL.indexOf('http://') != -1){
                                        pathPiece2 = dataURL.split('http://')[1];
                                    }
                                    else if (dataURL.indexOf('https://www.') != -1){
                                        pathPiece2 = dataURL.split('https://www.')[1];
                                    }
                                    else if (dataURL.indexOf('https://') != -1){
                                        pathPiece2 = dataURL.split('https://')[1];
                                    }

                                    return pathPiece1+pathPiece2;
                                }
                                else{
                                    return dataURL;
                                }
                            }
                            else{
                                return dataURL;
                            }
                        },
                        getDomain:function(url, includeSubdomain){
                            var domain = url;
                            includeSubdomain = includeSubdomain == undefined ? true:false;
 
                            domain = domain.replace(new RegExp(/^\s+/),""); // Remove white spaces from the begining of the url.
                            domain = domain.replace(new RegExp(/\s+$/),""); // Remove white spaces from the end of the url.
                            domain = domain.replace(new RegExp(/\\/g),"/"); // If found , convert back slashes to forward slashes.
                            domain = domain.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),""); // If there, removes 'http://', 'https://' or 'ftp://' from the begining.
                            domain = domain.replace(new RegExp(/^www\./i),""); // If there, removes 'www.' from the begining.
                            domain = domain.replace(new RegExp(/\/(.*)/),""); // Remove complete string from first forward slaash on.

                            return domain;
                        },
                        isSubdomain:function(url){
                            var subdomain;
 
                            url = url.replace(new RegExp(/^\s+/),""); // Remove white spaces from the begining of the url.
                            url = url.replace(new RegExp(/\s+$/),""); // Remove white spaces from the end of the url.
                            url = url.replace(new RegExp(/\\/g),"/"); // If found , convert back slashes to forward slashes.
                            url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),""); // If there, removes 'http://', 'https://' or 'ftp://' from the begining.
                            url = url.replace(new RegExp(/^www\./i),""); // If there, removes 'www.' from the begining.
                            url = url.replace(new RegExp(/\/(.*)/),""); // Remove complete string from first forward slaash on.
 
                            if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))){ // Remove '.??.??' or '.???.??' from end - e.g. '.CO.UK', '.COM.AU'
                                url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),"");
                            }
                            else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))){ // Removes '.??' or '.???' or '.????' from end - e.g. '.US', '.COM', '.INFO'
                                url = url.replace(new RegExp(/\.[a-z]{2,4}$/i),"");
                            }
                            subdomain = (url.match(new RegExp(/\./g))) ? true : false; // Check to see if there is a dot '.' left in the string.

                            return(subdomain);
                        },
                        
                        doHideBuster:function(item){// Make all parents & current item visible
                            var parent = item.parent(),
                            items = new Array();
                                
                            if (item.prop('tagName') != undefined && item.prop('tagName').toLowerCase() != 'body'){
                                items = prototypes.doHideBuster(parent);
                            }
                            
                            if (item.css('display') == 'none'){
                                item.css('display', 'block');
                                items.push(item);
                            }
                            
                            return items;
                        },
                        undoHideBuster:function(items){// Hide items in the array
                            var i;
                            
                            for (i=0; i<items.length; i++){
                                items[i].css('display', 'none');
                            }
                        },
                       
                        setCookie:function(c_name, value, expiredays){// Set cookie (name, value, expire in no days)
                            var exdate = new Date();
                            exdate.setDate(exdate.getDate()+expiredays);

                            document.cookie = c_name+"="+escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toUTCString())+";javahere=yes;path=/";
                        },
                        readCookie:function(name){// Read cookie (name) 
                            var nameEQ = name+"=",
                            ca = document.cookie.split(";");

                            for (var i=0; i<ca.length; i++){
                                var c = ca[i];

                                while (c.charAt(0)==" "){
                                    c = c.substring(1,c.length);            
                                } 

                                if (c.indexOf(nameEQ) == 0){
                                    return unescape(c.substring(nameEQ.length, c.length));
                                } 
                            }
                            return null;
                        },
                        deleteCookie:function(c_name, path, domain){// Delete cookie (name, path, domain)
                            if (readCookie(c_name)){
                                document.cookie = c_name+"="+((path) ? ";path="+path:"")+((domain) ? ";domain="+domain:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";
                            }
                        }
                    };

        return methods.init.apply(this);
    }
})(jQuery);