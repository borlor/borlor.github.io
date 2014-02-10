$( document ).ready(function() {
    var $headermenu = $('#headermenu');

    $('#headermenuicon span.closemenu').hide();

    console.log($('#gmap'));
    if ($('#gmap').is(':visible')) {
        console.log("Im in");
        new Maplace({
            locations: [{
                lat: 43.47,
                lon: -80.54,
                title: 'University of Waterloo',
                generate_controls: false, 
                icon: 'https://uwaterloo.ca/brand-guidelines/sites/ca.brand-guidelines/files/resize/uploads/images/universityofwaterloo_logo_horiz_rgb_0-300x120.png', 
                zoom: 12
            }]
        }).Load();
    }

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
