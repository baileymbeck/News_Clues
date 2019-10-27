function displayResults(news) {
    // First, empty the table
    $("tbody").empty();

    // Then, for each entry of that json...
    news.forEach(function (article) {
        // Append each of the news properties to the table
        var tr = $("<tr>").append(
            $("<td>").text(article.title),
            $("<td>").text(article.body)
        );

        $("tbody").append(tr);
    });
}
// 1: On Load
// ==========

// First thing: ask the back end for json with all articles
$.getJSON("/all", function (data) {
    // Call our function to generate a table body
    displayResults(data);
});

// Move to saved
function setSave(selector) {
    // changed button to saved, send to saved page
    
}

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

// When user clicks the name sort button, display the table sorted by name
$("#name-sort").on("click", function () {
    // Set new column as currently-sorted (active)
    setSave("#animal-name");

    // Do an api call to the back end for json with all animals sorted by name
    $.getJSON("/name", function (data) {
        // Call our function to generate a table body
        displayResults(data);
    });
});