$(function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 0,
	      max: 30000,
	      values: [ 0, 2000 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val( "" + ui.values[ 0 ] + " руб " +" до " + ui.values[ 1 ] + " руб");
	      }
	    });
	    $( "#amount" ).val( $( "#slider-range" ) + "".slider( "values", 0 ) +
	      " до" + $( "#slider-range" ) + "".slider( "values", 1 ) );
	  });