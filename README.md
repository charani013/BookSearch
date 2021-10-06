# Book Search

Refer to the below image.

![book_search_output](https://user-images.githubusercontent.com/90957976/136212402-49c3a14c-63b6-47ea-80f7-542d77166643.gif)

Instructions:

- Add HTML input element with id searchInput inside an HTML container element
- Add HTML select element with id selectDisplayCount inside an HTML container element
- Add HTML container element with id searchResults

By following the above instructions, achieve the given functionality.

- When a value is entered in the HTML input element with id searchInput and press on Enter key
- Get title, imageLink, author (HTTP response with key search_results) by making HTTP request using fetch with URL https://apis.ccbp.in/book-store?title=kalam&maxResults=30
- Set imageLink in the HTML img element and set author in the HTML paragraph element
- When a value is entered in the HTML input element with id searchInput and an option is selected in the drop down
- Make a HTTP GET request to fetch the books based on the title entered and maximum number of results
- If search results not equal to zero, then append the search results to the HTML container element with id searchResults
- If search results equal to zero, then display "No results found"
- Add loading status with Bootstrap component spinner while making an HTTP request

Resources

Use this Background image:

https://assets.ccbp.in/frontend/dynamic-webapps/book-search-bg.png

**CSS Colors used:**

Text colors Hex code values used:

    #323f4b
    #ffffff

CSS Font families used:

    Roboto
