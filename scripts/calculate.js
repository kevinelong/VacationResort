/*
// OLD SCHOOL INIT - works only if its the only listener to the onload event
function init(){
    //all deferred code here
}
window.onload = init;// wait until body content/html loaded into the window.
*/

document.addEventListener("DOMContentLoaded", () => { //BEGIN ANONYMOUS
    //INIT CODE GOES HERE
    document.getElementById("calculate").addEventListener("click", () => {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const checkinDate = document.getElementById("checkinDate").value;
        const nights = document.getElementById("nights").value;
        const adults = document.getElementById("adults").value;
        const children = document.getElementById("children").value;

        const queen = document.getElementById("queen").checked;
        const king = document.getElementById("king").checked;
        const suite = document.getElementById("suite").checked;

        const none = document.getElementById("none").checked;
        const senior = document.getElementById("senior").checked;
        const military = document.getElementById("military").checked;

    });
});