document.getElementById("search-bar").addEventListener("keyup", function () {
    let searchText = this.value.toLowerCase();
    let categories = document.querySelectorAll(".resource-category");

    categories.forEach(category => {
        let categoryName = category.querySelector("h3").textContent.toLowerCase();
        let resources = category.querySelectorAll("ul li");
        let categoryMatch = categoryName.includes(searchText);
        let matchFound = false;

        resources.forEach(resource => {
            let resourceText = resource.textContent.toLowerCase();
            if (resourceText.includes(searchText) || categoryMatch) {
                resource.style.display = "block";
                matchFound = true;
            } else {
                resource.style.display = "none";
            }
        });

        category.style.display = matchFound ? "block" : "none";
    });
});
