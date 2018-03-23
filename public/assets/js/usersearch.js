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
        var imgURL = data[i].imgURL;
        var owner = data[i].owner;

        if (searchResults.location === location) {
          var newCard = $("<div>");
          var newImg = $("<img>");
          var newUL = $("<ul>");
          var cardTitle = $("<h5>");
          var desc = $("<p>");
          var cat = $("<li>");
          var ra = $("<li>");
          var loc = $("<li>");
          var na = $("<li>");
          cat.addClass("list-group-item");
          ra.addClass("list-group-item");
          loc.addClass("list-group-item");
          na.addClass("list-group-item");
          cat.html(category);
          ra.html(rate);
          loc.html(location);
          na.html(owner);
          cardTitle.addClass("card-title");
          cardTitle.append(item);
          desc.addClass("card-text");
          newUL.addClass("list-group list-group-flush");
          newUL.append(cat);
          newUL.append(ra);
          newUL.append(loc);
          newUL.append(na);
          newImg.addClass("card-img-top");
          newCard.addClass("card");
          newCard.attr("id", "newCard");
          newImg.attr("src", imgURL);
          newCard.append(newImg);
          newCard.append(cardTitle);
          newCard.append(describe);
          newCard.append(newUL);
          $('#results').append(newCard);
        }
      }
      
      // //console.log(data);

    });
  });
});