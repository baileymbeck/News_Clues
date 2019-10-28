function displayResults(news) {
    // First, empty the table
    $("tbody").empty();

    // Then, for each entry of that json...
    news.forEach(function (article) {
        // Append each of the news properties to the table
        var link = $("<a></a>").text(article.link)
        link.attr("href", article.link)
        var tr = $("<tr>").append(
            $("<td>").text(article.title),
            $("<td>").append(link),
            $("<button>Save</button>").addClass("save-article btn btn-primary btn-sm").attr("data-id",article._id)
        );
        
        $("tbody").append(tr);
    });
}

// Move to saved
function setSave(selector) {
    // changed button to saved, send to saved page - update favorite for true
    // Favorite/saved articles true/false
    
    
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
$(".save-article").on("click", function () {
    // 
    setSave(".save-article");

    // Do an api call to the back end for json with all animals sorted by weight
    $.getJSON("/saved", function (data) {
        // Call our function to generate a table body
        displayResults(data);
    });
});
