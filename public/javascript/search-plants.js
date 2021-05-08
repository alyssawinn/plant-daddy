async function searchFormHandler(event) {
    event.preventDefault();
    var initialSearch = true;

    const selectedName = document.getElementById("name").value;
    const selectedCategory = document.getElementById("category").value;

    if (!(selectedCategory === "") || !(selectedName === "")) {
        const response = await fetch(`/api/plantType`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.text())
    .then(data => data)

    /* if (response.ok) {
        document.location.reload();
    } else {
        var initialSearch = false;
        alert(response.statusText);
    }  */
    }

    
}

document.querySelector('.search-bar-form').addEventListener('submit', searchFormHandler);