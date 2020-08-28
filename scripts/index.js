const htmlElements = {
  root: document.querySelector(":root"),

  basicProtection: document.getElementById("basicProtection"),

  homeScreen: document.getElementById("homeScreen"),

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
  panelSelectPlayerOK: document.getElementById("OK"),

  battleZone: document.getElementById("battleZone"),

  containerChallenge: document.getElementById("containerChallenge"),
  challengeImage: document.querySelector("#challenge img"),

  speedWay: document.getElementById("speedWay"),
  racersImgs: document.querySelectorAll("#speedWay div img"),
  racerOne: document.getElementById("racerOne"),
  racerTwo: document.getElementById("racerTwo"),

  word: document.getElementById("word"),
  wordSelected: document.querySelector("#word h2"),

  board: document.getElementById("board")
};

let speedLoad = [500, 1000, 3000, 300, 2000];
let flagLoad = 0;
let controlLoader = null;

let flagBreakPoint = Number(
  getComputedStyle(htmlElements.root).getPropertyValue("--breakPoint")
);

let flagLevel = "000";

let filesTheLoad = [];
let resourcesTheLoad = [];

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

// window.addEventListener("resize", function () {
//   let temp = Number(
//     getComputedStyle(htmlElements.root).getPropertyValue("--breakPoint")
//   );
//   if (flagBreakPoint != temp) {
//     flagBreakPoint = Number(
//       getComputedStyle(htmlElements.root).getPropertyValue("--breakPoint")
//     );
//     showCharacters();
//   }
// });

function load(resource, image, callback) {
  showLoad();
  resource.src = image;
  resource.addEventListener("load", function () {
    hideLoad();
    callback();
  });
}

function loadMultipleFiles(resources, images, callback) {
  showLoad();
  let temp = 0;
  for (let i = 0; i < resources.length; i++) {
    resources[i].src = images[i];
    resources[i].addEventListener("load", function () {
      temp++;
      if (temp >= resources.length) {
        hideLoad();
        callback();
      }
    });
  }
}

function showHomeScreen() {
  htmlElements.homeScreen.style.display = "block";
}

function hideHomeScreen() {
  htmlElements.homeScreen.style.display = "none";
}

function showSelectPlayer() {
  htmlElements.panelSelectPlayer.style.display = "flex";
  htmlElements.panelSelectPlayerTitle.style.display = "flex";
  htmlElements.SelectPlayerTitle.style.display = "block";
  htmlElements.selectPlayer.style.display = "flex";
  htmlElements.selectPlayerPrevious.style.display = "block";
  htmlElements.selectPlayerNext.style.display = "block";
  htmlElements.characters.style.display = "block";
  htmlElements.charactersImg.style.display = "block";
  showCharacters();
}

function hideSelectPlayer() {
  htmlElements.panelSelectPlayer.style.display = "none";
  htmlElements.panelSelectPlayerTitle.style.display = "none";
  htmlElements.SelectPlayerTitle.style.display = "none";
  htmlElements.selectPlayer.style.display = "none";
  htmlElements.selectPlayerPrevious.style.display = "none";
  htmlElements.selectPlayerNext.style.display = "none";
  htmlElements.characters.style.display = "none";
  htmlElements.charactersImg.style.display = "none";
}

function showCharacters() {
  htmlElements.root.style.setProperty(
    "--characterWidth",
    allCharacters[flagCharacter].expectation[flagBreakPoint].width
  );
  htmlElements.root.style.setProperty(
    "--characterHeight",
    allCharacters[flagCharacter].expectation[flagBreakPoint].height
  );
  htmlElements.charactersImg.style.left =
    allCharacters[flagCharacter].expectation[flagBreakPoint].x;
  htmlElements.charactersImg.style.top =
    allCharacters[flagCharacter].expectation[flagBreakPoint].y;
}

function showCharactersThanking() {
  htmlElements.root.style.setProperty(
    "--characterWidth",
    allCharacters[flagCharacter].thanking.width
  );
  htmlElements.root.style.setProperty(
    "--characterHeight",
    allCharacters[flagCharacter].thanking.height
  );
  htmlElements.charactersImg.style.left =
    allCharacters[flagCharacter].thanking.x;
  htmlElements.charactersImg.style.top =
    allCharacters[flagCharacter].thanking.y;
  setTimeout(showBattleZone, 1000);
}

function showBasicProtection() {
  htmlElements.basicProtection.style.display = "block";
}
function hideBasicProtection() {
  htmlElements.basicProtection.style.display = "none";
}

function showLoad() {
  htmlElements.load.style.display = "flex";
  htmlElements.loading.style.display = "block";
  htmlElements.loadLevel.style.display = "block";
  htmlElements.loadLevelOne.style.display = "block";
  htmlElements.loadLevelTwo.style.display = "block";
  showLoader();
}

function showLoader() {
  flagLoad = Math.floor(Math.random() * speedLoad.length);
  htmlElements.root.style.setProperty(
    "--loadSpeed",
    `${speedLoad[flagLoad]}ms`
  );
  controlLoader = setTimeout(showLoader, `${speedLoad[flagLoad]}`);
}

function hideLoad() {
  htmlElements.load.style.display = "none";
  htmlElements.loading.style.display = "none";
  htmlElements.loadLevel.style.display = "none";
  htmlElements.loadLevelOne.style.display = "none";
  htmlElements.loadLevelTwo.style.display = "none";
  clearInterval(controlLoader);
}

function showChallenge() {
  htmlElements.challenge.style.display = "block";
  htmlElements.challengeImage.style.display = "block";
  showChallengeSelected();
}
function hideChallenge() {
  htmlElements.challenge.style.display = "none";
  htmlElements.challengeImage.style.display = "none";
}

function selectChallenge() {
  let level = eval(`challengesLevel${flagLevel}`);
  let random = Math.floor(Math.random() * level.length);
  let temp = `./images/challenges/level${flagLevel}/${level[random]}.png`;
  htmlElements.challengeImage.setAttribute("src", temp);
}

function showChallengeSelected() {
  // let temp = selectChallenge();
  let temp = challengesLevel000[0][1];
  console.log(temp.nome);
  htmlElements.challenge.style.width = temp.width;
  htmlElements.challengeImage.style.left = temp.x;
}

function selectFileChallenge() {
  let level = eval(`challengesLevel${flagLevel}`);
  if (flagFileForLevel <= level.length) {
    fileChallengeTheLoad = `../images/challenges/level${flagLevel}/${flagFileForLevel}.png`;
  }
}

function loadChallenge() {
  selectFileChallenge();
  load(htmlElements.challengeImage, fileChallengeTheLoad, showChallenge);
}

function showBattleZone() {
  hideSelectPlayer();
  htmlElements.battleZone.style.display = "grid";
  htmlElements.containerChallenge.style.display = "flex";
  htmlElements.speedWay.style.display = "flex";
  htmlElements.word.style.display = "flex";
  htmlElements.board.style.display = "flex";
  loadChallenge();
  showRacers();
}

homeScreen.addEventListener("click", function () {
  hideHomeScreen();
  load(htmlElements.charactersImg, showSelectPlayer);
});

htmlElements.selectPlayerNext.addEventListener("click", function () {
  if (flagCharacter < allCharacters.length - 1) {
    flagCharacter++;
    showCharacters();
  }
});

htmlElements.selectPlayerPrevious.addEventListener("click", function () {
  if (flagCharacter >= 1) {
    flagCharacter--;
    showCharacters();
  }
});

htmlElements.panelSelectPlayerOK.addEventListener(
  "click",
  showCharactersThanking
);

function showRacers() {
  htmlElements.racerOne.style.display = "block";
  htmlElements.racerTwo.style.display = "block";
}

function hideRacers() {
  htmlElements.racerOne.style.display = "none";
  htmlElements.racerTwo.style.display = "none";
}

function selectRacers() {
  competitors[0] = allCharacters[flagCharacter].file;
  let indexSelected = Math.floor(Math.random() * allCharacters.length);
  while (flagCharacter === indexSelected) {
    indexSelected = Math.floor(Math.random() * allCharacters.length);
  }
  competitors[1] = allCharacters[indexSelected].file;
}

function positionCharacters() {
  selectRacers();
  racer1.src = `./images/cartoons/${competitors[0]}/${competitors[0]}.png`;
  // racer1.style.transform = `translateX(${bobSponge.correndo.x}) translateY(${bobSponge.correndo.y}) scale(${bobSponge.correndo.scale},${bobSponge.correndo.scale})`;

  racer2.src = `./images/cartoons/${competitors[1]}/${competitors[1]}.png`;
  // racer2.style.transform = `translateX(${patrickStar.correndo.x}) translateY(${patrickStar.correndo.y}) scale(${patrickStar.correndo.scale},${patrickStar.correndo.scale})`;
}
