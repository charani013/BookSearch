let searchInputJs = document.getElementById("searchInput");

let searchResultsJs = document.getElementById("searchResults");

let spinnerJs = document.getElementById("spinner");

let selectDisplayCountJs = document.getElementById("selectDisplayCount");

function searchBookClicked(resultJs) {
    let {
        title,
        imageLink,
        author
    } = resultJs;

    let divContainer = document.createElement("div");
    divContainer.classList.add("col-6", "mb-4")
    searchResultsJs.appendChild(divContainer);

    let imageEl = document.createElement("img");
    imageEl.classList.add("image-size")
    imageEl.src = imageLink;
    divContainer.appendChild(imageEl);

    let paragraphEl = document.createElement("p");
    paragraphEl.classList.add("paragraphEl-class")
    paragraphEl.textContent = author;
    divContainer.appendChild(paragraphEl)

}


function searchImageClick(searchResults) {
    spinnerJs.classList.add("d-none");
    let headingElement = document.createElement("h1");
    headingElement.classList.add("heading-book-search2")
    searchResultsJs.appendChild(headingElement)


    if (searchResults.length === 0) {
        headingElement.textContent = "No result Found"
    } else {

        for (let result of searchResults) {
            headingElement.textContent = "Popular Books"
            searchBookClicked(result);
        }
    }
}


function searchBookClick(event, changeSelect) {
    spinnerJs.classList.remove("d-none");
    searchResultsJs.textContent = "";
    let searchInputValue = searchInputJs.value;
    let selectDisplayCountJsValue = selectDisplayCountJs.value;
    let url = "https://apis.ccbp.in/book-store?title=" + searchInputValue + "&maxResults=" + selectDisplayCountJsValue;
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                search_results
            } = jsonData;
            searchImageClick(search_results);
        });
}
searchInputJs.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchBookClick();
    }
});
selectDisplayCountJs.addEventListener("change", searchBookClick)