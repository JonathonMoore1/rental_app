$('document').on('ready', function () {

  $('#owner-submit').on('click', function (e) {
    e.preventDefault();

    var newItem = {
      username: $('#userName').val().trim(),
      item: $('#item-name').val().trim(),
      rate: $('#item-price').val().trim(),
      owner: 'placeholder',
      location: $('#item-location').val().trim(),
      category: $('#item-category').val().trim(),
      imgURL: $('item-img').val().trim(),
      description: $('#item-description').val().trim()
    };

    $.ajax('/api/rentals', {
      type: 'POST',
      data: newItem
    }).then(function () {
      console.log("*** NEW RENTAL ADDED ***");
    })
  });
});