function loadCategories() {
    // 1- fetch the data

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

        // 2- convert promise to json
        .then((res) => res.json())

        // 3- send data to display
        .then((data) => displayCategories(data.categories));
}

// {
//     "category_id": "1001",
//     "category": "Music"
//   }
function displayCategories(categories) {
    // get the container 

    const categoryContainer = document.getElementById("category-container");

    // Loop operation on Array of object
    for (let cat of categories) {
        
        // Create element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm  hover:bg-[#FF1F3D]  hover:text-white">${cat.category}</button>

        `;

        // Append the element
        categoryContainer.append(categoryDiv);
    }

}

loadCategories();