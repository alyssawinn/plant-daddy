async function addPlantHandler() {
    const response = await fetch('/api/plantType/userPlant/', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        //do nothing
    } else {
        alert(response.statusText);
    }

}

addPlantHandler();







