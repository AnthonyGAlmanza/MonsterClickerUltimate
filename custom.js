let zenny = 0;

// Array of click updgrade objects with attributes
let items = [
    {
        name: "boomerang",
        price: 20,
        multiplier: 1,
        quantity: 0,
        image: "assets/stylesheets/boomerang.png"
    },
    {
        name: "SmBarrelBomb",
        price: 100,
        multiplier: 5,
        quantity: 0,
        image: "assets/stylesheets/SmBarrelBomb.png"
    },
    {
        name: "LgBarrelBomb",
        price: 300,
        multiplier: 15,
        quantity: 0,
        image: "assets/stylesheets/LgBarrelBomb.png"
    }
]

// Array of auto upgrade objects with attributes
let hunters = [
    {
        name: "Archer",
        price: 350,
        multiplier: 5,
        quantity: 0,
        image: "assets/stylesheets/bow.png"
    },
    {
        name: "Charge Blade",
        price: 450,
        multiplier: 10,
        quantity: 0,
        image: "assets/stylesheets/chargeblad.png"
    },
    {
        name: "Gunlance",
        price: 600,
        multiplier: 15,
        quantity: 0,
        image: "assets/stylesheets/gunlance.jpg"
    }
]



function update() {
    let zennyDisplay = document.getElementById("zennyDisplay");
    zennyDisplay.innerHTML = Math.floor(zenny);
}

function attack() {
    zenny++
    for(let i = 0; i < items.length; i++) {
        if(items[i].quantity > 0) {
            zenny += items[i].quantity * items[i].multiplier;
        }
    }
    update();
}



// function to buy an item - click upgrade
function buyItem(itemName) {
    let upgrade = items.find((item) => item.name == itemName);
    if(zenny >= upgrade.price) {
        zenny -= upgrade.price;
        upgrade.quantity++;
        upgrade.price = Math.floor(upgrade.price * 1.08);
        console.log(upgrade.price)
        update();
        showButtons();
    }
}

// function to buy a hunter - auto upgrade
function buyHunter(hunterName) {
    let upgrade = hunters.find((hunter) => hunter.name == hunterName);
    if(zenny >= upgrade.price) {
        zenny -= upgrade.price;
        upgrade.quantity++;
        upgrade.price = Math.floor(upgrade.price * 1.08);
        update();
        showButtons();
    }
}


// function to display upgrade buttons
let itemArea = document.getElementById("itemButtons");

let hunterArea = document.getElementById("hunterButtons");

function showButtons() {
    let itemTemplate = "";
    let hunterTemplate = "";
    items.forEach(
        (item) => (itemTemplate += `<button id="upgradeButton" style="background-image: url(${item.image})" onclick="buyItem('${item.name}')">$${item.price} <br/>${item.name}<br/>+${item.multiplier * item.quantity} per click</button>`)
    )
    itemArea.innerHTML = itemTemplate;
    hunters.forEach(
        (hunter) => (hunterTemplate += `<button id="upgradeButton" style="background-image: url(${hunter.image})" onclick="buyHunter('${hunter.name}')">$${hunter.price} <br/>${hunter.name}<br/>+${hunter.multiplier * hunter.quantity} every 3 seconds</button>`)
    )
    hunterArea.innerHTML = hunterTemplate;
}

showButtons();






