async function searchFormHandler(event) {
    event.preventDefault();

    const selectedArray = [];
    let selectedName = document.getElementById("name").value;
    const selectedCategory = document.getElementById("category").value;
    selectedName = selectedName.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');


    if (!(selectedCategory === "") || !(selectedName === "")) {
        const response = await fetch(`/api/plantType`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                for (i = 0; i < data.length; i++) {
                    if ((selectedCategory == data[i].category_id)) {
                        selectedArray.push(data[i]);
                    } else if ((data[i].name.indexOf(selectedName) == 0) && (selectedName.length > 0)) {
                        selectedArray.push(data[i]);
                    }
                }
                console.log(selectedArray);
                if (selectedArray.length === 0) {
                    alert('No results. Please try again.')
                    document.location.reload();
                }
            })
    }


}

document.querySelector('.search-bar-form').addEventListener('submit', searchFormHandler);