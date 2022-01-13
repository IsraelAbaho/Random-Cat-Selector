const catPlaceholder = document.getElementById('catPlaceholder')
const CatBtn = document.getElementById('CatBtn')
CatBtn.addEventListener('click', addCat)

function addCat(){
    
   

    fetch(`https://aws.random.cat/meow`)
    .then(response => response.json())
    .then(data => {
      catPlaceholder.innerHTML = ` <img src="${data.file}" alt="Cat Image">`

});
}

