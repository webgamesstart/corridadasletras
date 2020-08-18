const cssElements = {
    root: document.querySelector(":root"),

    basicProtection: document.getElementById('basicProtection'),

    load: document.getElementById('load'),
    loading: document.querySelector('#load :nth-child(1)'),
    loadLevel: document.getElementById('loadLevel'),
    loadLevelOne: document.querySelector('#loadLevel :nth-child(1)'),
    loadLevelTwo: document.querySelector('#loadLevel :nth-child(2)'),

    battleZone: document.getElementById('battleZone'),

    challenge: document.getElementById('challenge'),
    challengeImage: document.querySelector("#challenge img")
};

speedLoad = [500, 1000, 3000, 300, 2000];
flagLoad = 0;
controlLoader = null;

let flagLevel = "000";

const challengesLevel000 = [
    "abelha",
    "cachorro",
    "gato",
    "girafa",
    "leao",
    "pato",
    "porco",
];

function show() {
    cssElements.basicProtection.style.display = 'block';
};
function hide() {
    cssElements.basicProtection.style.display = 'none';
};

function showLoad(){
    cssElements.load.style.display = 'flex';
    cssElements.loading.style.display = 'block';
    cssElements.loadLevel.style.display = 'block';
    cssElements.loadLevelOne.style.display = 'block';
    cssElements.loadLevelTwo.style.display = 'block';
    showLoader();
}

function showLoader() {
    flagLoad = Math.floor(Math.random() * speedLoad.length);
    cssElements.root.style.setProperty('--loadSpeed', `${speedLoad[flagLoad]}ms`);
    controlLoader = setTimeout(showLoader, `${speedLoad[flagLoad]}`);
};

function hideLoad(){
    cssElements.load.style.display = 'none';
    cssElements.loading.style.display = 'none';
    cssElements.loadLevel.style.display = 'none';
    cssElements.loadLevelOne.style.display = 'none';
    cssElements.loadLevelTwo.style.display = 'none';
    controlLoader = null;
}

function selectChallenge() {
  let level = eval(`challengesLevel${flagLevel}`);
  let random = Math.floor(Math.random() * level.length);
  let temp = `./images/challenges/level${flagLevel}/${level[random]}.png`;
  cssElements.challengeImage.setAttribute("src", temp);
}

function showBattleZone(){
    cssElements.battleZone.style.display = 'grid';
    showChallenge();
}

function showChallenge(){
    cssElements.challenge.style.display = 'flex';
    cssElements.challengeImage.style.display = 'block';
}









// const root = document.querySelector(":root");

// const characters = document.getElementById("characters");
// const character = document.querySelector("#characters img");
// const characterPrevious = document.querySelector("#selectPlayer #previous");
// const characterNext = document.querySelector("#selectPlayer #next");

// const challengeImage = document.querySelector("#challenge img");

// const racer1 = document.getElementById("one");
// const racer2 = document.getElementById("two");

// let flagCharacter = 0;

// let flagLevel = "000";

// let competitors = [];

// const bobSponge = {
//   agradecendo:{
//     x: '3',
//     y: '3',
//     scale: ''
//   },
//   correndo:{
//     top: '85%',
//     width: '85px',
//     height: '90px',
//     x: '-335px',
//     y: '-68px',
//     scale: '0.4'
//   },
//   expectativa:{
//     x: '387',
//     y: '2',
//     scale: ''
//   },
//   perdendo:{
//     x: '576',
//     y: '3',
//     scale: ''
//   },
//   ganhando:{
//     x: '732',
//     y: '1',
//     scale: ''
//   }
// };

// const patrickStar = {
//   agradecendo:{
//     x: '3',
//     y: '3',
//     scale: ''
//   },
//   correndo:{
//     top: '85%',
//     width: '85px',
//     height: '90px',
//     x: '-300px',
//     y: '-80px',
//     scale: '0.35'
//   },
//   expectativa:{
//     x: '387',
//     y: '2',
//     scale: ''
//   },
//   perdendo:{
//     x: '576',
//     y: '3',
//     scale: ''
//   },
//   ganhando:{
//     x: '732',
//     y: '1',
//     scale: ''
//   }
// };

// const allCharacters = [
//   {
//     name: "Bob Esponja",
//     file: "bobSponge",
//     width: "150px",
//     x: "-25px",
//     y: "-20px",
//     scale: "0.85",
//   },
//   {
//     name: "Patrick Estrela",
//     file: "patrickStar",
//     width: "120px",
//     x: "-185px",
//     y: "-18px",
//     scale: "0.90",
//   },
// ];

// const challengesLevel000 = [
//   "abelha",
//   "cachorro",
//   "gato",
//   "girafa",
//   "leao",
//   "pato",
//   "porco",
// ];

// root.style.setProperty("--characterWidth", allCharacters[flagCharacter].width);
// character.src = "../images/cartoons/characters.png";
// character.style.transform = `translateX(${allCharacters[flagCharacter].x}) translateY(${allCharacters[flagCharacter].y}) scale(${allCharacters[flagCharacter].scale},${allCharacters[flagCharacter].scale})`;

// function selectRacers(){
//   competitors[0] = allCharacters[flagCharacter].file;
//   let indexSelected = Math.floor(Math.random() * allCharacters.length);
//   while(flagCharacter === indexSelected){
//     indexSelected = Math.floor(Math.random() * allCharacters.length);
//   };
//   competitors[1] = allCharacters[indexSelected].file;
// };

// characterNext.addEventListener("click", function () {
//   if (flagCharacter < allCharacters.length - 1) {
//     flagCharacter++;
//     root.style.setProperty(
//       "--characterWidth",
//       allCharacters[flagCharacter].width
//     );
//     character.style.transform = `translateX(${allCharacters[flagCharacter].x}) translateY(${allCharacters[flagCharacter].y}) scale(${allCharacters[flagCharacter].scale},${allCharacters[flagCharacter].scale})`;
//   }
// });

// characterPrevious.addEventListener("click", function () {
//   if (flagCharacter >= 1) {
//     flagCharacter--;
//     root.style.setProperty(
//       "--characterWidth",
//       allCharacters[flagCharacter].width
//     );
//     character.style.transform = `translateX(${allCharacters[flagCharacter].x}) translateY(${allCharacters[flagCharacter].y}) scale(${allCharacters[flagCharacter].scale},${allCharacters[flagCharacter].scale})`;
//   }
// });

// function selectChallenge() {
//   let level = eval(`challengesLevel${flagLevel}`);
//   let random = Math.floor(Math.random() * level.length);
//   let temp = `./images/challenges/level${flagLevel}/${level[random]}.png`;
//   challengeImage.setAttribute("src", temp);
// }

// function positionCharacters() {
//   selectRacers();
//   racer1.src = `./images/cartoons/${competitors[0]}/${competitors[0]}.png`;
//   // racer1.style.transform = `translateX(${bobSponge.correndo.x}) translateY(${bobSponge.correndo.y}) scale(${bobSponge.correndo.scale},${bobSponge.correndo.scale})`;

//   racer2.src = `./images/cartoons/${competitors[1]}/${competitors[1]}.png`;
//   // racer2.style.transform = `translateX(${patrickStar.correndo.x}) translateY(${patrickStar.correndo.y}) scale(${patrickStar.correndo.scale},${patrickStar.correndo.scale})`;
// }

// selectChallenge();

// positionCharacters();
