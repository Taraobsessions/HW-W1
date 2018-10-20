const hero = {
    name: 'Hercules',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2,
    }
}
function rest(hero) {
    if (hero.health === 2) {
    return hero.health = 10
} else if (hero.health === 4) {
    return hero.health = 10
}
return hero
}

const image = document.getElementById("inn");
image.onclick = function () {
    if (hero.health === 8)
    return hero.health = 10
}


function pickUpItem(hero, weapon) {
    if (weapon)
    return hero.inventory.push(weapon)
}

const daggerimage = document.getElementById('dagger');
daggerimage.onclick = function () {
    let dagger = {
        type: 'dagger',
        damage: 2,
    }
    pickUpItem(hero, dagger)
    
}

function equipWeapon(hero) {
    if (hero.inventory.length === 0){
    return 
} else {
    hero.weapon = hero.inventory[0]
    }
}
const bagimage = document.getElementById('bag');
bagimage.onclick = function () {
    equipWeapon(hero)
}