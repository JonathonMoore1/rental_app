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
            newCard.addClass("card");
            newCard.attr("id", "newCard");
          var newImg = $("<img>");
            newImg.addClass("card-img-top");
            newImg.attr("src", imgURL);
          var cardTitle = $("<h4>");
            cardTitle.addClass("card-title");
              cardTitle.append(item);
          var newUL = $("<ul>");
            newUL.addClass("list-group list-group-flush");
          var description = $("<li>");
            description.addClass("list-group-item");
            description.attr("id", "describe");
              description.html(describe);
          var cat = $("<li>");
            cat.addClass("list-group-item");
              cat.html(category);
          var ra = $("<li>");
            ra.addClass("list-group-item");
              ra.html(rate);
          var loc = $("<li>");
            loc.addClass("list-group-item");
              loc.html(location);
          var na = $("<li>");     
            na.addClass("list-group-item");
              na.html(owner);
          newUL.append(describe, cat, ra, loc, na);
          newCard.append(newImg, cardTitle, newUL);
          $('#results').append(newCard);
        }
      }
      
      // //console.log(data);

    });
  });
});