$( document ).ready(function() {
    var $headermenu = $('#headermenu');

    $('#headermenuicon span.closemenu').hide();

    if ($('#headermenuicon').css('visibility') === 'visible') {
        if ($('#headermenuicon span.openmenu').is(':visible') ) {
            $headermenu.hide();
        } else {
            $headermenu.show();
        }
    }

    $(window).resize(function(){
        if ($('#headermenuicon').css('visibility') === 'visible') {
            if ($('#headermenuicon span.openmenu').is(':visible') ) {
                $headermenu.hide();
            } else {
                $headermenu.show();
            }
        } else {
            $headermenu.show();
        }
    });

    $('#headermenuicon').click(function(eventObject) {
        var $this = $( this );

        eventObject.preventDefault();
        if ( $this.find('span.openmenu').is(':visible') ) {
            $headermenu.show();
            $this.find('span.openmenu').hide();
            $this.find('span.closemenu').show();
        } else {
            $headermenu.hide();
            $this.find('span.openmenu').show();
            $this.find('span.closemenu').hide();
        }
    });
});
