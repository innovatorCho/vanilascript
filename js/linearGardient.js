const click = document.querySelector("#onClick");
const body = document.querySelector("body");

const colors = ["#e7f8b4", "#dd3333", "#e8fbdf", "#9cee76", "#e876ee", "#f3e4f5", "#a496a5", "#1e73be", "#a8d1f4", "#fbfab6", "#eae74c"];

function getRandomColor(color) {

    const randomInt = Math.floor(Math.random() * colors.length);
    const chosenColor1 = colors[randomInt];

    if(color === undefined) {
        colors.splice(randomInt, 1);
    } else {
        colors.push(color);
    }
    
    return chosenColor1;
}

function onSubmit(event) {
    event.preventDefault();
    const chosenColor_1 = getRandomColor();
    const chosenColor_2 = getRandomColor(chosenColor_1);

    body.style.background = `linear-gradient(to left, ${chosenColor_1}, ${chosenColor_2})`;
}


click.addEventListener("click", onSubmit);
