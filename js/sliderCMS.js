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

      var name = dogs[dogIndex].name;
      var about = dogs[dogIndex].about;
      var born = dogs[dogIndex].born;
      var pics = dogs[dogIndex].pics;
      var sliderID = "slider_" + sliderCount;

      // temp printing of data
      for( var picIndex in pics )
      {
        var picLoc = pics[picIndex];
      }

      // testtttttttttting
      var doggyData = {
          name: "test 123",
          time: "test 456",
          job: "test 789"
      };
      var template = $('#frenchSlider').html();
      var dogSlider = Mustache.to_html(template, doggyData);
      $('#middle').append(dogSlider);

      console.log("Attempted to dynamically create slider");


      sliderCount++;
    }

    // initialize the slider code once done loading
    JCarouselInit( );

  });
}
