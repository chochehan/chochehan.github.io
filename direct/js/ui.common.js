


// <!-- 퍼블리싱용. 실제는 modal 함수로 변수처리하여 ajax 처리하기 -->
var modalBodySizeChange = false;
function modal(id, padding){
	
	var beforeWidth = $('body').width();
	jQuery('body').addClass('overflow');
	if($('body').width() != beforeWidth) {
		if($('.pageTitleArea').length > 0) {
			contentsWrap.css('padding-right',15);
			
		} else {
			contentsWrap.css({
				width : $('body').width() - $('#leftArea').width() + 15
			});
		}
		
		modalBodySizeChange = true;
	}
	
	$(id).show().addClass('modal');
	jQuery('.modal').show();
	layerPosition(padding);
	$('.modal').css('padding-bottom', (padding ? padding : 200) + 'px');
}
function modalClose(target){
	jQuery('body').removeClass('overflow');
	if(modalBodySizeChange == true) {
		if($('.pageTitleArea').length > 0) {
			contentsWrap.css('padding-right',0);
			
		} else {
			contentsWrap.css({
				width : $('body').width() - $('#leftArea').width() 
			});
		}
		modalBodySizeChange = false;
	}
	
	if(target != undefined) 
	{
		$(target).hide().removeClass('modal');//팝업 2개동시에 뜰때
		
	}
	else
	{
		$('.modal').hide();//팝업 1개뜰때 - target값을 따로 지정하지 않는 기존 함수 modalClose()
	}

}


//toggle tip box
function toggleTipBox(){
	var $btnToggle = $(".tipToggleArea .btn_toggle");
	$(".tipToggleArea .conts").show();
	$btnToggle.addClass('on');
	$btnToggle.on("click", function(e){
			e.preventDefault();
			var $this = $(this);
			var $conts =  $(".tipToggleArea .conts");
			$this.toggleClass("on");
			$conts.toggle();
	});
	
}

// 공통 callback 추가용도.
function addCallback(callback){
	commonCallbackArr.push(callback);
}

function runCallback(callbackArr){
	for(var idx in callbackArr){
		callbackArr[idx]();
	}
}

//table tool tip
function tbl_toolTip(){
	var tbl_toolTipArea = $('.toolTipArea');
	tbl_toolTipArea.find('em').on({
		mouseover : function(){
			$(this).find('.toolTip').css({
				'display' : 'inline-block'
			})
		},
		mouseleave : function(){
			$(this).find('.toolTip').css({
				'display' : 'none'
			})
		}
	})
}


//dashboard help show/hide
function dashHelpSet(){
	var $btnHelp = $(".dashboard_wrp .btn_help");
	var $btnClose = $(".diemed_help .btn_close");
	var $dimedHelp =  $("#diemed_help");
	var $allHelp =  $(".diemed_help");
	$btnHelp.on("click", function(e){
		e.preventDefault();
		$dimedHelp.show();
	
	});
	$btnClose.on("click", function(e){
			e.preventDefault();
			$allHelp.hide();
	});
	
}

// tab
$(document).ready(function(){
    $('ul.tabs').each(function(){
        var $active, $content, $links = $(this).find('a');
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('on');
        $content = $($active[0].hash);
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        $(this).on('click', 'a', function(e){
            $active.removeClass('on');
            $content.hide();

            $active = $(this);
            $content = $(this.hash);

            $active.addClass('on');
            $content.show();

            e.preventDefault();
        });
    });
})