const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn = document.getElementById("btn");
const span = document.querySelector(".color");

btn.addEventListener("click", function(){
    const color = getRandomNumbar();
    document.body.style.backgroundColor = colors[color];
    span.textContent = colors[color];
})


function getRandomNumbar(){
    return Math.floor(Math.random()*colors.length);
}
