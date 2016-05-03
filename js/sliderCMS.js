// vars to store json data
var websiteTitle;
var setting1;
var setting2;
var setting3;
var dogs;
var sliderCount = 0;


// this function populates the dog sliders
function SliderCreation()
{

  // loading the json dat
  $.getJSON( "/data/dogData.json", function( data ) {

    websiteTitle = data["title"];
    setting1 = data["setting1"];
    setting2 = data["setting2"];
    setting3 = data["setting3"];
    dogs = data["dogs"];

    // populating website with dogs
    for( var dogIndex in dogs )
    {
      var dogXML = dogs[dogIndex];
      var sliderID = "slider_" + sliderCount;
      sliderCount++;

      // setup mustache data
      var doggyData = {
          title: dogXML.title,
          description: dogXML.description,
          pics: dogXML.pics
      };
      var template = $('#frenchSlider').html();
      var dogSlider = Mustache.to_html(template, doggyData);
      $('#middle').append(dogSlider);

    }

    // initialize the slider code once done loading
    JCarouselInit( );

  });
}
