//http://api.weatherapi.com/v1/current.json?key=b8de0e533e46400c814174134242112&q=Los Angeles&aqi=no


const temparatureField = document.querySelector(".temp");
const locationField = document.querySelector(".location p");
const timeanddateField = document.querySelector(".time");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');


form.addEventListener('submit' , searchForLocation)


let target = 'Los Angeles'

const fetchResults = async (targetLocation) => {
    let url =`https://api.weatherapi.com/v1/current.json?key=b8de0e533e46400c814174134242112&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data  = await res.json()

    console.log(data)

    let location = data.location.name 
    let time = data.location.localtime 
    let temp = data.current.temp_f
    let condition = data.current.condition.text

    updateDetails(temp , location , time , condition);

}

function updateDetails(temp , location , time , condition) {
    temparatureField.innerText = temp;
    locationField.innerText = location;
    timeanddateField.innerText = time;
    conditionField.innerText = condition;
    
}

function searchForLocation(e){
    e.preventDefault()

    target = searchField.value 

    fetchResults(target)
    

}

fetchResults(target)
