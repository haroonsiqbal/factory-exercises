const animalContainer = document.querySelector("#animals")
const render = (animalString) => {
    animalContainer.innerHTML += animalString
}

const createAnimal = (stuffingMaterial, furMaterial, eyeballMaterial, color, hasClothing, species) => {
    return {

        toString() {
            return `The ${this.color} ${this.species} filled with ${this.material.stuffing}`
        },

        material: {
            stuffing: stuffingMaterial,
            fur: furMaterial,
            eyeball: eyeballMaterial
        },
        color: color,
        hasClothing: hasClothing,
        species: species
    }
}

const diggy = createAnimal("cotton", "wool", "felt", "goldenrod", false, "iguana");

const sonic = createAnimal("beans", "tortilla", "human", "fuschia", true, "hedgehog");

render(sonic);
render(diggy);

// kneel diamonds

const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

const createCustomRing = (style, carets, metal) => {
    return {
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: metal.price + style.price + carets.price
    }
}

const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])

//practice: doctors

const createDoctor = (name, speciality, address) => {
    return {
        name: name,
        speciality: speciality,
        address: address
    }
}

const doc1 = createDoctor("steve", "peds", "123 main st")
const doc2 = createDoctor("harold", "ortho", "65 north west street")
console.log(doc2);

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const BowWowKennels = [];

const pet1 = createPet("fido", "german shepherd");
const pet2 = createPet("mr. whiskers", "orange tabby");
const pet3 = createPet("champ", "pit bull");

BowWowKennels.push(pet1, pet2, pet3);

//practice: music row

const JumpStopRecords = [];
const ChattenRecords = [];
const PolarRecords = [];

const createFunkArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const createRapArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const createCountryArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const createBluegrassArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const createPopArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const bruce = createCountryArtist("Bruce Atikins", 23)
const jensen = createPopArtist("Jensen Brown", 20)
const dre = createFunkArtist("Dre Funkz", 25)
const dusta = createRapArtist("Dusta Grimes", 21)
const bart = createBluegrassArtist("Bartholomew Danielson", 23)
const avilee = createCountryArtist("Avilee Dallas", 19)
const austin = createPopArtist("Austin Kinkaid", 22)
const loyonce = createRapArtist("Loyonce Branis", 27)

JumpStopRecords.push(dre, dusta, loyonce);
ChattenRecords.push(bruce, bart, avilee);
PolarRecords.push(jensen, austin);

console.log(JumpStopRecords);
console.log(ChattenRecords);
console.log(PolarRecords);