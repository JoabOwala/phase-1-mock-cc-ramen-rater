// write your code here
const ramenMenu = document.querySelector("#ramen-menu")
// Set Up DOM
document.addEventListener("DOMContentLoaded", e => {
    console.log("DOM is ready")
})

//GET ramen DB
function getRamen(){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(fetchRamen)
}

function fetchRamen(list){
    list.forEach(finalRamen)
}

//push images to the DOM

function finalRamen(ramObj) {
    const ramenImage = document.createElement("img")
    ramenImage.src = ramObj.image
    ramenMenu.append(ramenImage)

    ramenImage.addEventListener("click", () => {
        const image = document.querySelector(".detail-image")
        image.src = ramObj.image
        image.alt = ramObj.name

        const name = document.querySelector(".name")
        name.textContent = ramObj.name
        
        const restaurant = document.querySelector(".restaurant")
        restaurant.textContent = ramObj.restaurant
        
        const ratings = document.querySelector("#rating-display")
        ratings.innerText = ramObj.rating

        const comments = document.querySelector("#comment-display")
        comments.innerText = ramObj.comment
    })
}

function ramenForm() {
    const ramenForm = document.getElementById("new-ramen")

    ramenForm.addEventListener("submit", e => {
    e.preventDefault()     
    
//new ramen 
    const replaceRamanObj = {}
    replaceRamanObj.name = document.querySelector("#new-name").value
    replaceRamanObj.restaurant = document.querySelector("#new-restaurant").value
    replaceRamanObj.image = document.querySelector("#new-image").value
    replaceRamanObj.rating = document.querySelector("#new-rating").value
    replaceRamanObj.comment = document.querySelector("#new-comment").value
    console.log(replaceRamanObj)


    const newRamenItem = document.createElement("img")
    newRamenItem.src = replaceRamanObj.image
    ramenMenu.append(newRamenItem)
    })
}

getRamen()
ramenForm()