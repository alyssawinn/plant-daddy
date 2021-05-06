async function newMyPlantHandler(event) {
    event.preventDefault();

    const addedPlant = document.querySelector('card plant-card');

    const response = await fetch('/api/plants', {
        method: 'POST',
        body: JSON.stringify({
            addedPlant
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

document.querySelector('.add-btn').addEventListener('click', newMyPlantHandler);