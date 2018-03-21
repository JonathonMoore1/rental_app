$(document).ready(function() {



  

  $('#submit').on('click', function(e) {

    var searchResults = {
    item : $('#itemSearch').val().trim(),
    category : $('#category').val().trim(),
    location : $('#locationSearch').val().trim(),
    dayFrom : $('#day').val().trim(),
    dayTo : $('#daytwo').val().trim()

    }

    console.log(searchResults);

    e.preventDefault();
    


    $.ajax({
      url : "/api/rental/",
      method: "GET"
    }).then(function(data) {
      var item = data[0].item;
      var category = data[0].category;
      var describe = data[0].description;
      var location = data[0].location;
      var rate = data[0].rate;


      var newImage = $("<div>");
      newImage.addClass("card", "col-md-4");
      newImage.html(item + category + describe + rate);
      $('#results').append(newImage);

      console.log(data);

    });
  });
});