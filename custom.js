let zenny = 0;


function update() {
    let zennyDisplay = document.getElementById("zennyDisplay");
    zennyDisplay.innerHTML = zenny;
}

function attack() {
    zenny++
    update();
}

