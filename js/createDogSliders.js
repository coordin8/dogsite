// vars to store json data
var websiteTitle;
var setting1;
var setting2;
var setting3;
var dogs;


// this function populates the dog sliders
function createDogSliders()
{

  // loading the json dat
  $.getJSON( "/data/dogData.json", function( data ) {

    websiteTitle = data["title"];
    settings1 = data["setting1"];
    settings2 = data["setting2"];
    settings3 = data["setting3"];
    dogs = data["dogs"];

    // populating website with dogs
    for( var dogIndex in dogs )
    {
      var name = dogs[dogIndex].name;
      var about = dogs[dogIndex].about;
      var born = dogs[dogIndex].born;
      var pics = dogs[dogIndex].pics;

      // temp printing of data
      console.log(name);
      console.log(about);
      console.log(born);
      for( var picIndex in pics )
      {
        var picLoc = pics[picIndex];
        console.log( picLoc );
      }
      console.log("\n\n");
    }
  });
}
