
// setInterval
// setTimeout(update, 10000);

let tomatoes = 0;
let tomatoadder = 0;
let tomatofactor = 0;
let knifefactor = 8;
let knives = 0;
let blenders = 0;
let juicers = 0;
let blenderfactor = 50;
let juicerfactor = 200;
let knifemultiplier = 1;
let blendermultiplier = 1;
let juicermultiplier = 1;
let tomatolabel = document.querySelector(".tomato-label");
let button = document.querySelector(".tomato-button");
let knifebutton = document.querySelector(".knife-button");
let knifelabel = document.querySelector(".knife-label");
let knifenumber = document.querySelector(".knife-number");
let blenderbutton = document.querySelector(".blender-button");
let blenderlabel = document.querySelector(".blender-label");
let blendernumber = document.querySelector(".blender-number")
let juicerbutton = document.querySelector(".juicer-button");
let juicerlabel = document.querySelector(".juicer-label");
let juicernumber = document.querySelector(".juicer-number")

let boardfactor = 400;
let oilfactor = 1000;
let saltfactor = 5000;
let pepperfactor = 20000;
let boardbutton = document.querySelector(".board-button")
let oilbutton = document.querySelector(".oil-button")
let saltbutton = document.querySelector(".salt-button")
let pepperbutton = document.querySelector(".pepper-button")

let inventory = [];
let inventoryList = document.querySelector(".inventory-list");


// button.addEventListener("click", addTomato);
knifebutton.addEventListener("click", buyKnife);
blenderbutton.addEventListener("click", buyBlender);
juicerbutton.addEventListener("click", buyJuicer);

boardbutton.addEventListener("click", buyBoard);
oilbutton.addEventListener("click", buyOil);
saltbutton.addEventListener("click", buySalt);

function buyKnife() {
    if (tomatoes >= knifefactor) {
        tomatoes -= knifefactor;
        knives = knives + 1;
        knifenumber.innerHTML = knives;
        tomatofactor = tomatofactor + 1 * knifemultiplier;
        knifefactor = Math.round(knifefactor + knifefactor*0.3);
        knifelabel.innerHTML = knifefactor;
        
        update();
    }

}

function buyBlender() {
    if (tomatoes >= blenderfactor) {
        tomatoes -= blenderfactor;
        blenders = blenders + 1;
        blendernumber.innerHTML = blenders;
        blenderfactor = Math.round(blenderfactor + blenderfactor*0.3);
        blenderlabel.innerHTML = blenderfactor;
        tomatoadder = tomatoadder + 1 * blendermultiplier;
        update();
    }
}

function buyJuicer() {
    if (tomatoes >= juicerfactor) {
        tomatoes -= juicerfactor;
        juicers = juicers + 1;
        juicernumber.innerHTML = juicers;
        juicerfactor = Math.round(juicerfactor + juicerfactor*0.3);
        juicerlabel.innerHTML = juicerfactor;
        tomatoadder = tomatoadder + 5 * juicermultiplier;
        update();
    }
}


function addTomato() {
    tomatoes = tomatoes + tomatofactor + 1;
    tomatolabel.innerHTML = tomatoes;
}

function addBoard() {
    if (tomatoes >= boardfactor) {
        knifemultiplier = knifemultiplier * 2;
    }
}
    

function addOil() {
    if (tomatoes >= oilfactor) {
        blendermultiplier = blendermultiplier * 2;
    }
}

function addSalt() {
    if (tomatoes >= saltfactor) {
        juicermultiplier = juicermultiplier * 2;
    }
}

function addPepper() {
    if (tomatoes >= pepperfactor) {
        blendermultiplier = blendermultiplier * 2;
        juicermultiplier = juicermultiplier * 2;
    }
}

function update() {
    updateInventory();
    tomatolabel.innerHTML = tomatoes;
}

function updateInventory() {
    inventoryList.innerHTML = "";
    for (let index = 0; index < inventory.length; index++) {
        let newLI = document.createElement("li");
        newLI.innerHTML = inventory[index];
        inventoryList.append(newLI);
    }
}

setInterval(function backgroundTomato() {
    tomatoes = tomatoes + tomatoadder;
    tomatolabel.innerHTML = tomatoes;
}, 1000)



// updateInventory();

