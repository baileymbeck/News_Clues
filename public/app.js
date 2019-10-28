function displayResults(news) {
    // First, empty the table
    $("tbody").empty();

    // Then, for each entry of that json...
    news.forEach(function (article) {
        // Append each of the news properties to the table
        var tr = $("<tr>").append(
            $("<td>").text(article.title),
            $("<td>").text(article.link),
            $("<td>").text(article.button)
        );
        // function createButton(){
        //     var $input = $('<input type="button" value="new button" />');
        //     $input.appendTo($("body"));
        // }
        // createButton();
        $("tbody").append(tr);
    });
}

// Move to saved
function setSave(selector) {
    // changed button to saved, send to saved page
    
}
// 1: On Load
// ==========

// First thing: ask the back end for json with all articles
$.getJSON("/all", function (data) {
    // Call our function to generate a table body
    displayResults(data);
});

// 2: Buttons
// ======================

// When user clicks the save button, changed button name to saved & populate on saved page
$("#save-article").on("click", function () {
    // 
    setSave("#save-article");

    // Do an api call to the back end for json with all animals sorted by weight
    $.getJSON("/saved", function (data) {
        // Call our function to generate a table body
        displayResults(data);
    });
});
