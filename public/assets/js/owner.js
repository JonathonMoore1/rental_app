$(document).on('ready', function () {

  $('#ownerSubmit').on('click', function (e) {
    e.preventDefault();

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
      imgURL: trimIfString($('item-img').val()),
      description: trimIfString($('#item-description').val())
    };
    console.log(newItem);
    $.ajax('/api/rentals', {
      type: 'POST',
      data: newItem
    }).then(function () {
      console.log("*** NEW RENTAL ADDED ***");
    })
  });
});