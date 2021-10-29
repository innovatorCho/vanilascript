const dday = document.querySelector("#dday");

function getChristmasDate() {

    const date = new Date();
    const year = date.getFullYear();
    const christmasDate = new Date(year,12,25);

    const term = christmasDate.getTime() - date.getTime();
    
    const day = Math.floor(term / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((term % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((term % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((term % (1000 * 60)) / 1000)).padStart(2, "0");
    
    dday.innerText = `${day} days ${hours} hours ${minutes} minutes ${seconds} second`;
}

getChristmasDate();
setInterval(getChristmasDate, 1000);