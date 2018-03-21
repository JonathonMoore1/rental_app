$('document').on('ready', function(e) {
  e.preventDefault();

  var newItem = {
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
  }).then(function() {
    console.log("*** NEW RENTAL ADDED ***");
  })

});