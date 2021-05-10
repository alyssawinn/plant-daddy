async function addPlantHandler() {
    const response = await fetch(`/api/plantType/userPlant/`, {
        method: 'POST',
        body: JSON.stringify({
            user_id,
            plantType_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }

}

addPlantHandler();







