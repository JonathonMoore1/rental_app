(() => {
  $('#submit').on('click', function(e) {
    e.preventDefault();

    if ($('#user-type').val() === 1) {
      $.ajax('/renter', {
        method: GET
      }).then(function() {
        console.log('*** Dislaying renter ***');
        location.reload();
      })
    }

    if ($('#user-type').val() === 2) {
      $.ajax('/owner', {
        method: GET
      }).then(function() {
        console.log('*** Displaying owner ***');
        location.reload();
      });
    }
  });
});