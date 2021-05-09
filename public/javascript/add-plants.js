/* async function newMyPlantHandler(event) {
    event.preventDefault();

    //const addedPlant = document.querySelector('card plant-card');
    console.log("hi");

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
} */

/* document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'addButton'){
          console.log('hi');
     }
 });

 $(document).on('click','#addButton',function(){
     console.log('hi');
 }); */

 let addButton = document.querySelector('.add-btn');
 addButton.id = "addButton";
