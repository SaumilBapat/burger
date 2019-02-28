$(function() {
  $(".burgers").on("click", function(event) {
    var id = $(this).data("id");

    // Send the UPDATE request.
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".add-burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgerName")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
