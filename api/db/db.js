async function addToDB(name, species, gender, house, dateOfBirth, yearOfBirth,
  ancestry, eyeColour, hairColour, wand, patronus, hogwartsStudent, hogwartsStaff, actor,
  alive, image) {

  const Firestore = require('@google-cloud/firestore');

  const db = new Firestore({
    projectId: 'harrypotter-api-316818'
  });

  const docRef = db.collection('students').doc(name);

  await docRef.set({
    name: name,
    species: species,
    gender: gender,
    house: house,
    dateOfBirth: dateOfBirth,
    yearOfBirth: yearOfBirth,
    ancestry: ancestry,
    eyeColour: eyeColour,
    hairColour: hairColour,
    wand: {
      core: wand.core,
      length: wand.length,
      wood: wand.wood
    },
    patronus: patronus,
    hogwartsStudent: hogwartsStudent,
    hogwartsStaff: hogwartsStaff,
    actor: actor,
    alive: alive,
    image: image
  });

  console.log("Added data");
}

const data = () => {
  const characters = require('./characters.json');
  characters.forEach(({ name, species, gender, house, dateOfBirth, yearOfBirth,
    ancestry, eyeColour, hairColour, wand, patronus, hogwartsStudent, hogwartsStaff, actor,
    alive, image }) => {
      addToDB(name, species, gender, house, dateOfBirth, yearOfBirth,
        ancestry, eyeColour, hairColour, wand, patronus, hogwartsStudent, hogwartsStaff, actor,
        alive, image);
  });
}

data();