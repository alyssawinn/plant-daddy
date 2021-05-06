async function searchFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const category = document.querySelector('input[name="category"]').value;

    const response = await fetch(`/api/plants`, {
        method: 'GET',
        body: JSON.stringify({
            name,
            category,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.search-bar-form').addEventListener('submit', searchFormHandler);