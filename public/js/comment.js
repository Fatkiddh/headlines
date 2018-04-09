// Whenever someone clicks a p tag
$(document).on("click", "#saveArticle", function() {
  // Empty the comments from the note section
  $("#comments").empty();
  // Save the id from the p tag
  var thisId = $(this).parent().attr("data-id");
  console.log(thisId);

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .then(function(data) {
      bootbox.prompt({
      title: `Note for article ${thisId}`,
      inputType: 'textarea',
      callback: function(result){ /* result = String containing user input if OK clicked or null if Cancel clicked */}
    })
  })
})
