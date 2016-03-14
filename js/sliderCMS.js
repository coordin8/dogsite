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


      var slider = $("<div>", { class: "slider", id: sliderID }).appendTo( "#middle" );


      // start jssor slider creation
      var jssorSliderWrapper = $("<div>", { class: "jssorSliderWrapper" }).appendTo(slider);
      var jssorSlider = $("<div>", { class: "jssorSlider", id: "jssor_3" }).css({ "width":"780","height":"580" }).appendTo(jssorSliderWrapper);

      console.log("called creation");

      // loading screen
      var loading = $("<div>", { class: "loading" }).data( "u", "loading" ).appendTo(jssorSlider);  //------------ need data-u stuff
      var loading_div1 = $("<div>", { class: "loading_div1" }).appendTo(loading);
      var loading_div2 = $("<div>", { class: "loading_div2" }).appendTo(loading);
      // slide show
      var slides = $("<div>", { class: "slides"}).data( "u", "slides" ).css({ "width":"780","height":"580" }).appendTo(jssorSlider);  //------------ need data-u stuff
      var oneSlide = $("<div>").css('display','none').appendTo(slides);
      var oneSlideImg = $("<img>").data( "u", "image" ).attr('src', "images/IMG_0526.JPG" ).appendTo(oneSlide);


      /*
      <div style="display: none;">
        <img data-u="image" src="images/IMG_0526.JPG" />
      </div>
      */
      // bullet navigator


      // slider text
      var sliderText = $("<div>", { class: "sliderText" }).appendTo(slider);
      var sliderTextHeader = $("<h2>").text("testing testing1").appendTo( sliderText );
      var sliderTextBR = $("<b2>").appendTo( sliderText );
      var sliderTextP = $("<p>").text("lordsvcjk kdsfkd dsfkdfk dsfkdfsdk dfdfkl dfglfgl dflgdfgl").appendTo( sliderText );


      sliderCount++;
    }

    // initialize the slider code once done loading
    SliderDesign( );

  });
}
