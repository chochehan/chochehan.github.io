


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
	}7

}







// tab
function test(){
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
}