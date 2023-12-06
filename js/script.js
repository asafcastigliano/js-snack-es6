let bike = [
    {
        name: "Super Bike",
        weight: 20
    },
    {
        name: "Luigi Bike",
        weight: 10
    },
    {
        name: "Mario Bike",
        weight: 5
    }
]

const lightBike = bike.reduce((minBike, currentBike) => {
    return minBike.weight < currentBike.weight ? minBike : currentBike;
});
  
const { name, weight } = lightBike;
  
console.log(`La bici più leggera è ${name} con un peso di ${weight} kg.`);

function ganerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
 
// Funzione per generare un numero casuale compreso tra min e max inclusi
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const team = [
    {
        nome: 'Pamra',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

team.forEach(elem => {
    elem.puntiFatti = generateRandomNumber(0, 100);
    elem.falliSubiti = generateRandomNumber(0, 50);
});

const nomiEFalliSubiti = team.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log(team);
console.log(nomiEFalliSubiti);
