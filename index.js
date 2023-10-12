function searchGame() {
    var store = document.getElementById("input").value.toLowerCase();
    var GameTitles =  ["Call of Duty","Mincraft","Mincraft","fifa 23","Red Dead Redemption 2","The last of us","Spider-Man 2","God of War"];
    var filteredTitles = GameTitles.filter(function (title) {
      return title.toLowerCase().includes(store);
    });
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";
    if (filteredTitles.length === 0) {
      resultsContainer.innerHTML = "Sorry that we haven't ur Game but indeed we will try to proved it for you soon";
    } else {
      var resultList = document.createElement("ul");
      filteredTitles.forEach(function (title) {
        var listItem = document.createElement("li");
        listItem.textContent = title;
        resultList.appendChild(listItem);
      });
      resultsContainer.appendChild(resultList);
    }
  }