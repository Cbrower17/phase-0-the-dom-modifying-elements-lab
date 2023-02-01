// Write your code here!
const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");


//document.querySelector('h1').setAttribute('id', 'victory');

//document.querySelector('h1').innerHTML = '<h1 id="victory">';

newHeader.setAttribute('id', 'victory');

newHeader.textContent = "Chris is the champion";

document.body.append(newHeader);