$(document).on('ready', function () {

  $('#ownerSubmit').on('click', function (e) {
    e.preventDefault();
    alert('button clicked!')
    function trimIfString(val) {
      return typeof val === 'string' ? val.trim() : val;
    }

    var newItem = {
      username: trimIfString($('#userName').val()),
      item: trimIfString($('#item-name').val()),
      rate: trimIfString($('#item-price').val()),
      owner: trimIfString('placeholder'),
      location: trimIfString($('#item-location').val()),
      category: trimIfString($('#item-category').val()),
     // imgURL: trimIfString($('item-img').val()),
      description: trimIfString($('#item-description').val())
    };
    console.log(newItem);
    // $.ajax('/', {
    //   type: 'GET'
    // }).then(function() {
    //   console.log('GET request made');
    // })
    $.ajax('/api/rentals', {
      type: 'post',
      data: newItem
    }).then(function () {
      console.log("*** NEW RENTAL ADDED ***");
    })
  });
});

$('.modal').modal('show');

$("#submit-modal").on('click', function() {
  console.log("CLICKED!");

var userName = $('#userName').val().trim();
console.log(userName);

$.ajax({
  url : "/api/rental/",
  method: "GET"
  }).then(function(data) {
    console.log(data.length);
    for (i = 0; i < data.length; i++) {
      var name = data[i].username;
      var item = data[i].item;
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
  });
});