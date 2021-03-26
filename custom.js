let zenny = 0;

// Array of click updgrade objects with attributes
let items = [
    {
        name: "boomerang",
        price: 20,
        multiplier: 1,
        quantity: 0
    },
    {
        name: "SmBarrelBomb",
        price: 100,
        multiplier: 5,
        quantity: 0
    },
    {
        name: "LgBarrelBomb",
        price: 300,
        multiplier: 15,
        quantity: 0
    }
]

// Array of auto upgrade objects with attributes
let hunters = [
    {
        name: "Archer",
        price: 350,
        multiplier: 5,
        quantity: 0
    },
    {
        name: "Charge Blade",
        price: 450,
        multiplier: 10,
        quantity: 0
    },
    {
        name: "Gunlance",
        price: 600,
        multiplier: 15,
        quantity: 0
    }
]



function update() {
    let zennyDisplay = document.getElementById("zennyDisplay");
    zennyDisplay.innerHTML = zenny;
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
    if(cash >= upgrade.price) {
        cash -= upgrade.price;
        upgrade.quantity++;
        upgrade.price *= .02;
    }
}

// function to buy a hunter - auto upgrade
function buyHunter(hunterName) {
    let upgrade = hunters.find((hunter) => hunter.name == hunterName);
    if(cash >= upgrade.price) {
        cash -= upgrade.price;
        upgrade.quantity++;
        upgrade.price *= .02;
    }
}


// function to display upgrade buttons







