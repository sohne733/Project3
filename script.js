function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Clear previous search results

    // Perform your search logic here
    // For demonstration purposes, let's just display the search query
    var result = document.createElement("p");
    result.textContent = "Search query: " + input;
    resultsContainer.appendChild(result);
}

// fetch('https://data.cityofnewyork.us/resource/wshr-5vic.json')
// .then (res => {
//     return res.json();
// })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error));
    