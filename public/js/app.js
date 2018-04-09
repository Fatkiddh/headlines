// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  var button = document.createElement("Button");
  for (var i = 170; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append(
      "<p data-id='" + data[i]._id + "'>" + "<button id=saveArticle>" + "Save Article"  + "</button>" +
      data[i].title + "<br/>" + "</p>" +
      "<div id=description>'" + data[i].link + "</div>");
  }
});
