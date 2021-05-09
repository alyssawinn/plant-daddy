async function addPlantHandler() {
    const response = await fetch('/api/userPlant', {
        method: 'POST',
        body: JSON.stringify({}),
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

addPlantHandler();







