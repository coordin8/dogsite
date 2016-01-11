
@import "./third_party/jquery-1.11.3.js";
@import "./third_party/jssor.slider.debug.js";
@import "./slider.js";



////////////////////////////////////////////////////////////////////////////
//////////////////////////////   Main Block   //////////////////////////////
////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {

  CreateNavBar( );
  InitSlider( );

});



////////////////////////////////////////////////////////////////////////////
///////////////////////////////   Nav Bar   ////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var navBarButtons = [ 'About', 'Our Dogs', 'Available', 'Pics and Videos', 'Contact' ];

// generate these buttons dynamically
function CreateNavBar()
{

  $('#headerImage').click(function() {
      window.location.href = './index.html';
  });

	$( "#mainHeader h1" ).text( 'SoCal Frenchies' );

	// create the buttons to focus each column
	for( columnIndex = navBarButtons.length-1; columnIndex >= 0; columnIndex-- )
	{
		var buttonText = navBarButtons[columnIndex];
		var button = $('<button></button>').text( buttonText );
		var listItem = $('<li></li>').append(button);
		listItem.attr('id', 'listItem_' + columnIndex );
		$("#mainHeaderList").append( listItem );

		$( listItem ).click(function()
		{

		});
	}

}
