const url = `https://covidtracking.com/api/v1/us/current.json`;


const deathEle = document.getElementById('death');
const hospEle = document.getElementById('hospitalized');
const recEle = document.getElementById('recovered');
const dateEle = document.getElementById('updated');

const gif = document.getElementById('gif');

async function getData(){
    const response = await fetch(url);
    const json = await response.json();
    const {death , dateChecked , recovered , hospitalizedCurrently} = json[0];
    deathEle.innerText = `Deaths : ${death}`;
    hospEle.innerText = `Currently Hospitalized : ${hospitalizedCurrently}`;
    recEle.innerText = `Recovered : ${recovered}`;
    dateEle.innerText = `Last updated on : ${dateChecked}`;
    gif.style.display='none';
    
}

setInterval(getData,10000); 
