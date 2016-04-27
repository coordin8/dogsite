
@import "./third_party/jquery-1.11.3.js";
@import "./third_party/jcarousel.min.js";

@import "./jcarousel_responsive.js";
@import "./sliderCMS.js";
@import "./sliderJssor.js";



////////////////////////////////////////////////////////////////////////////
//////////////////////////////   Main Block   //////////////////////////////
////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {

  CreateNavBar( );
  ScrollNavBar( );
  SliderCreation( );

});

$(window).scroll(function (event) {
    ScrollNavBar();
});


////////////////////////////////////////////////////////////////////////////
///////////////////////////////   Nav Bar   ////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var navBarButtons = [ 'About', 'Available', 'Pics and Videos', 'Contact' ];

// generate these buttons dynamically
function CreateNavBar()
{

  $('#headerLogo').click(function() {
      window.location.href = './index.html';
  });

  $( "#headerTitle" ).text( 'Socal Frenchies' );


	// create the buttons to focus each column
	for( columnIndex = navBarButtons.length-1; columnIndex >= 0; columnIndex-- )
	{
		var buttonText = navBarButtons[columnIndex];
    var text = $('<h5></h5>').text( buttonText );
		var listItem = $('<li></li>').append(text);
		listItem.attr('id', 'listItem_' + columnIndex );
		$("#mainHeaderList").append( listItem );

		$( listItem ).click(function()
		{
      var id = $(this).attr('id');
      console.log("id clicked: " + id );
		});
	}
}

function ScrollNavBar()
{
  var scroll = $(window).scrollTop();
  if( scroll < 20 )
  {
    $("#mainHeaderBar").hide();
    //$("#mainHeaderBar").css("background-color", "transparent");
    //$("#headerTitle h5").css("color", "white");
    //$("#mainHeaderList button").css("color", "white");

  }
  else
  {
    $("#mainHeaderBar").show();
    //$("#mainHeaderBar").css("background-color", "#EEE");
    //$("#headerTitle h5").css("color", "black");
    //$("#mainHeaderList button").css("color", "black");
  }

}
