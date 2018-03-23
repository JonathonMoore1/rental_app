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
      console.log(data);
      for (i = 0; i < data.length; i++) {
        var name = data[i].username;
        var item = data[i].item;
        var category = data[i].category;
        var describe = data[i].description;
        var location = data[i].location;
        var rate = data[i].rate;

        if ((searchResults.location === location) || (searchResults.item === item) || (searchResults.category === category)) {
          var newImage = $("<div>");
          newImage.addClass("card", "col-md-4");
          newImage.attr("id", "newCard");
          newImage.html("Item: " + item + "<br>" + "Category: " + category + "<br> " + "Location: " + location  + "<br>" + "Description: " + describe + "<br>" + "Rate: " + rate);
          $('#results').append(newImage);
        }
      }
      

      //console.log(data);

    });
  });
});