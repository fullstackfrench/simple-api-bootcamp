//User enters brand and product or keyword and hits search 
//Entry is sent to API server
//API sends back information related to search 

document.querySelector('button').addEventListener('click', getMakeUp)

function getMakeUp(){
    let brand = document.querySelector('#brand').value.toLowerCase()
    let product = document.querySelector('#product').value.toLowerCase()
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${product}`)
    .then(response => response.json())
    .then(data => {
        reset();
        createUl(data);
    })
    .catch(err => {
        console.log(`error ${err}`)
    })


}

function createUl(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        let ul = document.createElement("ul")
        let liName = document.createElement("li")
        let liPrice = document.createElement("li")
        let liDescription = document.createElement("li")
        let liImage = document.createElement("li")
        
        let productInfo = [liName, liPrice, liDescription, liImage]

        liName.innerText = data[i].name
        liPrice.innerText = data[i].price
        liDescription.innerText = data[i].description
        liImage.innerHTML = `<img src="${data[i].image_link}">`

        document.querySelector('#displayResults').appendChild(ul)

        for(let j = 0; j < productInfo.length; j++) {
            ul.appendChild(productInfo[j])
        }

        
    }
}

function reset(){
    document.querySelector('#displayResults').innerHTML = ''
}