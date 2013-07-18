jQuery(document).ready(function($) {
    $('.gallery-filter').bind('propertychange keydown input paste', function(event) {
        var target = $(this).val();
        var items = $(this).parents('.gallery').find('.gallery-item');
        items.show();

        items.each(function() {
            var link = $(this).find('a');
            if (link && link.attr('title').match(new RegExp(target)) == null) {
                $(this).hide();
            }
        });
    });
});
