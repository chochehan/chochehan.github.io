
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