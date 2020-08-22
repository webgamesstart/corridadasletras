const cssElements = {
  root: document.querySelector(":root"),

  basicProtection: document.getElementById("basicProtection"),

  splashScreen: document.getElementById("splashScreen"),

  load: document.getElementById("load"),
  loading: document.querySelector("#load :nth-child(1)"),
  loadLevel: document.getElementById("loadLevel"),
  loadLevelOne: document.querySelector("#loadLevel :nth-child(1)"),
  loadLevelTwo: document.querySelector("#loadLevel :nth-child(2)"),

  panelSelectPlayer: document.getElementById("panelSelectPlayer"),
  panelSelectPlayerTitle: document.getElementById("panelSelectPlayerTitle"),
  SelectPlayerTitle: document.querySelector("#panelSelectPlayerTitle h1"),
  selectPlayer: document.getElementById("selectPlayer"),
  selectPlayerPrevious: document.getElementById("selectPlayerPrevious"),
  selectPlayerNext: document.getElementById("selectPlayerNext"),
  characters: document.getElementById("characters"),
  charactersImg: document.querySelector("#characters img"),

  battleZone: document.getElementById("battleZone"),

  challenge: document.getElementById("challenge"),
  challengeImage: document.querySelector("#challenge img"),
};

let speedLoad = [500, 1000, 3000, 300, 2000];
let flagLoad = 0;
let controlLoader = null;

let flagBreakPoint = Number(
  getComputedStyle(cssElements.root).getPropertyValue("--breakPoint")
);

let flagLevel = "000";

let flagCharacter = 0;

let competitors = [];

const challengesLevel000 = [
  "abelha",
  "cachorro",
  "gato",
  "girafa",
  "leao",
  "pato",
  "porco",
];

const allCharacters = [
  {
    name: "Bob Esponja",
    file: "spongeBob",
    propertys: [
      {
        width: "150px",
        x: "-140px",
        y: "-30px",
        scale: "0.75",
      },
      {
        width: "150px",
        x: "-88px",
        y: "-30px",
        scale: "0.75",
      },
      {
        width: "120px",
        x: "-148px",
        y: "-48px",
        scale: "0.60",
      },
    ],
  },
  {
    name: "Patrick Estrela",
    file: "starPatrick",
    propertys: [
      {
        width: "120px",
        x: "-405px",
        y: "-28px",
        scale: "0.75",
      },
      {
        width: "120px",
        x: "-405px",
        y: "-28px",
        scale: "0.78",
      },
      {
        width: "100px",
        x: "-402px",
        y: "-48px",
        scale: "0.61",
      },
    ],
  },
  {
    name: "Homem Aranha",
    file: "spiderMan",
    propertys: [
      {
        width: "120px",
        x: "-705px",
        y: "-28px",
        scale: "0.75",
      },
      {
        width: "120px",
        x: "-405px",
        y: "-28px",
        scale: "0.78",
      },
      {
        width: "100px",
        x: "-402px",
        y: "-48px",
        scale: "0.61",
      },
    ],
  },
];

window.addEventListener("resize", function () {
  let temp = Number(
    getComputedStyle(cssElements.root).getPropertyValue("--breakPoint")
  );
  if (flagBreakPoint != temp) {
    flagBreakPoint = Number(
      getComputedStyle(cssElements.root).getPropertyValue("--breakPoint")
    );
    showCharacters();
  }
  
});

// function applyPropertiesToCharacters(index, width, x, y, scale){
//     allCharacters[index].width = width;
//     allCharacters[index].x = x;
//     allCharacters[index].y = y;
//     allCharacters[index].scale = scale;
// };

function load(resource, callback) {
  showLoad();
  resource.src = "../images/cartoons/characters.png";
  resource.addEventListener("load", function () {
    hideLoad();
    callback();
  });
}

function hideSplashScreen() {
  cssElements.splashScreen.style.display = "none";
}

function showSelectPlayer() {
  cssElements.panelSelectPlayer.style.display = "flex";
  cssElements.panelSelectPlayerTitle.style.display = "flex";
  cssElements.SelectPlayerTitle.style.display = "block";
  cssElements.selectPlayer.style.display = "flex";
  cssElements.selectPlayerPrevious.style.display = "block";
  cssElements.selectPlayerNext.style.display = "block";
  cssElements.characters.style.display = "block";
  cssElements.charactersImg.style.display = "block";
  showCharacters();
}

function hideSelectPlayer() {
  cssElements.panelSelectPlayer.style.display = "none";
  cssElements.panelSelectPlayerTitle.style.display = "none";
  cssElements.SelectPlayerTitle.style.display = "none";
  cssElements.selectPlayer.style.display = "none";
  cssElements.selectPlayerPrevious.style.display = "none";
  cssElements.selectPlayerNext.style.display = "none";
  cssElements.characters.style.display = "none";
  cssElements.charactersImg.style.display = "none";
}

function showCharacters() {
  cssElements.root.style.setProperty(
    "--characterWidth",
    allCharacters[flagCharacter].propertys[flagBreakPoint].width
  );
  cssElements.charactersImg.style.transform = `translateX(${allCharacters[flagCharacter].propertys[flagBreakPoint].x}) translateY(${allCharacters[flagCharacter].propertys[flagBreakPoint].y}) scale(${allCharacters[flagCharacter].propertys[flagBreakPoint].scale},${allCharacters[flagCharacter].propertys[flagBreakPoint].scale})`;
}

function showBasicProtection() {
  cssElements.basicProtection.style.display = "block";
}
function hideBasicProtection() {
  cssElements.basicProtection.style.display = "none";
}

function showLoad() {
  cssElements.load.style.display = "flex";
  cssElements.loading.style.display = "block";
  cssElements.loadLevel.style.display = "block";
  cssElements.loadLevelOne.style.display = "block";
  cssElements.loadLevelTwo.style.display = "block";
  showLoader();
}

function showLoader() {
  flagLoad = Math.floor(Math.random() * speedLoad.length);
  cssElements.root.style.setProperty("--loadSpeed", `${speedLoad[flagLoad]}ms`);
  controlLoader = setTimeout(showLoader, `${speedLoad[flagLoad]}`);
}

function hideLoad() {
  cssElements.load.style.display = "none";
  cssElements.loading.style.display = "none";
  cssElements.loadLevel.style.display = "none";
  cssElements.loadLevelOne.style.display = "none";
  cssElements.loadLevelTwo.style.display = "none";
  clearInterval(controlLoader);
}

function selectChallenge() {
  let level = eval(`challengesLevel${flagLevel}`);
  let random = Math.floor(Math.random() * level.length);
  let temp = `./images/challenges/level${flagLevel}/${level[random]}.png`;
  cssElements.challengeImage.setAttribute("src", temp);
}

function showBattleZone() {
  cssElements.battleZone.style.display = "grid";
  showChallenge();
}

function showChallenge() {
  cssElements.challenge.style.display = "flex";
  cssElements.challengeImage.style.display = "block";
}

splashScreen.addEventListener("click", function () {
  hideSplashScreen();
  load(cssElements.charactersImg, showSelectPlayer);
});

cssElements.selectPlayerNext.addEventListener("click", function () {
  if (flagCharacter < allCharacters.length - 1) {
    flagCharacter++;
    cssElements.root.style.setProperty(
      "--characterWidth",
      allCharacters[flagCharacter].propertys[flagBreakPoint].width
    );
    cssElements.charactersImg.style.transform = `translateX(${allCharacters[flagCharacter].propertys[flagBreakPoint].x}) translateY(${allCharacters[flagCharacter].propertys[flagBreakPoint].y}) scale(${allCharacters[flagCharacter].propertys[flagBreakPoint].scale},${allCharacters[flagCharacter].propertys[flagBreakPoint].scale})`;
  }
});

cssElements.selectPlayerPrevious.addEventListener("click", function () {
  if (flagCharacter >= 1) {
    flagCharacter--;
    cssElements.root.style.setProperty(
      "--characterWidth",
      allCharacters[flagCharacter].propertys[flagBreakPoint].width
    );
    cssElements.charactersImg.style.transform = `translateX(${allCharacters[flagCharacter].propertys[flagBreakPoint].x}) translateY(${allCharacters[flagCharacter].propertys[flagBreakPoint].y}) scale(${allCharacters[flagCharacter].propertys[flagBreakPoint].scale},${allCharacters[flagCharacter].propertys[flagBreakPoint].scale})`;
  }
});

// const root = document.querySelector(":root");

// const characters = document.getElementById("characters");
// const character = document.querySelector("#characters img");
// const characterPrevious = document.querySelector("#selectPlayer #previous");
// const characterNext = document.querySelector("#selectPlayer #next");

// const challengeImage = document.querySelector("#challenge img");

// const racer1 = document.getElementById("one");
// const racer2 = document.getElementById("two");

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
