$(window).on('load',function(){
  console.log("show modal");
    $('.modal').modal('show');
});

  $("#resultsModal").on('click', function() {

  var userName = $('#userName').val().trim();
  console.log(userName);

  $.ajax({
      url : "/api/rental/",
      method: "GET"
    }).then(function(data) {
      console.log(data.length);
      for (i = 0; i < data.length; i++) {
        var name = data[i].username;
        var item = data[i].item
        var category = data[i].category;
        var describe = data[i].description;
        var location = data[i].location;
        var rate = data[i].rate;

        if (userName === name) {
          $('.modal').modal('hide');
          var newImage = $("<div>");
          newImage.addClass("card", "col-md-4");
          newImage.attr("id", "newCard");
          newImage.html("Item: " + item + "<br>" + "Category: " + category + "<br> " + "Location: " + location  + "<br>" + "Description: " + describe + "<br>" + "Rate: " + rate);
          $('#results').append(newImage);
        }
        else {
          $('.modalInfo').html("Invalid username");
          $('#newUser').css("display", "block");
        }

      }
      

      //console.log(data);

    });

});


$("#owner-submit").on('click', function() {
	$.ajax({
		url:queryURL,
		method:"GET"
	}).done(function(response) {
		console.log(response);
	})
})