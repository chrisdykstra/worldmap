
document.getElementsByTagName("body")[0].addEventListener("click", clickedCountry);

function clickedCountry(eee){

    console.log(eee.target.parentElement.getAttribute ('title'));

}