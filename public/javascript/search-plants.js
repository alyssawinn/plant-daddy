async function searchFormHandler(event) {
    event.preventDefault();

    let selectedArray = [];
    let plantContainerEl = document.querySelector("#plant-container");
    plantContainerEl.textContent = "";
    let selectedName = document.getElementById("name").value;
    const selectedCategory = document.getElementById("category").value;
    selectedName = selectedName.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');


    if (!(selectedCategory === "") || !(selectedName === "")) {
        const response = await fetch(`/api/plantType/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                for (i = 0; i < data.length; i++) {
                    if ((selectedCategory == data[i].category.id)) {
                        selectedArray.push(data[i]);
                    } else if ((data[i].name.indexOf(selectedName) == 0) && (selectedName.length > 0)) {
                        selectedArray.push(data[i]);
                    }
                }
                if (selectedArray.length === 0) {
                    alert('No results. Please try again.')
                    document.location.reload();
                }
            })
    }

    for (i=0; i < selectedArray.length; i++) {
        let plantCard = document.createElement("div");
        plantCard.classList.add("card");
        plantCard.classList.add("plant-card");
        let plantCardBody = document.createElement("div");
        plantCard.appendChild(plantCardBody);
        let plantCardTitle = document.createElement("h2");
        plantCardTitle.classList.add("card-title");
        plantCardTitle.textContent = selectedArray[i].name;
        let plantCardCategory = document.createElement("p");
        plantCardCategory.classList.add("card-subtitle");
        plantCardCategory.classList.add("mb-2");
        plantCardCategory.classList.add("text-muted");
        plantCardCategory.classList.add("plant-cat");
        plantCardCategory.textContent = selectedArray[i].category.category;
        let plantCardImage = document.createElement("img");
        plantCardImage.setAttribute("src", "../images/fern.jpg");
        let plantCardWater = document.createElement("p");
        plantCardWater.classList.add("card-text");
        let plantCardWaterIcon = document.createElement("span");
        plantCardWaterIcon.classList.add("fas");
        plantCardWaterIcon.classList.add("fa-tint");
        let plantCardSunlight = document.createElement("p");
        plantCardSunlight.classList.add("card-text");
        let plantCardSunlightIcon = document.createElement("span");
        plantCardSunlightIcon.classList.add("fas");
        plantCardSunlightIcon.classList.add("fa-sun");
        plantCardWater.textContent = selectedArray[i].waterAmount + "  ";
        plantCardSunlight.textContent = selectedArray[i].sunlightAmount + "  ";
        plantCardWater.appendChild(plantCardWaterIcon);
        plantCardSunlight.appendChild(plantCardSunlightIcon);
        let plantCardAddButtonEl = document.createElement("div");
        plantCardAddButtonEl.classList.add("add-btn-el");
        plantCardAddButtonEl.classList.add("add-btn");
        let plantCardAddButton = document.createElement("button");
        plantCardAddButton.classList.add("btn");
        plantCardAddButton.classList.add("btn-primary");
        plantCardAddButton.classList.add("add-btn");
        plantCardAddButton.setAttribute("type", "submit");
        plantCardAddButton.textContent = "Add to My Plants";
        plantCardAddButtonEl.appendChild(plantCardAddButton);
        plantCard.appendChild(plantCardBody);
        plantCard.appendChild(plantCardTitle);
        plantCard.appendChild(plantCardCategory);
        plantCard.appendChild(plantCardImage);
        plantCard.appendChild(plantCardWater);
        plantCard.appendChild(plantCardSunlight);
        plantCard.appendChild(plantCardAddButtonEl);
        plantContainerEl.appendChild(plantCard);
    }


}
function getImage(data) {
    //api request to return url.

}

document.querySelector('.search-bar-form').addEventListener('submit', searchFormHandler);