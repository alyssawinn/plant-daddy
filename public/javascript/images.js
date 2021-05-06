const formEl = document.querySelector('.-----')
const inputEl = document.querySelector('.------')

async function submitQuery(event) {
    console.log(event)

    event.preventDefault();
    //grab form input value
    //trim whitespace from form value
    const inputValue = inputEl.value.trim()
    //can choose amount of returned results with = srlimit=5
    //getting around CORS issues = origin=*
    const imageReturn = await fetch(
        '	https://api.cloudinary.com/v1_1/duryryfnr'
        +
        inputValue +
        '&api_key=642713395766141'

    ).then(response => response.json()) 
    console.log(imageReturn);
        //CALL imageResults 
    imageResults(imageReturn.response);
    
}


// form gets submitted

//function DECLARATION

//have to use the "thumbnail" for the image element.
//need to MAP the Arrays to get the image results of any search


function imageResults(response) {

    const imageSearchResults = document.querySelector('.-------')

    imageSearchResults.innerHTML= '';
            
            const image= document.createElement('img')
            image.setAttribute("src", result)
            //add padding to the images, and max width and height
            image.classList.add('p-8','w-full')
            return image
            
        };
                
    imageSearchResults.appendChild(item);
    console.log(item);
        


formEl.addEventListener('submit', submitQuery)