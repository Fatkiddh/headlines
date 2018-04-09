$(document).on("click", ".btn", function(){
  $.getJSON("/articles", function(data) {
    // For each one
    console.log(data);
    var button = document.createElement("Button");
    for (var i = 20; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append(
        "<p data-id='" + data[i]._id + "'>" + "<button id=saveArticle>" + "Save Article"  + "</button>" +
        data[i].title + "<br/>" + "</p>" +
        "<div id=description>'" + data[i].link + "</div>");
    }
  });
  bootbox.alert("Scrape Complete")
})
