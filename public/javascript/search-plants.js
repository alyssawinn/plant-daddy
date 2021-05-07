async function searchFormHandler(event) {
    event.preventDefault();
    var initialSearch = true;

    const selectedCategory = document.getElementById("category").value;
    console.log(selectedCategory);

    /* const response = await fetch(`/api/plants`, {
        method: 'GET',
        body: JSON.stringify({
            category
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }); */

    /* fetch(`/api/plants`) */

    /* if (response.ok) {
        document.location.reload();
    } else {
        var initialSearch = false;
        alert(response.statusText);
    } */
}

document.querySelector('.search-bar-form').addEventListener('submit', searchFormHandler);